import Link from "next/link";
import Image from "next/image";

export default function NavBar(){
    return(
        <div className="relative z-50">
            <div className="w-full relative h-24 flex justify-between items-center px-6 md:px-12 text-sm md:text-lg backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 border border-white/20 shadow-[0_8px_32px_4px_rgba(0,0,0,0.1),inset_0_2px_8px_2px_rgba(255,255,255,0.3),inset_0_-2px_8px_2px_rgba(0,0,0,0.1)] md:border-white/5 md:shadow-[inset_0_0_2px_8px_rgba(255,255,255,0.7), inset_2px_0_2px_4px_rgba(255,255,255,0.2), inset_-2px_0_2px)4px_rgba(255,255,255,0.2), inset_0_2px_8px_2px_rgba(255,255,255,0.3),inset_0_-2px_8px_2px_rgba(0,0,0,0.1)]">
                <img
                    height={64}
                    width={64}
                    src="/billu.png"
                    alt="cat"
                    className="bg-transparent absolute mt-20 ml-[240px] md:h-[75px] md:w-[75px] animate-wiggle md:ml-[1145px] z-50"
                />
                <div className="md:hidden flex flex-col text-center leading-tight [text-shadow:_2px_2px_0_rgba(201,184,154,1)]">
                    <span className="font-semibold select-none">MR</span>
                    <span className="text-xs select-none">Legacies</span>
                </div>
                <span className="hidden md:flex font-extrabold text-2xl font-playfair bg-gradient-to-b from-stone-800 to-stone-500 text-transparent bg-clip-text [text-shadow:_3px_3px_0_rgba(201,184,154,0.4),_6px_6px_0_rgba(201,184,154,0.2),_9px_9px_0_rgba(201,184,154,0.1)]">MR Legacies</span>
                
                <div className="flex gap-4 md:gap-8 text-stone-900 font-semibold">
                    <Link href="/" className="hover:text-[#c9b89a] transition-colors">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-[#c9b89a] transition-colors">
                        Products
                    </Link>
                    <Link href="/about" className="hover:text-[#c9b89a] transition-colors">
                        About
                    </Link>
                </div>
            </div>
        </div>
    )
}