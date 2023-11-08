import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import './Home.css';
import images from '../../data/image.json';
import { SLIDE_DURATION } from '../../constants';
import { Link } from 'react-router-dom';


const Home = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    // start the automatic slideshow
    const interval = setInterval(() => {
      if (autoPlay) {
        setIndex((index + 1) % images.length);
      }
    }, SLIDE_DURATION);

    // stop the slideshow when the component unmounts
    return () => clearInterval(interval);
  }, [autoPlay, index]);

  const handleNext = () => {
    setAutoPlay(false); // stop the automatic slideshow when the user interacts with the carousel
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setAutoPlay(false);
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className='-mt-[64px] relative'>

      <div className="relative overflow-hidden h-screen ">
        {/* image container */}
        <div className="absolute inset-0 z-0">
          {images.map((image, i) => (
            <img
              key={i}
              src={image.imageURL}
              alt=""
              loading='lazy'
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end mb-40 ml-40 items-start text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Wis serwis</h1>
          <p className="text-lg md:text-xl uppercase">Nawiewniki szczelinowe tylko u nas</p>
          <Link className="bg-zinc-800 transition-all w-fit uppercase text-white font-semibold px-6 py-3 mt-6 rounded-sm hover:bg-opacity-80 translate-all" to='/nasza-oferta'  > Nasza Oferta </Link>
        </div>

        {/* controls */}
        <button
          className="absolute inset-y-1/2 left-0 z-20 transform -translate-y-1/2 bg-zinc-800 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute inset-y-1/2 right-0 z-20 transform -translate-y-1/2 bg-zinc-800 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700"
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>


      {/* Featured Items Section */}
      <section className="bg-white h-screen-100% text-zinc-800 ">
        <div className="container mx-auto py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-zinc-900 lg:text-left">Dlaczego my?</h2>
          <div className="w-full flex items-center justify-center">
            <div className="w-4/5 md:w-3/4 h-1/4 md:h-1/2">
              {/* Add content for Featured Items section here */}
              

              <div className='grid mb-10 gap-4 w-full sm:grid-cols-1 md:grid-cols-8 lg:grid-cols-12'>
                <artical className='card rounded-md flex flex-col gap-4 px-6 py-4 shadow-lg border col-span-4 bg-white  border-gray-100'>
                  <h2 className="font-bold">Dostosowanie do Twoich potrzeb</h2>
                  <p className="text-zinc-700 text-base/[1.2]">Nasza oferta nawiewników szczelinowych wykonywanych na zamówienie to prawdziwa innowacja w dziedzinie wentylacji. Wierzymy, że każde pomieszczenie jest wyjątkowe, dlatego oferujemy rozwiązania dostosowane do Twoich konkretnych potrzeb.</p>
                </artical>
                <artical className='card rounded-md flex flex-col gap-4 px-6 py-4 shadow-lg border col-span-4 bg-white border-gray-100'>
                  <h2 className="font-bold">Energia i Efektywność</h2>
                  <p className="text-zinc-700 text-base/[1.2]">Nasze nawiewniki szczelinowe nie tylko dostarczają świeże powietrze do Twojego pomieszczenia, ale także pomagają w zachowaniu energooszczędności. Dzięki innowacyjnym rozwiązaniom, minimalizujemy straty cieplne, co przekłada się na niższe rachunki za energię.</p>
                </artical>
                <artical className='card rounded-md flex flex-col gap-4 px-6 py-4 shadow-lg border col-span-4 bg-white border-gray-100'>
                  <h2 className="font-bold">Designerskie projekty</h2>
                  <p className="text-zinc-700 text-base/[1.2]">Nasi doświadczeni projektanci pracują z profesjonalistami, aby stworzyć nawiewniki szczelinowe, które idealnie wpisują się w estetykę Twojego wnętrza. Niezależnie od rozmiaru, kształtu czy materiałów, zawsze znajdziemy rozwiązanie dopasowane do Twojego projektu.</p>
                </artical>
            <artical className='hidden lg:col-span-2' />
                <artical className='card rounded-md flex flex-col gap-4 px-6 py-4 shadow-lg border col-span-4 bg-white border-gray-100'>
                  <h2 className="font-bold">Najwyższa Jakość</h2>
                  <p className="text-zinc-700 text-base/[1.2]">Jako lider w branży, nieustannie dążymy do dostarczania najwyższej jakości nawiewników szczelinowych. Nasze produkty są starannie projektowane i wykonane, aby spełnić nawet najbardziej rygorystyczne standardy jakości.</p>
                </artical>
                <artical className='card rounded-md flex flex-col gap-4 px-6 py-4 shadow-lg border col-span-4 bg-white border-gray-100'>
                  <h2 className="font-bold">Nietypowe rozwiązania</h2>
                  <p className="text-zinc-700 text-base/[1.2]">Z naszymi nawiewnikami szczelinowymi na zamówienie możesz spełnić swoje marzenia o idealnej wentylacji. Skontaktuj się z nami już dziś, aby dowiedzieć się, jak możemy dostosować nasze produkty do Twoich potrzeb.</p>
                </artical>
            <artical className='hidden lg:col-span-2' />

                </div>

            </div>
          </div>
        </div>
      </section>

      <section className=" object-cover object-center text-zinc-200 bg-vents">
        <div className="container transition-all mx-auto py-40 ">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-zinc-100 lg:text-left">Zadzwoń Do Nas</h2>
          <div className='w-4/5 md:w-3/4 h-1/4 md:h-1/2 mx-auto flex flex-col items-center justify-center'>

              <p className="text-lg md:text-xl mb-8">
              Nasza firma to zespół ambitnych ludzi, którzy odpowiadają za profesjonalizm, rzetelność, sprawność i niezawodność usług świadczonych naszym klientom.
              </p>
              <div className="flex gap-4 items-center justify-center">
                <a
                className="border-2 border-zinc-200 uppercase transition-all w-full sm:w-fit  font-semibold px-4 py-2 mt-6 rounded-sm hover:bg-opacity-80 translate-all"
                href='tel:+48602342192'
                >
                  Telefon
                </a>
                <Link
                  className="border-2 border-zinc-200 uppercase transition-all w-full sm:w-fit  font-semibold px-4 py-2 mt-6 rounded-sm hover:bg-opacity-80 translate-all"
                  to='/kontakt'
                  >
                  Formularz
                </Link>

            </div>
          </div>

        </div>
      </section>
      <section className=" bg-transparent ">
        <div className="container mx-auto py-40">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-zinc-800 lg:text-left">Gotowy na zakupy?</h2>
          <div className='w-4/5 md:w-3/4 h-1/4 md:h-1/2  mx-auto flex flex-col items-center justify-center'>

            <div className='  '>
              <p className="text-lg md:text-xl mb-8">
              Oferujemy szeroką gamę produktów wysokiej jakości w przystępnych cenach.
              </p>
              <p className="text-lg md:text-xl mb-8">
              Wierzymy w to, że nasze produkty spełniają najwyższe standardy jakości.
              </p>

            <Link
              className="bg-zinc-800 transition-all uppercase  w-full sm:w-fit  mx-auto text-white font-semibold px-4 py-2 mt-6 rounded-sm hover:bg-opacity-80 translate-all"
              to='/nasza-oferta'
              >
              NASZA OFERTA
            </Link>
            </div>
            </div>

        </div>
      </section>
      
      {/* Ready to Shop Section */}
      

    </div>
  );
};

export default Home;

