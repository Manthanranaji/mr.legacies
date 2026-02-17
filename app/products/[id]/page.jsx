import NavBar from "../../navbar"
import { client } from "../../../lib/sanity"
import { notFound } from "next/navigation"

async function getProduct(id) {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    description,
    "imageUrls": images[].asset->url
  }`

  const product = await client.fetch(query, { id })
  
  if (!product) {
    notFound()
  }
  
  return product
}

export default async function ProductDetail({ params }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <div className="bg-gradient-to-br from-[#c9b89a] via-[#e0d4c0] to-[#f0e9dc] md:bg-gradient-to-br md:from-[#d4c4a8] md:via-[#e8ddc8] md:to-[#f5eee3] min-h-screen">
      <NavBar />
      
      {/* Title with divider - Better spacing for laptop */}
      <div className="flex items-center gap-3 mt-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#7f7053]"></div>
        <span className="text-[#5a4e3a] font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-nowrap">
          {product.name}
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#7f7053]"></div>
      </div>

      {/* Main content - Larger max-width for bigger screens */}
      <div className="max-w-4xl md:max-w-2xl mx-auto p-8 lg:p-12 md:ml-[330px]">
        <div className="shadow-xl hover:shadow-2xl border border-white/40 p-6 lg:p-10 rounded-xl">
          
          {/* Image Gallery - Better sizing for laptops */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#c9b89a] scrollbar-track-transparent">
            <div className="flex gap-4 lg:gap-6 pb-4">
              {product.imageUrls?.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full md:w-[500px]  object-cover rounded-lg flex-shrink-0 shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Product Info - Better typography for larger screens */}
          <div className="mt-6 lg:mt-10">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-700 font-playfair">
              {product.name}
            </h1>
            <p className="text-xl lg:text-3xl xl:text-4xl text-gray-600 font-bold mt-2 lg:mt-4">
              ₹{product.price}
            </p>
            
            {product.description && (
              <div className="mt-6 lg:mt-10">
                <h2 className="text-xl lg:text-2xl font-montserrat xl:text-3xl font-semibold text-stone-700 mb-2 lg:mb-4">
                  Description
                </h2>
                <p className="text-gray-700 font-bebas text-base lg:text-lg xl:text-xl leading-relaxed lg:leading-loose">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}