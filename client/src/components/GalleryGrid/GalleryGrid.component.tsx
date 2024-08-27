import { ReactElement } from 'react';

import { images } from '../../data/galleryData';
import { Link } from 'react-router-dom';

import './GalleryGrid.styles.css';

export default function GalleryGrid(): ReactElement {
  return (
    <div className="grid grid-cols-3">
      {images.map(({ gallery }, index) => (
        <Link to={gallery[0].id} key={index} className="figure">
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
