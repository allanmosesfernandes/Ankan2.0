import { Link } from "gatsby";
import React from "react";

function Header() {
  return (
    <header>
      <nav className="md:p-5 p-3 flex flex-row">
        <Link to="/">
          <h1 className="font-gothic lg:text-5xl text-3xl">
            <span className="text-primary">Ankan</span> Chittalipi
          </h1>
        </Link>
        {/* Links */}
        <div className="ml-auto flex gap-4">
          <Link to="about">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
