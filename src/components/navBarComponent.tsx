import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBarComponent () {
    return(
        <>
            <div className="bg-color2 h-32 flex justify-between items-center">
                <Image width={224} height={224} alt="Logo Pokemanos" src={"/pokemanosLogoSemFundo.png"}/>
                <div className="flex items-center justify-around p-6 gap-6 text-xl font-semibold">
                    <div><Link href={"/"}>Pokemanos</Link></div>
                    <div><Link href={"/a"}>Localizações</Link></div>
                </div>
            </div>
        </>
    )
}