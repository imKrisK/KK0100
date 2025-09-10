

import KristofferProfile from './KristofferProfile';
import './KristofferProfile.css';

// Background images to rotate
const backgroundImages = [
  '/vite.svg',
  '/src/assets/react.svg',
];

import { useEffect, useState } from 'react';

function App() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        fontFamily: 'Inter, Arial, sans-serif',
        color: '#222',
      }}
    >
      <div style={{
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        margin: '2rem auto',
        maxWidth: '800px',
        padding: '2rem',
      }}>
        <KristofferProfile />
      </div>
    </div>
  );
}

export default App;
