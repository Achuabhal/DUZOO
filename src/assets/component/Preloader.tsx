'use client'

import { useEffect, useState } from 'react';
import Image from '../images/duzo.png'

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Set background color when the component mounts
    document.body.style.backgroundColor = '#FFEBCC'; 


    // Cleanup to reset background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = ''; // Reset background color
    };
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);  // Stop interval when complete
          onComplete();  // Call the onComplete callback to signal completion
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  useEffect(() => {
    // Dynamically inject the ellipsis animation styles into the document
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.textContent = ` 
      @keyframes ellipsis {
        0% { content: ''; }
        25% { content: '.'; }
        50% { content: '..'; }
        75% { content: '...'; }
        100% { content: ''; }
      }
      
      .ellipsis {
        animation: ellipsis 1.5s ease-in-out infinite;
      }
      
      .progress-bar {
        width: 200px;  /* Increased width */
        height: 15px;  /* Increased height */
        background-color:#FFEBCC; 
        border-radius: 50px;
        overflow: hidden;
      }

      .progress-bar-fill {
        height: 100%;
        background-color: #FFBE5D;

        border-radius: 50px;
        transition: width 0.5s ease-out;
      }

      .preloader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
      }

      .preloader-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
      }

      .logo {
        width: 200px;  /* Original size */
        height: 128px; /* Original size */
      }

      .loading-text {
        font-size: 18px; /* Original size */
        animation: pulse 1s infinite;
      }

      @keyframes pulse {
        0% { opacity: 0.7; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);  // Cleanup styles
    };
  }, []);

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        {/* Logo placeholder */}
        <div>
          <img src={Image} alt="DUZO Logo" className="logo" />
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="relative">
          <span className="loading-text">Loading</span>
          <span className="ellipsis">...</span>
        </div>
      </div>
    </div>
  );
}
