import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="w-full lg:w-1/3 text-center lg:text-left mb-2 lg:mb-0">
                    <h2 className="text-xl font-bold">WIS-SERWIS</h2>
                    <p className="mt-2">
                        <a href="mailto:biuro@wisserwis.com" className="hover:text-white">biuro@wisserwis.com</a> 
                        <br />
                        Telefon: 602 342 192
                    </p>
                </div>
                <div className="w-full lg:w-1/3 mt-2 lg:mt-0">
                    <div className="flex flex-col lg:flex-row justify-between lg:justify-start">
                        <div className="mb-2 lg:mb-0">
                            <a href="#" className="block mb-1 hover:text-white">Nasza Oferta</a>
                            <a href="#" className="block mb-1 hover:text-white">O Nas</a>
                            <a href="#" className="block hover:text-white">Kontakt</a>
                        </div>
                        <div className="ml-4">
                            <a href="#" className="block hover:text-white">Facebook</a>
                            <a href="#" className="block hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 mt-2 lg:mt-0">
                    <div className="text-center lg:text-right">
                        &copy; 2023 WIS-SERWIS
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
