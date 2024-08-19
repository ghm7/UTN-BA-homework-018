import { ReactElement } from 'react';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

import HorizontalCarousel from '../../components/HorizontalCarousel/HorizontalCarousel.component';

export default function Home(): ReactElement {
  return (
    <main className="flex flex-col gap-36 overflow-x-hidden">
      <section className="text-center mt-[5rem] flex flex-col justify-center items-center gap-10">
        <h1 className="text-7xl">
          Bienvenidos al mundo de{' '}
          <span className="text-indigo-800 font-[600]">au9usto</span>
        </h1>
        <p className="text-xl w-[600px]">
          Aquí encontrarás imágenes generadas con inteligencia artificial y
          edición digital en Android 14
        </p>
        <Link
          to={'/gallery'}
          className="bg-indigo-800 hover:bg-indigo-600 transition-all mt-20 px-6 py-4 rounded-full flex gap-1 items-center"
        >
          Ir a galería <ArrowRight />
        </Link>
      </section>
      <HorizontalCarousel />
    </main>
  );
}
