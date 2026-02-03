
import AbilityCard from "@/components/abilityCards";
import { abilityData } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent} from "@/components/ui/card";
import { saira } from "@/lib/fonts";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";





type paramProps = {

    params: Promise<{name: string}>
}



export default async function AbilityViewer({params}: paramProps) {

    const { name } = await params;


    const abilitName = abilityData.filter(obj => obj.vidName === name);
    console.log("Data", abilitName);

    
    

    

    return (
        <div className="bg-[url('/logoBackground.png')] bg-repeat bg-cover h-auto flex flex-col items-center  gap-7">

            
      
            

           
        {abilitName.map((obj) => (



            <div key={obj.name} className="flex flex-col items-center">

                <Card key={obj.name} className="w-[70vw] h-auto  mt-7">
            
            
                    <CardContent className="flex flex-col items-center  gap-4">
        
                        <Image
                        src={obj.src}
        
                        width={200}
                        height={200}
                        alt="img"
                        
                        />
        
                        <h1 className={`${saira.className}
                        text-2xl text-center text-black`}>{name}</h1>
        
        
                        <h2 className={`${saira.className}
                        text-center text-black`}>{obj.description}</h2>

                        <Link href={"/#abilities"}>
                            <Button>Back</Button>
                        </Link>
        
                    </CardContent>

                   
            

                </Card>

                <Card className="w-[70wv] mt-10 mb-14">
                    <CardContent>
                        <video className="w-[70vw] rounded-2xl" controls autoPlay loop src={obj.vidSrc}></video>
                    </CardContent>
                </Card>


                <Footer />


                


            </div>

            


            


        ))}
    

            



            



            
        </div>
    )
}
