import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { saira } from "@/lib/fonts";
import { Button } from "./ui/button";
import Link from "next/link";



type abilityData2 = {
    name: string;
    descrition: string; 
    src: string;
    vidName: string;
}

export default function AbilityCard2({name,descrition,src, vidName}: abilityData2) {

    return (

        <Card className="">


            <CardContent className="flex flex-col items-center justify-center gap-4">

                <Image
                src={src}

                width={200}
                height={200}
                alt="img"
                
                />

                <h1 className={`${saira.className}
                text-2xl text-center text-black`}>{name}</h1>


                <h2 className={`${saira.className}
                text-center text-black`}>{descrition}</h2>


                <Link href={`/abilities/${vidName}`}>

                    <Button>View Ability</Button>
                
                </Link>

            </CardContent>


        </Card>
    )

    

}