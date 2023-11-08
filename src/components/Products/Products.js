import React from 'react';
import '../AboutUs/AboutUs.css'
import '../Products/Products.css'
import products from '../../data/products.json'
import { Link } from 'react-router-dom';

const Products = () => {

    return (
        <div className="flex flex-col items-center pb-8 text-gray-800">
            <h1 className="text-4xl font-bold  py-10 pt-14">Nasza oferta</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-6">
                {products.map((item) => (
                    <div key={item.id} className="bg-white rounded-md flex flex-col  overflow-hidden  shadow-lg ">
                        <img
                            className="h-64 w-full object-cover object-center"
                            src={item.imageUrl}
                            alt="Gallery item"
                        />
                        <div className="p-4 flex-1 flex flex-col gap-2 ">
                            <h3 className="font-bold text-xl ">{item.title}</h3>
                            <p className="text-gray-600 text-base line-clamp-4 h-auto ">{item.description}</p>
                            <p className="font-bold text-xl   ">{item.price} PLN netto</p>
                        </div>
                            <Link to={item.forward} className='bg-zinc-800 mx-4 mb-4 transition-all w-fit self-end text-white font-semibold px-4 py-2 rounded-sm hover:bg-opacity-80 translate-all' >

                                    Dowiedz się wiecej
                            </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
