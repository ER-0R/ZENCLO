import { useEffect, useState } from "react";
import Grid from "./Grid";
import Collection from "./collection";

export default function Main(){


    return(
        <>
    <div className="relative w-full h-screen flex items-center justify-center">
      <Grid />

      <div className="absolute top-5 pointer-events-none perspective-[2000px] scale-125 rotate-x-[50deg] rotate-y-[-10deg] rotate-z-[20deg]">

      <p class= "funky" className="funky text-[#FFFFF0] text-[150px] stroke-black">ZENCLO</p>
      </div>
      <Collection/>
    </div>
    </>
    )
}