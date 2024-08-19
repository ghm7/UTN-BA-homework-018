import { ReactElement } from 'react';

interface ICardProps {
  path: string;
  altImg: string;
}

export default function Card({ path, altImg }: ICardProps): ReactElement {
  return (
    <figure className="w-[200px] rounded-xl overflow-hidden">
      <img
        src={path}
        alt={altImg}
        className="mr-6 hover:scale-110 transition-all duration-[0.4s] ease-in-out"
      />
    </figure>
  );
}
