import { ReactElement, useEffect, useRef } from 'react';

import { images } from '../../data/galleryData';
import { Link } from 'react-router-dom';

import './GalleryGrid.styles.css';

type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

export default function GalleryGrid(): ReactElement {
  const figuresRef = useRef([]);

  useEffect(() => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      }
    };

    const observer = new IntersectionObserver(intersectionCallback);

    for (const figure of figuresRef.current) {
      observer.observe(figure);
    }
  }, []);

  return (
    <div className="grid grid-cols-3">
      {images.map(({ gallery }, index) => (
        <Link
          to={gallery[0].id}
          key={index}
          className="figure"
          //@ts-expect-error Type HTMLAnchorElement | null is not asignable to type never
          ref={(itemRef) => (figuresRef.current[index] = itemRef)}
        >
          <figure className="grid grid-cols-1 grid-rows-1 justify-items-center overflow-hidden">
            <img
              src={gallery[0].path}
              alt={gallery[0].altImg}
              className="col-start-1 row-start-1"
            />
            <p className="col-start-1 row-start-1 z-10 pointer-events-none text-xl relative top-[90%] opacity-0">
              {gallery[0].title}
            </p>
          </figure>
        </Link>
      ))}
    </div>
  );
}
