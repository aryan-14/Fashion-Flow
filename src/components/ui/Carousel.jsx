'use client';
import Products from "@/components/ui/Products";
//importing swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//importing swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//importing required modules
import { Pagination } from 'swiper/modules';


const Carousel = ({ products }) => {

  
  return (
    <Swiper 
    slidesPerView={3}
     spaceBetween={30}
      breakpoints={{
        640:{slidesPerView: 1},
        768:{slidesPerView: 2},
        960:{slidesPerView: 3},
        1440:{slidesPerView: 4},
        }} 
        pagination={{
          clickable:true,

        }}

        modules={[Pagination]}
        className="products-slider mb-8 h-[500px]"
        >

          
      {products.map((products) => {

        return (
        <SwiperSlide  key={products._id}>
          <Products products={products} />
        </SwiperSlide>);
      })}
    </Swiper>
  )
}

export default Carousel
