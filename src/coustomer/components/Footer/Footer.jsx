import logo from "../../../assets/logo.png"
import React from "react";

const Footer = () => {
  return (
    <footer class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div class="border-t border-slate-900/5 py-10">
        <div className="flex justify-center items-center">

        <img src={logo} alt="logo"  width={100}/>
        </div>
        <p class="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2024 Quill-ECommmerce. All rights reserved.
        </p>
        <div class="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/privacy-policy">Privacy policy</a>
          <div class="h-4 w-px bg-slate-500"></div>
          <a href="/changelog">Help Center</a>
        </div>
      </div>
    </footer>
  );
  
};

export default Footer;
