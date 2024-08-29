import { ReactElement, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Facebook, Instagram, Mail } from 'react-feather';

import './Contact.styles.css';

export default function Contact(): ReactElement {
  const form = useRef<HTMLInputElement>(null);

  const sendEmail = (e: Event) => {
    e.preventDefault();

    emailjs
      // @ts-expect-error Argument of type
      .sendForm('service_lmej4ka', 'template_j0joswx', form.current, {
        publicKey: 'lqqxTAPA37BE1RdW2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

    window.location.href = '/';
  };

  return (
    <div className="flex justify-center gap-[12rem] remaining-space">
      <div className="flex flex-col justify-center items-center">
        <form
          // @ts-expect-error ...is not assignable to type...
          ref={form}
          action="post"
          className="w-[400px] flex flex-col gap-6"
          // @ts-expect-error
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            id="user_name"
            className="w-[100%] bg-primaryBg border-b-2 border-white box-border p-2"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            id="email"
            className="w-[100%] bg-primaryBg border-b-2 border-white box-border p-2"
          />
          <textarea
            name="message"
            placeholder="Tu idea"
            id="message"
            rows={10}
            className="w-[100%] bg-primaryBg border-b-2 border-white resize-none box-border p-2"
          />
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-fit py-2 px-8 border-2 rounded-full hover:bg-zinc-700"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col justify-center items-center gap-[2rem]">
        <p className="text-9xl">Contacto</p>
        <div className="flex gap-8">
          <a href="https://www.instagram.com">
            <Instagram className="w-10 scale-[1.5]" />
          </a>
          <a href="https://www.facebook.com">
            <Facebook className="w-10 scale-[1.5]" />
          </a>
          <a href="mailto:gabriel.pozzi.agote@gmail.com">
            <Mail className="w-10 scale-[1.5]" />
          </a>
        </div>
      </div>
    </div>
  );
}
