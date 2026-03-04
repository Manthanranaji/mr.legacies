import Link from 'next/link';
import NavBar from '../navbar';

export default function About(){
    return(
        <div className="bg-[#09090B] min-h-screen">
            <NavBar/>

            {/* About Section */}
            <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">

                <div className="bg-[#18181B] border border-[#27272A] rounded-3xl p-8 md:p-12">

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-[#27272A]" />
                        <h1 className="text-2xl md:text-3xl font-bold text-[#FAFAFA]">
                            MR Legacies
                        </h1>
                        <div className="h-[1px] flex-1 bg-[#27272A]" />
                    </div>

                    {/* Tagline */}
                    <p className="text-[#6EE7B7] text-sm tracking-widest uppercase mb-6">
                        No team. No funding. No shortcuts. Just shipping.
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#27272A] mb-6" />

                    {/* Body */}
                    <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-4">
                        MR Legacies is a solo indie startup built on the belief that{' '}
                        <span className="font-semibold text-[#FAFAFA]">the best things are worth doing hard.</span>{' '}
                        Founded by a 15-year-old developer who'd rather attempt the impossible than settle for the ordinary — 
                        from general relativity to retro focus boxes to hand-coded websites.
                    </p>

                    <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
                        We build two things:{' '}
                        <span className="underline underline-offset-4 decoration-[#6EE7B750] font-medium text-[#FAFAFA]">
                            clean, fast websites
                        </span>{' '}
                        for businesses that want a real online presence, and{' '}
                        <span className="underline underline-offset-4 decoration-[#6EE7B750] font-medium text-[#FAFAFA]">
                            physical productivity products
                        </span>{' '}
                        designed to help you focus in a world engineered to distract.
                    </p>

                    {/* Bottom dots */}
                    <div className="flex items-center gap-2 mt-8">
                        <div className="w-2 h-2 rounded-full bg-[#6EE7B7]" />
                        <div className="w-2 h-2 rounded-full bg-[#6EE7B740]" />
                        <div className="w-2 h-2 rounded-full bg-[#6EE7B720]" />
                    </div>

                </div>

                {/* Contact Section */}
                <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-8">
                        Contact
                    </h2>

                    <div className="bg-[#18181B] border border-[#27272A] rounded-3xl p-8 md:p-12">

                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8">
                            Open Instagram links in browser, or find me directly at{' '}
                            <span className="text-[#FAFAFA] font-medium">@mr.legacies_official</span>{' '}
                            &{' '}
                            <span className="text-[#FAFAFA] font-medium">@manthan.webdev</span>
                        </p>

                        <div className="flex flex-col gap-4">
                            <Link href="https://www.instagram.com/mr.legacies_official/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200">
                                <span className="text-[#6EE7B7]">→</span>
                                MR Legacies Instagram
                            </Link>
                            <Link href="https://www.instagram.com/manthan.webdev/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200">
                                <span className="text-[#6EE7B7]">→</span>
                                Manthan Web Dev Instagram
                            </Link>
                            <Link href="https://wa.me/919876634626?text=Hi%20I%20want%20to%20discuss%20a%20project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200">
                                <span className="text-[#6EE7B7]">→</span>
                                WhatsApp
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}