import Link from "next/link";
import NavBar from "../navbar";

export default function Serv(){
    const services = [
        {
            icon: <span className="text-3xl">📄</span>,
            title: "Single Page Website with no CMS",
            description: "Perfect for personal portfolios, landing pages, or simple business sites. Built with Next.js and Tailwind CSS for fast, modern performance. Includes: Responsive Design, 1 Contact Form, Basic SEO (meta tags), Deployment, 1 Round of Revisions",
            price: "₹4,000"
        },
        {
            icon: <span className="text-3xl">📄</span>,
            title: "Single Page Website with CMS",
            description: "Same as above, but you can edit all text, images, and content yourself through Sanity CMS. No developer needed for updates. Includes: Everything above + Sanity CMS Setup, Basic CMS Training (video/doc), Content Management Dashboard",
            price: "₹5,500"
        },
        {
            icon: <span className="text-3xl">💻</span>,
            title: "3 Page Website (No CMS)",
            description: "Professional multi-page site. Typical pages: Home, About, Services/Contact. Clean navigation and modern design. Includes: 3 Custom Pages, Navigation Menu, Contact Form, Mobile Responsive, Basic SEO, Deployment, 2 Rounds of Revisions",
            price: "₹7,000"
        },
        {
            icon: <span className="text-3xl">💻</span>,
            title: "3 Page Website (With CMS)",
            description: "Full CMS control across all pages. Update content, swap images, and manage everything yourself without coding. Includes: Everything above + Sanity CMS for All Pages, CMS Training Session, Media/Image Management",
            price: "₹8,500"
        },
        {
            icon: <span className="text-3xl">🚀</span>,
            title: "5 Page Website (With CMS)",
            description: "Complete business website with full flexibility. Ideal for service businesses, portfolios, or small e-commerce setups. Includes: 5 Custom Pages, Full Sanity CMS Integration, Blog/Portfolio Section (optional), Advanced SEO Setup, Deployment & Hosting Guidance, 3 Rounds of Revisions",
            price: "₹12,000"
        }
    ];

    return(
        <div className="bg-[#09090B] min-h-screen pb-16">
            <NavBar />
        
            {/* Header */}
            <div className="pt-28 pb-8 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#FAFAFA]">Web Services</h1>
                <p className="mt-3 text-[#A1A1AA]">Clean, fast, modern websites. Built with Next.js.</p>
            </div>

            {/* Services */}
            <div className="max-w-4xl mx-auto px-4 space-y-6">
                {services.map((service, index) => (
                    <div key={index} 
                        className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6
                                   hover:border-[#6EE7B730] hover:shadow-[0_0_40px_#6EE7B715]
                                   transition-all duration-300">
                        
                        <div className="flex items-center gap-3 mb-3">
                            {service.icon}
                            <h3 className="text-[#FAFAFA] font-bold text-base md:text-lg">
                                {service.title}
                            </h3>
                        </div>

                        <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                            {service.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-[#27272A]">
                            <span className="text-2xl font-bold text-[#6EE7B7]">
                                {service.price}
                            </span>
                            <Link href="/about"
                                className="bg-[#6EE7B7] text-[#09090B] font-semibold px-4 py-2 
                                           rounded-lg text-sm hover:bg-[#6EE7B7]/90 
                                           hover:shadow-[0_0_20px_#6EE7B750]
                                           transition-all duration-200">
                                Get Started
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ */}
            <div className="max-w-4xl mx-auto px-4 mt-16">
                <h2 className="text-2xl font-bold text-[#FAFAFA] text-center mb-8">
                    Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                    {[
                        {
                            q: "How long does delivery take?",
                            a: "Single page sites: 3-5 days. Multi-page sites: 7-10 days. Timeline depends on content availability and revision rounds."
                        },
                        {
                            q: "Do you provide hosting?",
                            a: "I provide deployment guidance and help you set up on Vercel (free hosting). Domain registration is separate."
                        },
                        {
                            q: "Can I upgrade later?",
                            a: "Yes! You can add pages, CMS, or additional features anytime. Just pay the difference."
                        }
                    ].map((faq) => (
                        <div key={faq.q} 
                            className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6
                                       hover:border-[#6EE7B730] transition-all duration-300">
                            <h3 className="font-bold text-[#FAFAFA] mb-2">{faq.q}</h3>
                            <p className="text-sm text-[#A1A1AA]">{faq.a}</p>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="flex justify-center mt-16">
                    <Link href="/about"
                        className="bg-[#18181B] border border-[#27272A] text-[#FAFAFA] 
                                   font-semibold px-8 py-4 rounded-2xl text-lg
                                   hover:border-[#6EE7B740] hover:shadow-[0_0_30px_#6EE7B720]
                                   transition-all duration-300">
                        Contact Me →
                    </Link>
                </div>
            </div>
        </div>
    )
}