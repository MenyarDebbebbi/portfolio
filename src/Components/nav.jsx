import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function oppenMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row ">
        <div>
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            Portfolio
          </a>
        </div>
      </div>
      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white mb-2 text-xl cursor-pointer">Skills</li>
              <li className="text-white mb-2 text-xl cursor-pointer">
                Projects
              </li>
              <li className="text-white mb-2 text-xl cursor-pointer">
                Services
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Nav;
