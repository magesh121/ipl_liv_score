import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isopen, setIsOpen] = useState(false);
  const links = [
    { name: "Live score", path: "/live-score" },
    { name: "Schedule", path: "/schedule" },
    { name: "Teams", path: "/teams" },
    { name: "Stats", path: "/stats" },
    { name: "News", path: "/news" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  return (
    <div className="sticky top-0 z-70 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between h-[60px]">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-[18px] w-[18px] bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-[12px] text-white font-bold">IPL</span>
            </div>
            <span className="text-black font-bold text-sm">Score tracer</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className={`text-[12px] text-black font-medium transition-colors hover:text-orange-600`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* mobile */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isopen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* mobile navlinks */}
        {isopen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {links.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="text-sm text-black font-medium transition-colors hover:text-orange-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
