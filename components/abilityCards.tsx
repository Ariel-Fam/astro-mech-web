import Image from "next/image"
import { saira } from "@/lib/fonts"
import { Card, CardContent} from "@/components/ui/card"

type abilityData = {
    name: string;
    descrition: string; 
    src: string;
}


export default function AbilityCard({name,descrition,src}: abilityData) {

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

            </CardContent>


        </Card>
    )

    

}


