import React, { useEffect, useState } from 'react'
import cake from '../assets/cake.png'
import confetti from 'canvas-confetti';
 


const Birthday = () => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
 
 
  const handleImageClick = () => {
    setIsSoundPlaying(true);
  };
   useEffect(() => {
  const interval = setInterval(() => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
  }, 500);

  return () => clearInterval(interval);
}, []);
useEffect(() => {
  const interval = setInterval(() => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
  }, 500);

  return () => clearInterval(interval);
}, []);
useEffect(() => {
  const interval = setInterval(() => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
  }, 500);

  return () => clearInterval(interval);
}, []);

  return (
    <div
      style={{ textAlign: "center", marginTop: "40px" }}>
      
      <audio src="/music.mp3" autoPlay loop/>

      <video width="300" autoPlay loop controls  style={{ marginBottom: "20px" }}>
          <source src="/video.webm" type="video/webm" />
        </video>



      <img
        src="data:image/png;base64,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"
        alt="cake"
        onClick={handleImageClick}
        style={{
          width: "300px",
          alignSelf:"center"
        }}
      />
      <img
        src="/undo.png"
        alt='undo'
        style={{
          width: "300px",
          alignSelf:"center"
        }}
      />
      
      <h1></h1>
      

 
    </div>
  )
}

export default Birthday