import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import './Home.css';
import Image1 from '../../images/1P.jpeg';
import Image2 from '../../images/2P.jpeg';
import Image3 from '../../images/4P.jpeg';
import Image4 from '../../images/5P.jpeg';
import Image5 from '../../images/6P.jpeg';
import Image6 from '../../images/7P.jpeg';
import Image7 from '../../images/8P.jpeg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
const SLIDE_DURATION = 5000; // duration of each slide in milliseconds

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
    <div>
      <div className="relative overflow-hidden hero-content">
        {/* image container */}
        <div className="absolute inset-0 z-0">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt=""
              loading='lazy'
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">A dzien dobry</h1>
          <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="bg-white text-black font-bold px-6 py-3 mt-6 rounded-lg hover:bg-gray-200"
            onClick={() => {
              console.log('Shop Now');
              return (window.location.href = '/nasza-oferta');
            }}
          >
            Shop Now
          </button>
        </div>

        {/* controls */}
        <button
          className="absolute inset-y-1/2 left-0 z-20 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute inset-y-1/2 right-0 z-20 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700"
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Our Products Section */}
      <div className="bg-black h-screen-100% text-white">
        <div className="container mx-auto py-12 gap-4">
          <h2 className="text-4xl md:text-6xl font-bold  mb-8">Our Products</h2>
          <div className="w-full flex items-center justify-center ">
            <div className="w-1/2 md:w-3/4 h-1/4 md:h-1/2">
              {/* Add content for Our Products section here */}
              ndfaijbnaijfnaskjfnakfjnalfnaslfnlsaflnasfn
              
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Featured Items Section */}
      <div className="bg-white h-screen-100% text-black ">
        <div className="container mx-auto py-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Featured Items</h2>
          <div className="w-full flex items-center justify-center">
            <div className="w-1/2 md:w-3/4 h-1/4 md:h-1/2">
              {/* Add content for Featured Items section here */}
              

              <body>
    <h2><strong>Niesamowite dostosowanie do Twoich potrzeb</strong></h2>
    <p>Nasza oferta nawiewników szczelinowych wykonywanych na zamówienie to prawdziwa innowacja w dziedzinie wentylacji. Wierzymy, że każde pomieszczenie jest wyjątkowe, dlatego oferujemy rozwiązania dostosowane do Twoich konkretnych potrzeb.</p>
    
    <h2><strong>Najwyższa Jakość</strong></h2>
    <p>Jako lider w branży, nieustannie dążymy do dostarczania najwyższej jakości nawiewników szczelinowych. Nasze produkty są starannie projektowane i wykonane, aby spełnić nawet najbardziej rygorystyczne standardy jakości.</p>
    
    <h2><strong>Indywidualne Projekty</strong></h2>
    <p>Nasi doświadczeni projektanci pracują z Tobą, aby stworzyć nawiewniki szczelinowe, które idealnie wpisują się w estetykę Twojego wnętrza. Niezależnie od rozmiaru, kształtu czy materiałów, zawsze znajdziemy rozwiązanie dopasowane do Twojego projektu.</p>
    
    <h2><strong>Energia i Efektywność</strong></h2>
    <p>Nasze nawiewniki szczelinowe nie tylko dostarczają świeże powietrze do Twojego pomieszczenia, ale także pomagają w zachowaniu energooszczędności. Dzięki innowacyjnym rozwiązaniom, minimalizujemy straty cieplne, co przekłada się na niższe rachunki za energię.</p>
    
    <h2><strong>Twoje Marzenia w Spełnieniu</strong></h2>
    <p>Z naszymi nawiewnikami szczelinowymi na zamówienie możesz spełnić swoje marzenia o idealnej wentylacji. Skontaktuj się z nami już dziś, aby dowiedzieć się, jak możemy dostosować nasze produkty do Twoich potrzeb.</p>
    
    <p>Przekształć swoje pomieszczenia dzięki nawiewnikom szczelinowym dostosowanym do Ciebie. Jakość, efektywność i indywidualny design - to, co oferujemy.</p>
</body>




            </div>
          </div>
        </div>
      </div>

      {/* Ready to Shop Section */}
      <div className="bg-gray-800 text-white h-96">
        <div className="container mx-auto py-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Gotowy na zakupy?</h2>
          <p className="text-lg md:text-xl mb-8">
          Oferujemy szeroką gamę produktów wysokiej jakości w przystępnych cenach.
          </p>
          <p className="text-lg md:text-xl mb-8">
          Wierzymy w to, że nasze produkty spełniają najwyższe standardy jakości.
          </p>
          <button
            className="bg-white text-gray-800 font-bold py-3 px-6 hover:bg-gray-200"
            onClick={() => (window.location.href = '/nasza-oferta')}
          >
            NASZA OFERTA
          </button>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-white">
        <div className="container mx-auto py-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Testimonials</h2>
          <div className="w-full flex items-center justify-center">
            <div className="w-1/2 md:w-3/4 h-1/4 md:h-1/2">
              {/* Add content for Customer Reviews section here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
