// src/App.tsx

import React from "react";

const TempPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 flex justify-between items-center bg-black text-white">
        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <i className="fas fa-bars"></i>
        </button>
        {/* Logo for larger screens */}
        <h1 className="hidden md:block text-xl font-bold">Rare Sight</h1>
        {/* Cart Icon */}
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </header>
      <main
        className="flex-grow bg-cover bg-center text-center"
        style={{ backgroundImage: "url(https://i.ibb.co/hB0XGKd/1.jpg)" }}
      >
        <h2 className="text-4xl font-bold text-white mt-16">Lagos to London</h2>
        <p className="text-white mt-4">Rare Sight Pop-up</p>
        <button className="mt-8 px-6 py-2 bg-white text-black font-bold rounded">
          Shop Now
        </button>
      </main>
      <div className="p-4 bg-black text-white flex justify-around">
        <button className="rounded-full border-2 border-white px-6 py-2">
          Sign Up For Newsletters!
        </button>
        <button className="flex items-center">
          <i className="fas fa-comments"></i>
          Need Help? Chat with us
        </button>
      </div>
    </div>
  );
};

export default TempPage;
