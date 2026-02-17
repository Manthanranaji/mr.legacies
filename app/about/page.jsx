import Link from 'next/link';
import NavBar from '../navbar';

export default function About(){
    return(
        <div className="bg-gradient-to-br from-[#c9b89a] via-[#e0d4c0] to-[#f0e9dc] md:bg-gradient-to-br md:from-[#d4c4a8] md:via-[#e8ddc8] md:to-[#f5eee3] min-h-screen">
            <NavBar/>
            
            <div className="flex items-center gap-3 px-4 py-8 max-w-6xl mx-auto">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#7f7053]">   
                </div>
                <span className="font-playfair text-xl md:text-2xl font-bold text-[#5a4e3a]">About</span>
                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#7f7053]">
                </div>
            </div>

  <div className='relative grid grid-cols-1 gap-6 p-8 bg-gradient-to-b from-white/20 md:from-white/25 to-white/5 border border-white/20 shadow-xl rounded-3xl overflow-hidden'>
  
  {/* Decorative corner accent */}
  <div className='absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#c9a96e]/20 to-transparent rounded-br-full' />
  
  {/* Header row */}
  <div className='flex items-center gap-4'>
    <div className='h-[1px] w-8 bg-[#7f7053]' />
    <h1 className='font-playfair text-2xl md:text-3xl font-bold text-stone-600 md:text-stone-700 tracking-wide'>
      MR Legacies
    </h1>
    <div className='h-[1px] flex-1 bg-gradient-to-r from-[#7f7053] to-transparent' />
  </div>

  {/* Tagline */}
  <p className='font-playfair italic text-[#7f7053] text-sm tracking-widest uppercase'>
    No team. No funding. No shortcuts. Just shipping.
  </p>

  {/* Divider */}
  <div className='h-[1px] bg-gradient-to-r from-[#7f7053]/40 via-[#c9a96e]/30 to-transparent' />

  {/* Body text */}
  <p className='font-outfit text-sm md:text-base text-stone-600 leading-relaxed'>
    MR Legacies is a solo indie startup built on the belief that{' '}
    <span className='font-semibold text-stone-700'>the best things are worth doing hard.</span>{' '}
    Founded by a 15-year-old developer who'd rather attempt the impossible than settle for the ordinary — 
    from general relativity to retro focus boxes to hand-coded websites.
  </p>

  <p className='font-outfit text-sm md:text-base text-stone-600 leading-relaxed'>
    We build two things:{' '}
    <span className='underline underline-offset-4 decoration-[#7f7053]/60 font-medium text-stone-700'>
      clean, fast websites
    </span>{' '}
    for businesses that want a real online presence, and{' '}
    <span className='underline underline-offset-4 decoration-[#7f7053]/60 font-medium text-stone-700'>
      physical productivity products
    </span>{' '}
    designed to help you focus in a world engineered to distract.
  </p>

  {/* Bottom accent */}
  <div className='flex items-center gap-3 pt-2'>
    <div className='w-2 h-2 rounded-full bg-[#7f7053]/60' />
    <div className='w-2 h-2 rounded-full bg-[#7f7053]/40' />
    <div className='w-2 h-2 rounded-full bg-[#7f7053]/20' />
  </div>

</div>

        <div className="flex items-center gap-3 px-4 py-8 max-w-6xl mx-auto">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#7f7053]">   
                </div>
                <span className="font-playfair text-xl md:text-2xl font-bold text-[#5a4e3a]">Contact</span>
                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#7f7053]">
                </div>
        </div>     
        <div className='grid grid-cols-1 gap-4 p-4 h-[280px]'>
            <h1 className='font-playfair font-semibold text-stone-700 italic'>Kindly open below given instagram links via browser or else if you want to open via app then the id's are @mr.legacies_official & @manthan.webdev</h1>
                <div className='font-outfit grid grid-cols-1 gap-4'>
                <Link href="https://www.instagram.com/mr.legacies_official/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-stone-600 underline underline-offset-4 hover:text-stone-900 transition-colors duration-200'>
                        MR LEGACIES Instagram
                    </Link>
                <Link href="https://www.instagram.com/manthan.webdev/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-stone-600 underline underline-offset-4 hover:text-stone-900 transition-colors duration-200'>
                        Manthan Web Dev Instagram
                    </Link>
                <Link
                href="https://wa.me/919876634626?text=Hi%20I%20want%20to%20discuss%20a%20project"
                className='text-stone-600 underline underline-offset-4 hover:text-stone-900 transition-colors duration-200'
                >
                    WhatsApp
                </Link>
        </div>
        </div>  

        </div>
    )
}