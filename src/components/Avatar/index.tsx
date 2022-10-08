import defaultUserImage from "public/images/profile.svg";
import { MyImage } from "../basicComponents/Image";

interface AvatarProps {
  imageUrl?: string;
  size?: number;
  className?: string;
  alt: string;
}

export function Avatar(props: AvatarProps) {
  return (
    <MyImage
      src={props.imageUrl ?? defaultUserImage}
      alt={props.alt}
      classNames={`rounded-full overflow-hidden ${props?.className}`}
      size={props?.size ?? 30}
    />
  );
}
