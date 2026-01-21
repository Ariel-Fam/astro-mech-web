"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Props = {
  frameCount?: number;
  /**
   * Path template to your frames in /public
   * Example: "/render/1.png"
   */
  framePath?: (index: number) => string;

  /**
   * Optional: tweak positioning (your vanilla used -425, 0)
   */
  drawOffsetX?: number;
  drawOffsetY?: number;

  /**
   * Optional: ScrollTrigger end distance (your vanilla used "500%")
   */
  end?: string;
};

export default function CanvasSequence({
  frameCount = 230,
  framePath = (i) => `/render/${i + 1}.png`,
  drawOffsetX = -532,
  drawOffsetY = 0,
  end = "500%",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Keep the animated state object stable across renders (like your `ball`)
  const state = useMemo(() => ({ frame: 0 }), []);

  useEffect(() => {
    // Client-only safety
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(); // re-render on resize
    };

    // Preload images
    const images: HTMLImageElement[] = [];
    let isMounted = true;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      images.push(img);
    }

    // Render function (same logic as your vanilla)
    function render() {
      if (!isMounted) return;
      const img = images[state.frame];
      if (!img || !img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, drawOffsetX, drawOffsetY);
    }

    // Ensure first render happens after first image loads
    images[0].onload = () => {
      resize();
      render();
    };

    window.addEventListener("resize", resize);

    // Create the GSAP tween + ScrollTrigger
    const tween = gsap.to(state, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
      scrollTrigger: {
        trigger: wrapper,
        scrub: true,
        pin: canvas, // pins the canvas (matches your vanilla)
        end,
      },
    });

    // Cleanup
    return () => {
      isMounted = false;
      window.removeEventListener("resize", resize);
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.refresh();
    };
  }, [drawOffsetX, drawOffsetY, end, frameCount, framePath, state]);

  return (
    // Wrapper provides a trigger element and scroll distance context
    <div ref={wrapperRef} style={{ width: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
        }}
      />
    </div>
  );
}
