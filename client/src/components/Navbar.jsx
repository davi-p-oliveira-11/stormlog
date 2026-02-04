import { useState } from "react";
import { Menu, X } from "lucide-react";
import { IKImage } from 'imagekitio-react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <h2>Stormblog</h2>
      </div>
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
        >
          <a href="/">Home</a>
          <a href="/trending">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-500 text-white">
              Login
            </button>
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/trending">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-500 text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
