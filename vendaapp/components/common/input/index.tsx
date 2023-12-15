import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    onChange?: (value: any) => void;
    label: string;
    columnClasses?: string;
    value: string
}
export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    ... inputprops
}: InputProps) => {
    return (
        <div className={`field column ${columnClasses} `}>
            <label htmlFor={id} className="label">{label}</label>
            <div className="control">
                <input className="input" type='text'
                    id={id} {... inputprops}
                    onChange={event => {
                        if(onChange){
                            onChange(event.target.value)
                        }
                    }}
                />
            </div>
        </div>
    )
}