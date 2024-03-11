"use client";
import React from "react";

import { cn } from "@/utils/cn";
import Link from 'next/link';

export default function page() {
    return (
        <div className="h-[100vh] relative w-full overflow-hidden dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <h1 className={cn("md:text-6xl text-xl text-white relative z-20")}>
                Basic Music
            </h1>

            <p className="text-center mt-6 text-neutral-300 relative z-20 w-[50vw] ">
                Music is the art of arranging sounds in time. It is a form of communication that can express a wide range of emotions, from joy to sadness to anger. Music can be created using a variety of instruments, including the voice, and can be enjoyed by people of all ages and cultures.
            </p>
            <Link href="/basicMusicTheory" >
                <button className="mt-6  hover:text-blue-600 border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-300 transition duration-200 font-semibold rounded-md px-2 py-2 cursor-pointer z-10">Click here to know more</button>
            </Link>
        </div>
    );
}
