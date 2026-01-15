"use client"
import Image from "next/image";
import Link from "next/link";
import { saira, pixelfy, hanalei } from "@/lib/fonts";  
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Galaxy from "@/components/Galaxy";
import Lightning from "@/components/Lightning";
import PrismaticBurst from "@/components/PrismaticBurst";
import { abilityData } from "@/lib/data";
import AbilityCard from "@/components/abilityCards";
import { Button } from "@/components/ui/button";
import ModelViewer from "@/components/ModelViewer";


export default function Home() {
  return (
    <div >


      <section>

        <div className="
          w-full
          bg-[url('/background.png')] bg-cover bg-center bg-no-repeat
          flex flex-col items-center 
          px-6 text-white
        "
        >

          <Image
          src={"/astroMech.png"}
          height={200}
          width={300}
          alt="img"
          className="mb-4 sm:mb-4 md:mb-20 lg:mb-12"
          />



          <div className="flex flex-col items-center">


            <Card className="flex flex-col items-center bg-transparent border-none mb-10 ml-8 sm:ml-4">

              <CardContent className="grid grid-rows-3 sm:grid-rows-3 md:grid-cols-3 lg:grid-cols-3 gap-4">

                <Image
                src={"/cosmaraLogo.png"}
                height={150}
                width={150}
                alt="img"
                className="rounded-3xl ml-24 sm:ml-14 md:ml-22 lg:ml-1"
                />

            

                <Image
                src={"/iso2.png"}
                height={300}
                width={200}
                alt="img"
                />




                <Card className="flex flex-col gap-7 items-center w-60 h-80 border-purple-700 border-2 ml-17 sm:ml-17 md:ml-0 lg:ml-0  ">

                  <CardTitle>Planet System:</CardTitle>

                  <CardContent>
                    Cosmae
                  </CardContent>

                  <CardTitle>Core Intelligence:</CardTitle>

                  <CardContent>
                    Quantum-5
                  </CardContent>

                  <CardTitle>Serial Number:</CardTitle>

                  <CardContent>
                    0110
                  </CardContent>


              </Card>



              <Card className="bg-black w-[90vw] mt-10 mr-10 sm:mr-10 md:mr-0 lg:mr-0">

                <CardContent className="p-8">

                  <CardTitle>
                  <h1 className={`${hanalei.className}
                    text-green-600 text-4xl`}>Ai Generated Character</h1>
                  </CardTitle>


                  <div className="mt-20">

                    

                    <h3 className={`${hanalei.className}
                    text-yellow-400 text-1xl `}>In a distant corner of the cosmos where stars collide and galaxies merge, meet Astro Mech. A hero forged from the fabric of
                      space and time, as he ventures through the Ai generated planetary system called Cosmae.
                    </h3>
                  </div>
                </CardContent>
              </Card>




              </CardContent>
            </Card>

            



          </div>

        
        
        

        
        </div>

      </section>
    


      <section className=" flex flex-col items-center text-white h-[50vh] justify-center">


        <div className="w-full
            bg-[url('/logoBackground.png')] bg-cover bg-center bg-no-repeat
            flex flex-col items-center justify-center
            px-6 text-white h-[50vh]">

            <Image
              src={"/softwareLogo.png"}
              height={300}
              width={200}
              alt="img"
              className={"spinner scale-140"}
              quality={99}

            />

        </div>
        

        

      </section>

      <section className="h-[100vh]">
        <div className="grid grid-rows-2 sm:grid-rows-2 md:grid-cols-2 lg:grid-cols-2 gap-0">


          <div className="flex flex-col items-center justify-center w-[100vw] h-[50vh] sm:w-[100vw] md:w-[50vw] lg:w-[60vw] lg:h-[50vw] lg:rounded-br-3xl  bg-white">

            <Image
            src={"/argoView.png"}
            height={400}
            width={400}
            alt="img"

            />

          



          </div>

          <div className="flex flex-col opacity-100 sm:opacity-100  md:opacity-100 lg:opacity-100 items-center justify-center -[100vw] h-[50vh] sm:w-[100vw] md:w-[50vw]  lg:rounded-b-lg bg-black">

            <Image
            src={"/comfyUi.png"}
            height={400}
            width={400}
            alt="img"

            />

          



          </div>


          <div className="grid grid-rows-2 sm:grid-rows-2  md:mt-[-110px] lg:grid-rows-2">

            <div className="bg-gray-600 w-[100vw] sm:w-[100vw] md:w-[100vw] h-[50vh] flex flex-col items-center justify-center p-8">
              <h1 className={`${pixelfy.className}
              text-black mb-7 text-2xl `}>Origins</h1>

              <h3 className="text-white text-center">Astro Mech is an Ai generated character that was developed created using the Flex Dev Model on Open Art Ai platform, then i later trained a SDXL 1.0 LORA on those images and created my own LORA
                to enable local image gen.
              </h3>
            </div>


            <div className="bg-black w-[100vw] sm:w-[100vw] md:w-[100vw]  h-[50vh] flex flex-col items-center justify-center p-4">
              <Card className="text-black bg-gray-400">

                <CardContent className="text-center">

                  Astro Mech Ventures through the Ai generated planet system Cosmae looking for Amethyst crystals, Exotic technology && rare 
                  Materials with malleable chemical properties.

                </CardContent>

              </Card>
            </div>



          </div>
        </div>


        <section className="min-h-screen flex flex-col items-center justify-center py-16">

          <div style={{ width: '100%', height: '140vh', position: 'relative' }}>
            <PrismaticBurst
              animationType="rotate3d"
              intensity={4}
              speed={0.2}
              distort={1.0}
              paused={false}
              offset={{ x: 0, y: 0 }}
              hoverDampness={0.25}
              rayCount={28}
              mixBlendMode="lighten"
              colors={['#BF000D', '#06693C', '#062569']}
            />
          </div>

          <Card className="absolute" >

            <CardTitle> <h1 className={`${saira.className} text-4xl md:text-5xl text-gray-800 text-center mb-12`}>
                          Cosmae Planets
                        </h1>
            </CardTitle>

            <CardContent className="flex flex-col items-center">

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">

                {/* Row 1 */}
                <Link href={"https://astro-mech-next.vercel.app/aerthys"} className="flex flex-col items-center group">
                  <Image
                    src={"/aerthys.png"}
                    height={120}
                    width={120}
                    alt="Aerthys"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>AERTHYS</span>
                </Link>

                <Link href={"https://astro-mech-next.vercel.app/cosmara"} className="flex flex-col items-center group">
                  <Image
                    src={"/cosmara.png"}
                    height={120}
                    width={120}
                    alt="Cosmara"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>COSMARA</span>
                </Link>

                <Link href={"https://astro-mech-next.vercel.app/elyria"} className="flex flex-col items-center group">
                  <Image
                    src={"/elyria.png"}
                    height={120}
                    width={120}
                    alt="Elyria"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>ELYRIA</span>
                </Link>

                <Link href={"https://astro-mech-next.vercel.app/kairos"} className="flex flex-col items-center group">
                  <Image
                    src={"/kairos.png"}
                    height={120}
                    width={120}
                    alt="Kairos"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>KAIROS</span>
                </Link>

                {/* Row 2 */}
                <Link href={"https://astro-mech-next.vercel.app/stellaluna"} className="flex flex-col items-center group">
                  <Image
                    src={"/stellaluna.png"}
                    height={120}
                    width={120}
                    alt="Aerthys"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>STELLALUNA</span>
                </Link>

                <Link href={"https://astro-mech-next.vercel.app/luminaria"} className="flex flex-col items-center group">
                  <Image
                    src={"/luminaria.png"}
                    height={120}
                    width={120}
                    alt="Cosmara"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>LUMINARIA</span>
                </Link>

                <Link href={"https://astro-mech-next.vercel.app/terraverde"} className="flex flex-col items-center group">
                  <Image
                    src={"/terraverde.png"}
                    height={120}
                    width={120}
                    alt="Elyria"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>TERRAVERDE</span>
                </Link>

                <Link href={"https://astro-mech-next.vercel.app/nexarion"} className="flex flex-col items-center group">
                  <Image
                    src={"/nexarion.png"}
                    height={120}
                    width={120}
                    alt="Kairos"
                    className="transition-transform group-hover:scale-140"
                  />
                  <span className={`${saira.className} text-gray-700 font-semibold mt-2 text-sm tracking-wide`}>NEXARION</span>
                </Link>

              </div>



              <Link href="https://astro-mech-next.vercel.app/">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-400 hover:text-green-500 hover:scale-110 hover:shadow-lg transition-shadow duration-200">
                  Explore Planets
                </button>
              </Link>


            </CardContent>
          </Card>

          


      </section>



      <section className="relative min-h-screen">
        {/* Galaxy background */}
        <div className="absolute inset-0 z-0">
          {/* <Galaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={140}
          /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center py-24 px-4">

          <h1 className={`${saira.className}
          text-white text-2xl`}> Abilities</h1>
            
          

          <video 
            className="w-[70vw] max-w-4xl rounded-3xl mb-20" 
            controls 
            autoPlay 
            loop 
            src="natureWalk.mp4"
            
          />

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {abilityData.map((data) => (
              <AbilityCard key={data.name} name={data.name} descrition={data.description} src={data.src} />
            ))}
          </div>
        </div>
      </section>


      <section className="relative z-0 h-screen">
        <div className="flex flex-col items-center justify-center absolute inset-0 z-0">
          <Galaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={200}
          />


          <h1 className={`${saira.className}
          text-white text-center absolute`}>
          Mouse Mass has gravitational lensing effects !
          </h1>

          <h1 className={`${saira.className}
          text-white absolute mt-14`}>
          {"[Touch the screen on mobile for the same effect]"}
          </h1>
        </div>

        

      </section>


      <section className="flex flex-col items-center justify-center bg-gray-600 h-[140vh]">


          <div className="grid grid-rows-2">


            <div className="flex flex-col items-center justify-center">
              <Image

                src={"/astroMech.jpg"}
                height={200}
                width={200}
                alt="img"
                className="rounded-2xl hover:scale-125"

            />

            </div>
            

            <Card className="p-7 w-[70vw] mb-20">
              <CardTitle className={`${saira.className}`} >Astro_Mech_0110.html Album</CardTitle>

              <CardContent className={`${saira.className} flex flex-col gap-4`}>This album showcases some of 
              my most thematic and versatile music production to date, it is no available on your streaming platform of choice. The album includes unique Spotify canvases that convey the exploratory nature of the audio and concept,
              it is based on Astro Mech’s ventures through the CosmoVerse.

              <div className="flex flex-col items-center gap-2">
                <Link href={"https://open.spotify.com/album/6K6HP0OCSjeal5wjzc7KhI?si=Twu3wM9eT4urbMWuXJFFpA"}>
                  <Button className="hover:bg-amber-400 hover:text-green-800 hover:scale-125" >Liston on Spotify</Button>
                </Link>

                <Link href={"https://music.apple.com/ca/artist/arlie-p/1442490102"}>
                  <Button className="hover:bg-amber-400 hover:text-green-800 hover:scale-125" >Liston on Apple Music</Button>
                </Link>


                <Link href={"https://www.youtube.com/watch?v=1p9E5EzrHFo&list=OLAK5uy_lWRTbsNGuMuvtZj0q_BpAygU3mp1EqGDs"}>
                  <Button className="hover:bg-amber-400 hover:text-green-800 hover:scale-125" >Liston on Youtube</Button>
                </Link>
              
              </div>





              </CardContent>



            </Card>



            

         



          </div>

       

        

      </section>


      <section className=" bg-black h-screen">

       

        <div className="flex flex-col items-center justify-center z-0" style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Lightning
            hue={250}
            xOffset={0.02}
            speed={1}
            intensity={1}
            size={4}
          />
          
          <video className="absolute w-[70vw] rounded-2xl" controls loop src="/planetVid.mp4"></video>

            


        </div>

      </section>


      <section className="bg-orange-400 h-screen">
        <ModelViewer />

      </section>
      



          


    </section>


    






      


    
      




      
   
      
  </div>


  );
}
