import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <a href="#" className="dropdownButton" onClick={() => setIsOpen(!isOpen)}>
        <p>More</p>
        <IoIosArrowDown size={20} />
      </a>

      {isOpen && <p>hello</p>}
    </div>
  );
};

export default Dropdown;
