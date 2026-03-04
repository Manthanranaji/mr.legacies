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
  if (!product) notFound()
  return product
}

export default async function ProductDetail({ params }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <div className="bg-[#09090B] min-h-screen">
      <NavBar />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAFAFA]">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-[#6EE7B7]">
            ₹{product.price}
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden">

          {/* Image gallery */}
          <div className="overflow-x-auto">
            <div className="flex gap-4 p-4">
              {product.imageUrls?.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full md:w-[500px] object-cover rounded-xl flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#27272A]" />

          {/* Info */}
          <div className="p-6 md:p-8">
            {product.description && (
              <>
                <h2 className="text-sm font-semibold text-[#6EE7B7] uppercase tracking-widest mb-3">
                  Description
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  {product.description}
                </p>
              </>
            )}

            {/* CTA */}
            <button className="mt-8 w-full bg-[#6EE7B7] text-[#09090B] font-semibold 
                               py-3 rounded-xl hover:bg-[#6EE7B7]/90 
                               hover:shadow-[0_0_25px_#6EE7B760]
                               transition-all duration-300">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}