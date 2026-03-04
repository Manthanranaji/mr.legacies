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
  
  const products = await client.fetch(query)
  return products
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="bg-[#09090B] min-h-screen">
      <NavBar/>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 pt-36 pb-12 text-center">
      <h1 className="font-playfair animate-fade-in-up animation-delay-400 weight-300 text-5xl md:text-8xl font-extrabold mb-8">
  <span className="text-[#FAFAFA]">
    MR
  </span>{' '}
  <span className='font-semibold text-2xl select-none text-[#A1A1AA]'>Legacies</span>
</h1>
      <div className='md:h-16 mt-12 h-24 md:w-[700px] md:ml-[240px] animate-fade-in-up animation-delay-600 select-none backdrop-blur-xl rounded-xl bg-[#18181B] border border-[#27272A] md:rounded-2xl hover:scale-105 transition-transform duration-300'>
         <p className="font-playfair text-xl font-bold text-[#A1A1AA] mt-4">
         No team. No funding. No shortcuts. Just shipping.
        </p>
        </div>
      </div>

      <div className='h-[1px] md:mt-8 mt-12 w-full bg-gradient-to-r from-transparent via-[#6EE7B7]/30 to-transparent'></div>


      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 md:mt-0 md:pt-24 mt-20 pb-12 text-center transform transition-transform duration-700 hover:scale-[1.01]">
        <h2 className="font-serif text-3xl font-semibold text-stone-800 mb-8">
          
        </h2>
                
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:ml-8">
          {products.map((product) => (
            <div 
              key={product._id} 
              className="group relative h-[120px] hover:h-[400px] md:h-[160px] md:w-[500px] md:hover:h-[600px] md:hover:w-[550px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_32px_4px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_48px_8px_rgba(0,0,0,0.25)] will-change-[height,width] transform-gpu"
            >
              {product.imageUrl && (
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="absolute hidden group-hover:block object-cover inset-0 w-full h-full" 
                />
              )}
              <div className='relative flex items-end transform transition-transform duration-500 group-hover:translate-y-[285px] select-none md:group-hover:translate-y-[440px]'>
              <div className="w-full md:p-12 p-6 backdrop-blur-md bg-white/10 group-hover:bg-white/15 group-hover:backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)]">
                <h2 className="font-playfair md:font-outfit md:text-4xl text-2xl font-semibold text-[#FAFAFA] drop-shadow-lg mb-2">
                  {product.name}
                </h2>
                <p className="font-sans text-xl font-bold text-gray-400 group-hover:text-[#A1A1AA]">
                  ₹{product.price}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-8 mt-8 md:mt-16 ml-8 text-extrabold font-outfit font-extrabold text-[#FAFAFA]'>
      <Link href="/products" className='h-16 w-32 md:h-32 md:w-[300px] md:text-3xl md:ml-48 ml-4 mb-4 md:rounded-2xl md:text-xl shadow-lg  bg-[#18181B] border border-[#27272A] rounded-xl flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300'>
        Products
      </Link>
      <Link href="/serv" className='h-16 w-32 md:h-32 md:w-[300px] md:text-3xl ml-4 md:ml-32 mb-4 md:rounded-2xl shadow-lg md:text-xl bg-[#18181B] border border-[#27272A] rounded-xl flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300'>
        Web Dev
      </Link>
      </div>
    </div>
  )
}
