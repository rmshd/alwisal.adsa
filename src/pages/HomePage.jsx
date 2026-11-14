import React from 'react';
import Hero from '../sections/Hero';
import TrustStrip from '../components/TrustStrip';
import About from '../sections/About';
import Schedule from '../sections/Schedule';
import Guests from '../sections/Guests';
import Register from '../sections/Register';
import Venue from '../sections/Venue';
import Gallery from '../sections/Gallery';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <TrustStrip />
      <About />
      <Schedule />
      <Guests />
      <Register />
      <Venue />
      <Gallery />
    </div>
  );
}
