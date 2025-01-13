import useState from "react"
import plus from "../assets/Images/Icons/plus2.png";

interface Accordion {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
  }
  
  const AccordionItem = ({ id, title, children, className }: Accordion) => {
    const [isOpen , setIsOpen] = useState(false)
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div className={`accordion-item ${className} max-w-6xl`}>
        <h2 id={`accordion-collapse-heading-${id}`}>
          <button
            type="button"
            className={`flex items-center justify-between w-full p-2 mb-4 font-medium rtl:text-center text-gray-500 border border-b-0 border-gray-200 ${
              isOpen ? "rounded-t-xl" : ""
            } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls={`accordion-collapse-body-${id}`}
          >
            <span>{title}</span>
            <img src={plus} alt={plus} />
          </button>
        </h2>
        <div
          id={`accordion-collapse-body-${id}`}
          className={`${isOpen ? "" : "hidden"}`}
          aria-labelledby={`accordion-collapse-heading-${id}`}
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default AccordionItem