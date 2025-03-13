import React from "react";

function Footer() {
  return (
    <footer className="bg-footer text-white text-center py-4 mt-10">
      <p className="text-sm font-light">
        © {new Date().getFullYear()} All Rights Reserved - Uttaranchal School of Computer Science
      </p>
    </footer>
  );
}

export default Footer;