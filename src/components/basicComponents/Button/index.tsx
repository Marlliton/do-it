interface ButtonProps {
  children: any;
  className?: string;
  scale?: boolean;
  brightnessOnHover?: boolean;
  onClick?(): void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={`
            flex justify-center items-center transition-all active:scale-105
            ${props?.scale && "hover:scale-110"}  
            ${props.brightnessOnHover && "hover:brightness-110"}
            ${props?.className}
          `}
    >
      {props.children}
    </button>
  );
}
