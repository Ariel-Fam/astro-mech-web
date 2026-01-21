"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Props = {
  frameCount?: number;
  framePath?: (index: number) => string;
  drawOffsetX?: number;
  drawOffsetY?: number;
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

  const state = useMemo(() => ({ frame: 0 }), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;

    // ✅ Capture a guaranteed non-null context for use in closures
    const ctx: CanvasRenderingContext2D = maybeCtx;

    const images: HTMLImageElement[] = [];
    let isMounted = true;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      images.push(img);
    }

    const render = () => {
      if (!isMounted) return;
      const img = images[state.frame];
      if (!img || !img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, drawOffsetX, drawOffsetY);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    images[0].onload = () => {
      resize();
      render();
    };

    window.addEventListener("resize", resize);

    const tween = gsap.to(state, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
      scrollTrigger: {
        trigger: wrapper,
        scrub: true,
        pin: canvas,
        end,
      },
    });

    return () => {
      isMounted = false;
      window.removeEventListener("resize", resize);
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.refresh();
    };
  }, [drawOffsetX, drawOffsetY, end, frameCount, framePath, state]);

  return (
    <div ref={wrapperRef} style={{ width: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100vw", height: "100vh", display: "block" }}
      />
    </div>
  );
}
