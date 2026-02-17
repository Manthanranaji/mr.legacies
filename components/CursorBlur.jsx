"use client";

import { useEffect } from "react";
import gsap from 'gsap';

export default function CursorBlur(){
    const size = 160;
    useEffect(() => {
        const cursor = document.querySelector(".cursor-blur");
        if(!cursor) return;

        const moveX = gsap.quickTo(cursor, "x", {
            duration: 0.6,
            ease: "power3.out",
        });

        const moveY = gsap.quickTo(cursor, "y", {
            duration: 0.6,
            ease: "power3.out",
        });

        const handleMove = (e) => {
            moveX(e.clientX - size / 2);
            moveY(e.clientY - size / 2);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return(

        <div className="cursor-blur pointer-events-none fixed top-20 left-16 w-[120px] h-[120px] rounded-full 
        bg-gradient-to-br from-white/60 to-white/30 blur-[80px] opacity-80 z-0 border border-white
        ">

        </div>
    )
}
