import React from 'react'

interface ButtonProps{
    onClick?: () => void,
    children?: React.ReactNode,
    className?:string,
    type?:"submit" | "reset" | "button"
}

const ButtonComponent:React.FC<ButtonProps> = ({onClick, children,className,type}) => {
  return (
    <div>
      <button onClick={onClick} className={className} type={type}>
        {children}
      </button>
    </div>
  )
}

export default ButtonComponent
