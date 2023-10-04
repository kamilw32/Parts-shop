import React from 'react';
import '../AboutUs/AboutUs.css'

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center galleryflex">
            <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-6">Nasza działalność</h1>
            <div className="flex flex-col md:flex-row w-full max-w-7xl">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Kim jesteśmy?</h2>
                    <p className="text-gray-700 mb-6">
                    Nasza firma to dynamiczna organizacja, która istnieje od już 20 lat. Zlokalizowani jesteśmy w malowniczym Brzesku, gdzie nasi pracownicy oddają się swojej pracy z ogromnym zaangażowaniem. Dzięki naszemu zespołowi, tworzymy innowacyjne rozwiązania i dostarczamy produkty najwyższej jakości. Nasza pasja do tego, co robimy, jest widoczna w każdym projekcie, który realizujemy. Razem tworzymy historię sukcesu, a nasza długoletnia obecność na rynku to dowód na naszą nieustającą determinację.
                    </p>
                    <p className="text-gray-700 mb-6">
                    Nasz zespół to nie tylko doświadczeni specjaliści, ale także ludzie, którzy wspólnie tworzą przyjazną atmosferę pracy. Dążymy do ciągłego doskonalenia naszych umiejętności, aby sprostać rosnącym wymaganiom rynku. Jednak to nasza pasja, zaangażowanie i zaufanie naszych klientów, które cieszą się naszymi produktami i usługami, są głównym źródłem naszej motywacji.

Jesteśmy dumni z tego, co osiągnęliśmy przez te 20 lat i z niecierpliwością patrzymy w przyszłość. Nasza firma nieustannie się rozwija i wprowadza nowe inicjatywy, aby lepiej służyć naszym klientom. Dziękujemy za zaufanie, jakim nas obdarzacie, i zapraszamy Was do odkrywania naszych produktów oraz dołączania do naszej historii sukcesu.                    </p>
                </div>
                <div className="md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Galeria</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full sm:w-1/2 p-4">

                            <img
                                className="rounded-lg shadow-md h-64 w-full object-cover object-center"
                                src="/cnc.jpeg"
                                alt="CNC machine"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 p-4">
                        <img
                                className="rounded-lg shadow-md h-64 w-full object-cover object-center"
                                src="/cnc.jpeg"
                                alt="CNC machine"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;


