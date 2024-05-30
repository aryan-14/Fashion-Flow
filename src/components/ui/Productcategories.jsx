'use client';

import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Products from "./Products";

const Productcategories = ({ products }) => {
    const [category, setCategory] = useState('All');
    const [color, setColor] = useState('');
    const [gender, setGender] = useState('');
    const [price, setPrice] = useState(900); // Changed initial price to match the slider defaultValue
    const [search, setSearch] = useState(''); // New state for search keyword
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter((product) => {
            const categoryMatch = category === 'All' ? true : product.categories.some((categ) => categ.name === category);
            const colorMatch = color ? product.color === color : true;
            const genderMatch = gender ? product.gender === gender : true;
            const priceMatch = product.price <= price;
            const searchMatch = search ? product.name.toLowerCase().includes(search.toLowerCase()) : true;

            return categoryMatch && colorMatch && genderMatch && priceMatch && searchMatch;
        });
        setFilteredProducts(filtered);
    }, [category, color, gender, price, search, products]);

    return (
        <section className="min-h-[1200px] py-10">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-[300px] xl:w-[350px] p-4 mb-8 lg:mr-8">
                        {/* Search Bar */}
                        <div className="mb-6">
                            <h1 className="mb-3 text-lg font-semibold">Search</h1>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full p-2 border rounded text-black"
                                placeholder="Search by name"
                            />
                        </div>
                        {/* Categories and Gender Radio Buttons */}
                        <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
                            <div className="flex flex-col mb-6 lg:mb-0">
                                <h1 className="mb-3 text-lg font-semibold">Categories</h1>
                                <RadioGroup defaultValue="All" className="flex flex-col space-y-2 text-black">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='All' id='All' onClick={() => setCategory('All')} />
                                        <Label htmlFor='All'>All</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='Hoodies' id='Hoodies' onClick={() => setCategory('Hoodies')} />
                                        <Label htmlFor='Hoodies'>Hoodies</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='Shirts' id='Shirts' onClick={() => setCategory('Shirts')} />
                                        <Label htmlFor='Shirts'>Shirts</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='Polo' id='Polo' onClick={() => setCategory('Polo')} />
                                        <Label htmlFor='Polo'>Polo</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='Pants' id='Pants' onClick={() => setCategory('Pants')} />
                                        <Label htmlFor='Pants'>Pants</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="mb-3 text-lg font-semibold">Gender</h1>
                                <RadioGroup className="flex flex-col space-y-2 text-black">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='male' id='male' onClick={() => setGender('male')} />
                                        <Label htmlFor='male'>Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='female' id='female' onClick={() => setGender('female')} />
                                        <Label htmlFor='female'>Female</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value='unisex' id='unisex' onClick={() => setGender('unisex')} />
                                        <Label htmlFor='unisex'>Unisex</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        {/* Colors Radio Buttons */}
                        <div className="mb-2">
                            <h1 className="mb-3 text-lg font-semibold">Color</h1>
                            <RadioGroup className="flex flex-col space-y-2 text-black" >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value='white' id='white' onClick={() => setColor('white')} />
                                    <Label htmlFor='white'>White</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value='blue' id='blue' onClick={() => setColor('blue')} />
                                    <Label htmlFor='blue'>Blue</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value='green' id='green' onClick={() => setColor('green')} />
                                    <Label htmlFor='green'>Green</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value='black' id='black' onClick={() => setColor('black')} />
                                    <Label htmlFor='black'>Black</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        {/* Price Slider */}
                        <div>
                            <h1 className="mb-3 text-lg font-semibold">Price</h1>
                            <div className="flex items-center space-x-3">
                                <Slider defaultValue={[price]} max={1000} step={1} onValueChange={(val) => setPrice(val[0])} />
                                <span className="text-accent font-semibold">₹{price}</span>
                            </div>
                        </div>
                    </aside>

                    <div className="w-full lg:w-[calc(100% - 350px)] xl:w-[calc(100% - 400px)] ml-0 lg:ml-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <Products key={product.price_id} products={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Productcategories;
