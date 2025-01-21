import { useState } from 'react';
import arrow from "../../assets/Images/Icons/downArrow.png"
import ButtonComponent from './Button';
interface Accordion{
  id:string | number;
  title:string | JSX.Element;
  children:JSX.Element | string;
  className:string;
}
const AccordionElement  = ({id,title,children,className}: Accordion) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={`accordion-item ${className} max-w-6xl`}>
       <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-2 mb-4 font-medium rtl:text-center text-gray-500 border border-b-0 border-gray-200 ${isOpen ? 'rounded-t-xl' : ''} focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${id}`}
        >
        <ButtonComponent  onClick= {handleToggle} children={""}  className={`flex items-center justify-between w-full p-2 mb-4 font-medium rtl:text-center text-gray-500 border border-b-0 border-gray-200 ${isOpen ? 'rounded-t-xl' : ''} focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
 />
          <span>{title}</span>
          <img src={arrow} alt={arrow} />
          </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={`${isOpen ? '' : 'hidden'}`}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="P-5 ">
          {children}
        </div>
      </div>
      
    </div>
  )
}

export default AccordionElement
