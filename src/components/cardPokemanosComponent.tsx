"use client";
import { IPokemanosAll } from "@/interfaces/pokemanos.interface";
import { getPokemanoAll } from "@/services/pokemon.service";
import { useEffect, useState } from "react";

export default function CardPokemanosComponent() {
  const [pokeName, setPokeName] = useState<IPokemanosAll[]>([]);
  useEffect(() => {
    async function fetchPokemano() {
      const data = await getPokemanoAll();
      console.log(data.results);
      setPokeName(data.results);
    }
    fetchPokemano();
  }, []);
  return (
    <>
      {pokeName.map((pokes, index) => (
        <div
          key={index}
          className="flex justify-center items-center bg-color3 w-[400px] h-[600px] rounded-xl mb-12"
        >
          <div className="bg-color5 w-[360px] h-[560px] rounded-2xl flex justify-center items-center ">
            <div className="text-2xl capitalize">{pokes.name}</div>
          </div>
        </div>
      ))}
    </>
  );
}
