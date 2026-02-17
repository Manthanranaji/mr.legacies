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
    <div className="bg-gradient-to-br from-[#c9b89a] via-[#e0d4c0] to-[#f0e9dc] md:bg-gradient-to-br md:from-[#d4c4a8] md:via-[#e8ddc8] md:to-[#f5eee3] min-h-screen">
      <NavBar/>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12 text-center">
      <h1 className="font-playfair animate-fade-in-up animation-delay-400 weight-300 text-5xl md:text-8xl font-extrabold mb-8">
  <span className="bg-gradient-to-b from-stone-800 to-stone-500 bg-clip-text select-none text-transparent">
    MR
  </span>{' '}
  <span className='font-semibold text-2xl select-none text-stone-700'>Legacies...</span>
</h1>
      <div className='md:h-12 md:w-[700px] md:ml-[240px] animate-fade-in-up animation-delay-600 select-none backdrop-blur-xl rounded-xl bg-gradient-to-br from-white/30 to-white/10 border border-white/20 shadow-[0_8px_32px_4px_rgba(0,0,0,0.1),inset_0_2px_8px_2px_rgba(255,255,255,0.3),inset_0_-2px_8px_2px_rgba(0,0,0,0.1)] md:rounded-2xl hover:scale-105 transition-transform duration-300'>
         <p className="font-sans text-xl font-bold text-stone-600 md:mt-2">
          Building towards future...
        </p>
        </div>
      </div>

      <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-[#AA8B5B]/30 to-transparent'></div>


      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 md:pt-20 pb-12 text-center transform transition-transform duration-700 hover:scale-[1.01]">
        <h2 className="font-serif text-3xl font-semibold text-stone-800 mb-8">
          
        </h2>
                
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <h2 className="font-playfair md:font-outfit md:text-4xl text-2xl font-semibold text-[#FDFBF7] drop-shadow-lg mb-2">
                  {product.name}
                </h2>
                <p className="font-sans text-xl font-bold text-gray-400 group-hover:text-gray-600">
                  ₹{product.price}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-8 text-extrabold font-outfit font-extrabold text-stone-700'>
      <Link href="/products" className='h-16 w-32 md:h-32 md:w-[300px] md:text-3xl md:ml-48 ml-4 mb-4 md:rounded-2xl md:text-xl shadow-lg  bg-gradient-to-b text-center from-white/40 via-transparent to-white/40 border border-white/30 rounded-xl flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300'>
        Products
      </Link>
      <Link href="/serv" className='h-16 w-32 md:h-32 md:w-[300px] md:text-3xl ml-4 md:ml-32 mb-4 md:rounded-2xl shadow-lg md:text-xl bg-gradient-to-b from-white/40 via-transparent to-white/40 border border-white/30 rounded-xl flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300'>
        Web Dev
      </Link>
      </div>
    </div>
  )
}
