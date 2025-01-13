import { nanoid } from 'nanoid'
import React from 'react'

interface InputType  {
    type? : "text" | "number" | "email" | "password" | "submit" | "search",
    id?:string,
    label? : string,
    placeholder?: string,
    value?:string,
    onChange?: (event : React.ChangeEvent<HTMLInputElement>) => void,
    classNameLabel?: string,
    classNameInput?:string,
}

const InputComponent: React.FC<InputType> = ({type,id,label, placeholder, value, onChange, classNameInput, classNameLabel}) => {
  return (
    <div>
        {label && <label htmlFor={id} className={classNameLabel}>{label}</label>}
      <input type={type} id={id}  placeholder = {placeholder} value={value}
      onChange={onChange} className={classNameInput}/>
    </div>
  )
}

export default InputComponent
