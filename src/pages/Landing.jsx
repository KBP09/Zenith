import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Stars } from '@react-three/drei';
import Header from '../components/LandingPage/Header.jsx';
import Page from '../components/LandingPage/Page.jsx';
import Footer from '../components/LandingPage/Footer.jsx';
import Features from '../components/LandingPage/Features.jsx';
import './LandingPage.css';

// function MovingStars() {
//   const starsRef = useRef(null);

//   useFrame(({ clock }) => {
//     const elapsedTime = clock.getElapsedTime();
//     if (starsRef.current) {
//       starsRef.current.rotation.x = elapsedTime * 0.01;
//       starsRef.current.rotation.y = elapsedTime * 0.01;
//     }
//   });

//   return <Stars ref={starsRef} radius={50} count={10000} factor={5} fade />;
// }

function LandingPage() {
  return (
    <div className='LandingPage relative z-10'>
      <div className='absolute inset-0 -z-10'>
        {/* <Canvas>
          <MovingStars />
        </Canvas> */}
      </div>
      <Header />
      <Page />

      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
