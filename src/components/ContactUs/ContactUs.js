import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import products from "../../data/products.json";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef()

  const handleSubmit =  (e) => {
      e.preventDefault();
      console.log(form.current);

      setIsSubmitting(true);
      emailjs.sendForm(
      'wisserwis_sdfjty7uefr',
      'template_p2oxd3w',
      form.current,
      "CdtvpdQmCCCIKkwdG"

    ).then((result) => {

      if (result.status !== 200) {
        return toast.error("Błąd, spróbuj ponownie później lub wyślij nam maila na adres zawarty w stopce.", { duration: 5000})
      }

      e.target.reset();
      setIsSubmitting(false);
      return toast.success("Wysłano wiadomość", { duration: 5000})

    }, (error) => {

      console.error(error);
      setIsSubmitting(false);
      return toast.error(error.text, { duration: 5000})

    });
  };

 
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Skontaktuj się z nami</h1>
      <form onSubmit={handleSubmit} ref={form} className="w-full max-w-lg mx-auto">

      <div className="mb-4">

        <select id="produkt" name="produkt" className="shadow border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option className="text-gray-500" disabled selected>Wybierz produkt</option>
          <option value="Inny">Inny</option>
      {products.map((item) => 
          <option key={item.id} value={item.title}>{item.title}</option>
      )}
        </select>
     
       </div>

        <div className="mb-4">
         
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Imię"
            required
          />
        </div>
        <div className="mb-4">
          
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
        
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-1/2"
            id="message"
            name="message"
            rows="10"
            required
            placeholder="Wiadomość"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`${isSubmitting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
              } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
          </button>

        </div>
      </form>
    </div>
  );
}

export default ContactUs;