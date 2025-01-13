import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export interface DropdownItem {
  label: string;
  link: string;
  reviews?: string;
}

export interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

export interface DropdownProps {
  title: string;
  sections: DropdownSection[];
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Optional click handler prop
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  sections,
  handleClick, // Destructure handleClick from props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <button
        id="dropdownHoverButton"
        className="text-white text-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleClick || handleToggle} // Call either provided handleClick or handleToggle
      >
        {title}
        <IoIosArrowDown className="w-4 h-4 ml-2" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id="dropdownHover"
          className="absolute left-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700"
        >
          {sections.map((section, index) => (
            <div key={index} className="p-4">
              <h3 className="font-bold text-lg text-gray-700 dark:text-gray-200">{section.title}</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between">
                    <a href={item.link} className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.label}</a>
                    {item.reviews && <span className="text-xs text-gray-500">{item.reviews} Yorum</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;