import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-screen-xl mx-auto py-3">
      <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-2">
        <div className="flex justify-between">
          <a href="">
            <img
              src="./public/img/logo.png"
              alt="logo"
              width="40px"
              height="40px"
            />
          </a>
          <button
            className="lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            !open ? "hidden" : "flex"
          } lg:flex flex-col lg:flex-row pt-6 lg:pt-0`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center md:gap-x-16 gap-y-4 lg:gap-y-0">
            <a href="" className="hover:text-orange-400">
              Home
            </a>
            <a href="" className="hover:text-orange-400">
              Location
            </a>
            <a href="" className="hover:text-orange-400">
              Success
            </a>
            <a href="" className="hover:text-orange-400">
              Features
            </a>
            <a href="" className="hover:text-orange-400">
              Account
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
