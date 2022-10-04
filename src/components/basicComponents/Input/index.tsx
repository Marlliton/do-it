interface InputProps {
  type: string;
  value: string;
  id?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean
  onChange(value: string): void;
}

export function Input(props: InputProps) {
  return (
    <div>
      <label className="text-white/75" htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        className={`rounded-md bg-global-bg-and-task-bg py-2 px-4 w-full mt-2 text-white/90 ${props?.className}`}
        onChange={e => props?.onChange(e.target.value)}
        required={props.required}
      />
    </div>
  );
}
