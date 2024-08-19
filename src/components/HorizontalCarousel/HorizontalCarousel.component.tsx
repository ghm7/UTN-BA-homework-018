import { ReactElement, useState } from 'react';

import { images } from '../../data/galleryData';
import Card from '../Card/Card.component';
import { Link } from 'react-router-dom';

export default function HorizontalCarousel(): ReactElement {
  const [pause, setPause] = useState(false);

  return (
    <div className="w-[100dvw] gap-8 flex overflow-hidden">
      <div
        className={`max-w-fit flex gap-8 horizontal-scroll ${
          pause ? 'paused' : ''
        }`}
        onMouseOver={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {images.map(({ gallery, id }, index) => (
          <Link to={`/gallery/${id}`} key={index}>
            <Card path={gallery[0].path} altImg={gallery[0].altImg} />
          </Link>
        ))}
      </div>
      <div
        className={`max-w-fit flex gap-8 horizontal-scroll ${
          pause ? 'paused' : ''
        }`}
        onMouseOver={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {images.map(({ gallery, id }, index) => (
          <Link to={`/gallery/${id}`} key={index}>
            <Card path={gallery[0].path} altImg={gallery[0].altImg} />
          </Link>
        ))}
      </div>
      {/* Third grid because they are less than expected to fill the entire slide
          delete when upload more images */}
      <div
        className={`max-w-fit flex gap-8 horizontal-scroll ${
          pause ? 'paused' : ''
        }`}
        onMouseOver={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {images.map(({ gallery, id }, index) => (
          <Link to={`/gallery/${id}`} key={index}>
            <Card path={gallery[0].path} altImg={gallery[0].altImg} />
          </Link>
        ))}
      </div>
    </div>
  );
}
