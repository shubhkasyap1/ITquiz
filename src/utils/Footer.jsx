import React from "react";

function Footer() {
  return (
    <footer className="text-white text-center py-4 w-full shadow-lg border-t-2 border-gray-800">
      <p className="text-sm font-light">
        © {new Date().getFullYear()} All Rights Reserved - Uttaranchal School of Computer Science
      </p>
    </footer>
  );
}

export default Footer;