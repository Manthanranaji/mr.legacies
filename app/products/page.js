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
    <div className="bg-[#09090B] min-h-screen">
      <NavBar />
      
      {/* Header */}
      <div className="pt-36 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FAFAFA]">
          Products
        </h1>
        <p className="mt-3 text-[#A1A1AA] text-sm md:text-base">
          Built different. Designed to last.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-16 pb-24">
        {content.map(product => (
          <Link href={`/products/${product._id}`} key={product._id}>
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden
                            hover:border-[#6EE7B730] hover:-translate-y-1
                            hover:shadow-[0_0_40px_#6EE7B715]
                            transition-all duration-300 cursor-pointer">
              
              {/* Image */}
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 md:h-72 object-cover"
                />
              )}
              
              {/* Info */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#FAFAFA]">{product.name}</h2>
                <p className="mt-1 text-[#6EE7B7] font-semibold">₹{product.price}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Web Dev CTA */}
      <div className="flex justify-center pb-24">
        <Link href="/serv" 
          className="bg-[#18181B] border border-[#27272A] text-[#FAFAFA] 
                     font-semibold px-8 py-4 rounded-2xl text-lg
                     hover:border-[#6EE7B740] hover:shadow-[0_0_30px_#6EE7B720]
                     transition-all duration-300">
          View Web Services →
        </Link>
      </div>

    </div>
  )
}