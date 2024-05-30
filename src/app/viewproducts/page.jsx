import Link from "next/link";
import { client } from "../lib/sanity";
import Carousel from "@/components/ui/Carousel";
import Productcategories from "@/components/ui/Productcategories";



const getData = async ()=> {
  const query = `*[_type == 'product']{
    _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]->{
      name
    },
    gender,
    color
  }
  
  `;

  const data =  await client.fetch(query);
  return data;
};



const viewproducts = async () => {

  const products = await getData()
  // console.log(products);


  return (
   <section className="py-8">
    <div className="container mx-auto">
  
      <h2 className="text-center">
      View our exciting products!
      </h2>

      {/* <Carousel products={products}/> */}
      <Productcategories products={products}/>
    
      
    </div>

   </section>
  )
}

export default viewproducts
