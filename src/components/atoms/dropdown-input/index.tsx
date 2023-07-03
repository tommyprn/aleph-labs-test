import { useState } from "react";

import "./index.css";

interface DropdownInputProps {
  classname?: string;
  options: string[];
}

export const DropdownInput = ({
  classname,
  options,
}: DropdownInputProps) => {
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  const onMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const onMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={`dorpdown-container ${classname}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="dorpdown-text">Our Works</p>

      {isDropdownOpen ? (
        // <div onMouseEnter={onMouseEnter}>
        <ul className="dropdown-menu">
          {options.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      ) : // </div>
      null}
    </div>
  );
};

export default DropdownInput;
