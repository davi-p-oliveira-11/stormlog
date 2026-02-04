import { useState } from "react";
import { Menu, X } from "lucide-react";
import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <h2>Stormblog</h2>
      </Link>
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
          <Link href="/">Home</Link>
          <Link href="/trending">Trending</Link>
          <Link href="">Most Popular</Link>
          <Link href="">About</Link>
          <Link href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-500 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link href="/">Home</Link>
        <Link href="/trending">Trending</Link>
        <Link href="">Most Popular</Link>
        <Link href="">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
