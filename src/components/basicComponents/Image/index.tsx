import Image from "next/image";

interface ImageProps {
  src: any;
  alt: string;
  classNames?: string;
}

export function MyImage(props: ImageProps) {
  return (
    <div className={`${props?.classNames}`}>
      <Image src={props.src} alt={props.alt} layout="responsive"  />
    </div>
  );
}
