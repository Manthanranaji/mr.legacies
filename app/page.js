import Link from 'next/link'
import { client } from '../lib/sanity'
import NavBar from './navbar'

async function getProducts() {
  const query = `*[_type == "product"][0...4] {
    _id,
    name,
    price,
    "imageUrl": images[0].asset->url
  }`
  return await client.fetch(query)
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="bg-[#09090B] min-h-screen">
      <NavBar/>
      
      {/* Hero — old design on desktop, new design on mobile */}
      <div className="max-w-7xl mx-auto px-8 pt-36 pb-12 text-center">
        
        {/* Desktop hero — your original */}
        <div className="hidden md:block">
          <h1 className="font-playfair animate-fade-in-up animation-delay-400 text-8xl font-extrabold mb-8">
            <span className="text-[#FAFAFA]">MR</span>{' '}
            <span className="font-semibold text-2xl select-none text-[#A1A1AA]">Legacies</span>
          </h1>
          <div className="h-16 mt-12 w-[700px] ml-[240px] animate-fade-in-up animation-delay-600 select-none backdrop-blur-xl rounded-2xl bg-[#18181B] border border-[#27272A] hover:scale-105 transition-transform duration-300">
            <p className="font-playfair text-xl font-bold text-[#A1A1AA] mt-4">
              No team. No funding. No shortcuts. Just shipping.
            </p>
          </div>
        </div>

        {/* Mobile hero — new clean design */}
        <div className="md:hidden">
          <h1 className="font-playfair animate-fade-in-up animation-delay-400 text-6xl font-extrabold mb-6">
            <span className="text-[#FAFAFA]">MR</span>{' '}
            <span className="font-semibold text-xl select-none text-[#A1A1AA]">Legacies</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-600 font-playfair text-lg text-[#A1A1AA] mt-6 select-none">
            No team. No funding. No shortcuts. Just shipping.
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <Link href="/serv"
              className="bg-[#6EE7B7] text-[#09090B] font-semibold px-6 py-3 rounded-xl
                         hover:bg-[#6EE7B7]/90 hover:shadow-[0_0_25px_#6EE7B760]
                         transition-all duration-200">
              Hire Me
            </Link>
            <Link href="/products"
              className="bg-[#18181B] border border-[#27272A] text-[#FAFAFA] font-semibold 
                         px-6 py-3 rounded-xl hover:border-[#6EE7B740]
                         transition-all duration-200">
              View Products
            </Link>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="h-[1px] mt-12 w-full bg-gradient-to-r from-transparent via-[#6EE7B7]/30 to-transparent" />

      {/* Products Grid */}
      <div className="max-w-5xl mx-auto px-8 pt-24 pb-24">

        <h2 className="text-[#A1A1AA] text-sm font-semibold uppercase tracking-widest mb-12 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative h-[120px] hover:h-[400px] md:h-[160px]
                         md:hover:h-[500px] rounded-3xl overflow-hidden
                         transition-all duration-500
                         border border-[#27272A] hover:border-[#6EE7B730]
                         shadow-[0_8px_32px_4px_rgba(0,0,0,0.15)]
                         hover:shadow-[0_0_40px_#6EE7B715]
                         will-change-[height] transform-gpu"
            >
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute hidden group-hover:block object-cover inset-0 w-full h-full"
                />
              )}
              <div className="relative flex items-end transition-transform duration-500
                              group-hover:translate-y-[285px] md:group-hover:translate-y-[340px]">
                <div className="w-full p-6 md:p-8 backdrop-blur-md bg-[#18181B]/80
                                group-hover:bg-black/40">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-1">
                    {product.name}
                  </h2>
                  <p className="text-[#6EE7B7] font-bold">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom links */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <Link href="/products"
            className="bg-[#18181B] border border-[#27272A] text-[#FAFAFA] font-semibold
                       px-8 py-4 rounded-2xl hover:border-[#6EE7B740]
                       hover:shadow-[0_0_30px_#6EE7B720] transition-all duration-300">
            All Products →
          </Link>
          <Link href="/serv"
            className="bg-[#18181B] border border-[#27272A] text-[#FAFAFA] font-semibold
                       px-8 py-4 rounded-2xl hover:border-[#6EE7B740]
                       hover:shadow-[0_0_30px_#6EE7B720] transition-all duration-300">
            Web Services →
          </Link>
        </div>

      </div>
    </div>
  )
}