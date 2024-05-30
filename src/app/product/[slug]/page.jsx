import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Addtocartbutton from "@/components/ui/Addtocartbutton";
import Link from "next/link";
import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from 'lucide-react';


const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'] [0]{
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->[]{name}
  }`;

  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const product = await getData(params.slug);

  return (
    <section className="pt-24 pb-3">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* Image container */}
          <div className="xl:flex-1 flex justify-center items-center">
            <div className="w-[400px] h-[560px] mb-20">
              <Image
                src={urlFor(product.images[0]).url()}
                width={400}
                height={30}
                priority
                alt={product.name}
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="bg-green text-white flex-1 flex flex-col justify-center items-start gap-10 p-6">
            <Link href='/viewproducts' className="flex items-center gap-2 font-semibold text-black">
              <ChevronLeft size={20} />
              Back to Products
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
              <h3 className="text-2xl font-bold text-black">{product.name}</h3>
              <p className="text-lg font-semibold text-black">₹{product.price}</p>
              
              </div>
              <p  className="text-black">{product.description}</p>
              <Addtocartbutton 
              id={product._id}
              price_id={product.price_id}
              name={product.name} 
              currency={'INR'} 
              description={product.description}
               images={product.images}
               price={product.price} 
              text={'Add to Cart'} 
              btnstyles={'btn btn-accent'} />
            </div>

            {/* Info */}
            <div  className=" flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="bg-accent" />
                <p className="text-black"> Free shiping on order above ₹1000</p>
              </div>

              <div className="flex gap-2">
                <RefreshCw size={20} className="bg-accent" />
                <p> free return for 30 days</p>
              </div>

              <div className="flex gap-2">
                <Bike size={20} className="bg-accent" />
                <p  className="text-black"> The Cloths are partially assembled and benefit from Transport</p>
              </div>

              <div className="flex gap-2">
                <Clock size={20} className="bg-accent" />
                <p  className="text-black"> Fast Delivery</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
