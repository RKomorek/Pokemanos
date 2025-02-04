"use client"
import CardPokemanosComponent from "@/components/cardPokemanosComponent";

export default function Home() {
 
  return (
    <>
    <div className="flex flex-col justify-start items-start w-full h-screen p-10">
      <div className="text-3xl font-bold pb-8">Nossos queridos Pokemanos:</div>
      <div className="w-full grid grid-cols-4 justify-center items-center text-white ">
       <CardPokemanosComponent/>
      </div>
      </div>
    </>
  );
}
