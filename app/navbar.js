'use client'
import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
    const [open, setOpen] = useState(false)
    
    return(
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Main bar */}
            <div className="w-full h-24 flex justify-between items-center px-6 md:px-12 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A]">
                
                <span className="font-extrabold text-lg md:text-2xl text-[#FAFAFA]">
                    MR Legacies
                </span>
                
                {/* Desktop links */}
                <div className="hidden md:flex gap-8 text-[#A1A1AA] text-sm font-medium">
                    <Link href="/" className="hover:text-[#FAFAFA] transition-colors">Home</Link>
                    <Link href="/products" className="hover:text-[#FAFAFA] transition-colors">Products</Link>
                    <Link href="/about" className="hover:text-[#FAFAFA] transition-colors">About</Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/serv" 
                        className="bg-[#6EE7B7] text-[#09090B] font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm hover:bg-[#6EE7B7]/90 hover:shadow-[0_0_20px_#6EE7B750] transition-all duration-200">
                        Hire Me
                    </Link>

                    {/* Hamburger */}
                    <button 
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1.5 p-1">
                        <span className={`w-5 h-0.5 bg-[#FAFAFA] block transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-[#FAFAFA] block transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-[#FAFAFA] block transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden bg-[#09090B]/95 backdrop-blur-md border-b border-[#27272A] transition-all duration-300 overflow-hidden ${open ? 'max-h-48' : 'max-h-0'}`}>
                <div className="flex flex-col px-6 py-4 gap-4 text-[#A1A1AA] font-medium">
                    <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#FAFAFA] transition-colors">Home</Link>
                    <Link href="/products" onClick={() => setOpen(false)} className="hover:text-[#FAFAFA] transition-colors">Products</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#FAFAFA] transition-colors">About</Link>
                </div>
            </div>
        </div>
    )
}