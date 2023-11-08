import React from 'react';
import '../AboutUs/AboutUs.css'
import '../Products/Products.css'
import products from '../../data/products.json'

const Products = () => {

    return (
        <div className="flex flex-col items-center pb-8 text-gray-800">
            <h1 className="text-4xl font-bold  py-10 pt-14">Nasza oferta</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-6">
                {products.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden  shadow-lg ">
                        <img
                            className="h-64 w-full object-cover object-center"
                            src={item.imageUrl}
                            alt="Gallery item"
                        />
                        <div className="p-4 grid h-[225px]">
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-base line-clamp-2 h-[48.25px]">{item.description}</p>
                            <p className="font-bold text-xl mt-2 ">{item.price} PLN netto</p>
                            <a href={item.forward} className='bg-black transition-all w-fit self-end text-white font-bold px-6 py-3 mt-6 rounded-lg hover:bg-opacity-80 translate-all' >

                                    Dowiedz się wiecej
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
