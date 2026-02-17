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
        <div className="bg-gradient-to-br from-[#c9b89a] via-[#e0d4c0] to-[#f0e9dc] md:bg-gradient-to-br md:from-[#d4c4a8] md:via-[#e8ddc8] md:to-[#f5eee3] min-h-screen pb-16">
            <NavBar />
        
            <div className="flex items-center gap-3 px-4 py-8 max-w-6xl mx-auto">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#7f7053]">   
                </div>
                <span className="font-playfair text-xl md:text-2xl font-bold text-[#5a4e3a]">Web Services</span>
                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#7f7053]">
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 space-y-8 animate-fade-in-up animation-delay-600">
                {services.map((service, index) => (
                    <div key={index} className="grid grid-cols-1 gap-4">
                        {/* Header Card */}
                        <div className="flex items-center gap-4 bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-lg rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
                            {service.icon}
                            <h3 className="text-stone-600 font-playfair font-bold text-base md:text-lg">
                                {service.title}
                            </h3>
                        </div>
                        
                        {/* Content Card */}
                        <div className="bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-lg rounded-2xl p-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
                            <p className="text-sm font-outfit text-stone-700 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <h2 className="text-2xl font-bold text-stone-900">
                                    {service.price}
                                </h2>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 mt-16">
                <h2 className="font-playfair text-2xl font-bold text-[#5a4e3a] text-center mb-8">
                    Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                    <div className="bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-lg rounded-2xl p-6">
                        <h3 className="font-playfair font-bold text-stone-700 mb-2">How long does delivery take?</h3>
                        <p className="text-sm text-stone-600">Single page sites: 3-5 days. Multi-page sites: 7-10 days. Timeline depends on content availability and revision rounds.</p>
                    </div>
                    
                    <div className="bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-lg rounded-2xl p-6">
                        <h3 className="font-playfair font-bold text-stone-700 mb-2">Do you provide hosting?</h3>
                        <p className="text-sm text-stone-600">I provide deployment guidance and help you set up on Vercel (free hosting). Domain registration is separate.</p>
                    </div>
                    
                    <div className="bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-lg rounded-2xl p-6">
                        <h3 className="font-playfair font-bold text-stone-700 mb-2">Can I upgrade later?</h3>
                        <p className="text-sm text-stone-600">Yes! You can add pages, CMS, or additional features anytime. Just pay the difference.</p>
                    </div>
                    <div className="relative h-[50px] w-full">
                    <img
                    height={64}
                    width={64}
                    src="/billu.png"
                    alt="cat"
                    className="bg-transparent absolute mt-8 md:mt-6 ml-[130px] md:h-[75px] md:w-[75px] animate-wiggle md:ml-[400px] z-50"
                />
                </div>
                <div className="flex mt-24 ml-24 h-16 w-32 rounded-2xl md:ml-[370px] items-center text-center bg-gradient-to-b from-white/30 to-white/3 border border-white/20 md:border-white/50 shadow-sm hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <Link
                href={"/about"}
                className="ml-8 font-outfit font-bold text-lg text-stone-700"
                >Contact</Link>
                </div>
                </div>
            </div>
        </div>
    )
}