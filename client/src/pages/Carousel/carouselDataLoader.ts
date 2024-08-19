import { images, IImagesGallery } from '../../data/galleryData';

interface ICarouselDataLoaderProps {
  params: { id: string };
}

export default function carouselDataLoader({
  params,
}: ICarouselDataLoaderProps): Array<IImagesGallery> {
  const { id } = params;

  return images.filter((image) => image.id === id);
}
