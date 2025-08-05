import React from "react";
import heroImage from '../assets/four.jpg';
import FeaturedImage from '../assets/one.jpg';
import BeetImage from '../assets/beet.jpeg';
import TumericImage from '../assets/tumeric.jpeg';
import GingerImage from '../assets/six.jpeg';

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-white">
        {/* LEFT SIDE - IMAGE */}
        <div className="w-full md:w-1/2 h-64 md:h-screen">
          <img
            src={heroImage}
            alt="Health Shot Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="w-full md:w-1/2 text-[#36441F] px-8 py-12 md:pl-16 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Fuel Your Day with Every Shot
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Natural blends of ginger, turmeric, and citrus to boost your health and keep you going.
          </p>
          <button className="bg-[#EDBE2B] text-[#36441F] font-semibold px-8 py-4 rounded-lg hover:bg-[#DC951E] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-50">
        {/* Text Left */}
        <div className="w-full md:w-1/2 text-center md:text-left px-8 py-12 md:pr-16 md:pl-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#36441F] mb-6 leading-tight">
            Power Your Day
          </h2>
          <p className="text-lg md:text-xl text-[#36441F] max-w-lg mb-8 leading-relaxed">
            Stay energized with our all-natural wellness shots, packed with essential vitamins and superfoods.
          </p>
          <button className="bg-[#7D9457] text-white px-8 py-4 rounded-lg hover:bg-[#DC951E] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Discover More
          </button>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 h-64 md:h-screen px-8 md:px-0 py-8 md:py-0">
          <img
            src={FeaturedImage}
            alt="Health Shot 2"
            className="w-full h-full object-cover "
          />
        </div>
      </section>

      <section className="bg-[#F9F9F6] px-8 py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#36441F] mb-16">
          Popular Shots
        </h2>

        <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Shot Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={BeetImage} 
                alt="Ginger Shot" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
              />
            </div>
            <h3 className="text-xl font-semibold text-[#7D9457] mb-2">Ginger Shot</h3>
            <p className="text-[#36441F] text-sm mb-3 leading-relaxed">
              Pure ginger with lemon and a hint of honey.
            </p>
            <p className="text-[#DC951E] font-bold text-lg">Ksh 200</p>
          </div>

          {/* Shot Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={TumericImage} 
                alt="Turmeric Boost" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
              />
            </div>
            <h3 className="text-xl font-semibold text-[#7D9457] mb-2">Turmeric Boost</h3>
            <p className="text-[#36441F] text-sm mb-3 leading-relaxed">
              Turmeric, black pepper & citrus.
            </p>
            <p className="text-[#DC951E] font-bold text-lg">Ksh 250</p>
          </div>

          {/* Shot Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={GingerImage} 
                alt="Beet Power" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
              />
            </div>
            <h3 className="text-xl font-semibold text-[#7D9457] mb-2">Beet Power</h3>
            <p className="text-[#36441F] text-sm mb-3 leading-relaxed">
              Beetroot, carrot & apple shot blend.
            </p>
            <p className="text-[#DC951E] font-bold text-lg">Ksh 220</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;