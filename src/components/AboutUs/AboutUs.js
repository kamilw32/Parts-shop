import React from 'react';
import '../AboutUs/AboutUs.css'

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center galleryflex">
            <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-6">Nasza działalność</h1>
            <div className="flex flex-col md:flex-row w-full max-w-7xl">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Kim jesteśmy?</h2>
                    <p className="text-gray-700 mb-4">
                    Z przyjemnością przedstawiamy naszą firmę, która istnieje na rynku od 1995 roku. Przez te lata zdobyliśmy ogromne doświadczenie i zyskaliśmy zaufanie licznych klientów. Nasza specjalizacja to projektowanie i budowa systemów wentylacji, a od 2012r. kładziemy nacisk na innowacyjne rozwiązania i autorskie produkty.</p>
                    <p className="text-gray-700 mb-4">
                    Naszą dumą są nawiewniki do rekuperacji i klimatyzacji, które powstają przy udziale doświadczonych projektantów i stylistów wnętrz. Kładziemy ogromny nacisk na wysoką sprawność, higienę oraz designerski wygląd naszych produktów. Dzięki temu nasze nawiewniki nie tylko doskonale spełniają swoją funkcję, ale także stanowią wyszukaną formę  uzupełniającą nowoczesny wygląd wnętrza.</p>
                    <p className="text-gray-700 mb-4">
                    Nasze portfolio to dziesiątki wdrożonych realizacji i projektów w budownictwie indywidualnym a także przemyśle. Inwestorzy powierzając nam swoje plany są zadowoleni z każdego zrealizowanego projektu.</p>
                    <p className="text-gray-700 mb-4">
                    Dysponujemy profesjonalnym i precyzyjnym sprzętem dzięki czemu jesteśmy w stanie sprostać najbardziej skomplikowanym i zaawansowanym projektom. Niezależnie od tego, czy potrzebujesz nawiewników dla dużego obiektu, czy projektu dostosowanego do indywidualnych potrzeb, jesteśmy gotowi, by spełnić Twoje oczekiwania.</p>
                    <p className="text-gray-700 mb-4">
                    Skontaktuj się z nami, a niezwłocznie odpowiemy na Twoje pytania oraz pomożemy Ci dobrać i skonfigurować produkt pod Twoje potrzeby.</p>
                </div>
                <div className="md:w-1/2 p-6">
                    <div className="flex flex-wrap -mx-4">
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


