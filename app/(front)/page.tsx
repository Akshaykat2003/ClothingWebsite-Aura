/* eslint-disable @next/next/no-img-element */
import ProductItem from "@/components/products/ProductItem";
import productService from "@/lib/services/productService";
import { convertDocToObj } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'AURA',
  description:
    process.env.NEXT_PUBLIC_APP_DESC || 'Nextjs, Server components, Next auth, daisyui, zustand',
};

export default async function Home() {
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();
  
  return (
    <>
      <div className="relative w-full mt-4">
        {/* Carousel */}
        <div className="carousel rounded-box relative">
          {featuredProducts.map((product, index) => (
            <div
              key={product._id}
              id={`slide-${index}`}
              className="carousel-item relative w-full h-64"
            >
              <Link href={`/product/${product.slug}`}>
                <img
                  src={product.banner}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
                  alt={product.name}
                />
              </Link>
              <div
                className="absolute inset-0 flex justify-between items-center px-4 py-2"
              >
                <a
                  href={`#slide-${index === 0 ? featuredProducts.length - 1 : index - 1}`}
                  className="btn btn-circle bg-white text-black shadow-md hover:bg-gray-200"
                >
                  ❮
                </a>
                <a
                  href={`#slide-${index === featuredProducts.length - 1 ? 0 : index + 1}`}
                  className="btn btn-circle bg-white text-black shadow-md hover:bg-gray-200"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Products Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Latest Products</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {latestProducts.map((product) => (
              <ProductItem key={product.slug} product={convertDocToObj(product)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
