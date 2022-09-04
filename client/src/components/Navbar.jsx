import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className=" flex justify-between w-full md:justify-center  items-center p-4">
      <div className="md:flex[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 crusor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Markets", "Exchange", "Tutorials", "Wallets"].map((items, index) => (
          <NavbarItem key={items + index} title={items} />
        ))}
        <li className="bg-[#2952e3] px-7 py-2 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] ">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontsize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontsize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[65vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Markets", "Exchange", "Tutorials", "Wallets"].map(
              (items, index) => (
                <NavbarItem key={items + index} title={items} classProps="my-2 text-lg"/>
              )
            )}
            <li className="flex bg-[#2952e3] px-3 py-1 mx-3 rounded-full cursor-pointer hover:bg-[#2546bd] w-2/6 justify-center">
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
