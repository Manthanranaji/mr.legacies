import NavBar from "../navbar"
import { client } from "../../lib/sanity"
import Link from "next/link"

async function getContent() {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    "imageUrl": images[0].asset->url
  }`

  return await client.fetch(query)
}

export default async function Products() {
  const content = await getContent()

  return (
    <div className="bg-gradient-to-br from-[#c9b89a] via-[#e0d4c0] to-[#f0e9dc] md:bg-gradient-to-br md:from-[#d4c4a8] md:via-[#e8ddc8] md:to-[#f5eee3] min-h-screen">
      <NavBar />
      
      <h1 className="text-3xl md:text-4xl font-bold animate-fade-in-up animation-delay-400 bg-gradient-to-b from-stone-900 via-stone-800 to-400 text-transparent bg-clip-text font-montserrat text-center pt-8 pb-2">
        Products
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16">
        {content.map(product => (
          <Link 
            href={`/products/${product._id}`} 
            key={product._id}
          >
            <div className="rounded-xl md:h-[570px] shadow-xl hover:shadow-2xl border border-white/40 p-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 md:h-[400px] object-cover rounded-lg"
                />
              )}
              <h2 className="text-2xl font-bold text-stone-700 font-playfair mt-4">{product.name}</h2>
              <p className="text-lg text-gray-600 font-bold">₹{product.price}</p>
            </div>
          </Link>
        ))}
            
      <Link href="/serv" className='h-16 w-32 md:h-32 md:w-[300px] md:text-3xl ml-20 font-montserrat md:ml-[460px] md:mt-16 mb-8 md:rounded-2xl shadow-lg md:text-xl bg-gradient-to-b from-white/40 via-transparent to-white/40 border border-white/30 rounded-xl flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300'>
        Web Dev
      </Link>
      </div>
    </div>
  )
}