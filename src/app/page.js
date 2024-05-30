import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="h-[200px]"></div>
          <h1 className="text-center text-black-400">
            View our exciting products!
          </h1>
          <h5 className="text-center nb-[30px] text-black-400 mb-20">The world premium brand at one destination</h5>

          <Link href='/viewproducts'>
            <button className="btn btn-accent flex items-center mx-auto">
              See all products <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
