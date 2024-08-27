import { ReactElement } from 'react';

import { Facebook, Instagram, Mail } from 'react-feather';

import './Contact.styles.css';

export default function Contact(): ReactElement {
  return (
    <div className="flex justify-center gap-[12rem] remaining-space">
      <div className="flex flex-col justify-center items-center">
        <form action="post" className="w-[400px] flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            id="name"
            className="w-[100%] bg-primaryBg border-b-2 border-white box-border p-2"
          />
          <input
            type="email"
            name="email"
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
