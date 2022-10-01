interface ButtonProps {
  children: any;
  className?: string;
  scale?: boolean;
  brightnessOnHover?: boolean;
  clickDownEffect?: boolean
  clickUpEffect?: boolean
  onClick?(): void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`
            flex justify-center items-center transition-all 
            ${props?.clickUpEffect && "active:scale-105"}  
            ${props?.clickDownEffect && "active:scale-95"}  
            ${props?.scale && "hover:scale-110"}  
            ${props.brightnessOnHover && "hover:brightness-110"}
            ${props?.className}
          `}
    >
      {props.children}
    </button>
  );
}
