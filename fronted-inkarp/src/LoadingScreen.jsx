import React from "react";
import Logo from "/inkarp.png";
import LogoNew from "/inkarpOld.svg";
import DexterSanta from "/DexterSanta.gif";

import LoadingVideo from "/LoadingVideo.mp4";

function LoadingScreen() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
    

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 py-12 gap-0 lg:gap-0">
        {/* Left side - Logo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
          <div className="w-64 h-64 bg-[#f5f5f5] rounded-full shadow-2xl flex items-center justify-center animate-zoomInOut ring-2 ring-[#E63946] ring-opacity-50">
            <img
              src={Logo}
              alt="Inkarp Logo"
              className="w-40 h-40 object-contain"
              style={{ filter: "brightness(1.0)" }}
            />
            <img
              src={LogoNew}
              alt="40 Years"
              className="absolute top-2 right-2 w-12 h-12 object-contain rounded-full border-2 border-[#E63946] bg-[#F5F5F5] shadow-lg"
            />
          </div>

        </div>

        {/* Right side - GIF only on larger screens */}
        {/* <div className="relative z-20 hidden lg:block">

          <img
            src={DexterSanta}
            alt="Dexter Santa"
            className="w-80 h-80 lg:w-96 lg:h-96 object-contain animate-bounce-slow drop-shadow-2xl"
          />

          <div className="flex bg-white text-[#BE0010] w-fit p-2 rounded-2xl font-[MaxOT] shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0s' }}>M</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.1s' }}>E</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.2s' }}>R</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.3s' }}>R</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.4s' }}>Y</span>

       
            <span className="inline-block w-3"></span>

            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.6s' }}>C</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.7s' }}>H</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.8s' }}>R</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '0.9s' }}>I</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '1s' }}>S</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '1.1s' }}>T</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '1.2s' }}>M</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '1.3s' }}>A</span>
            <span className="inline-block animate-bounce text-xl" style={{ animationDelay: '1.4s' }}>S</span>
          </div>

        </div> */}
      </div>

      <style jsx>{`
        @keyframes zoomInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-zoomInOut {
          animation: zoomInOut 2s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* Enhanced Snowfall - Light Gray */
        .snow-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(4px 4px at 20px 30px, #E8F4FD 40%, transparent 40%),
            radial-gradient(3px 3px at 90px 80px, #1a1c1eff 45%, transparent 45%),
            radial-gradient(2px 2px at 160px 120px, #E8F4FD 50%, transparent 50%),
            radial-gradient(5px 5px at 240px 200px, #F0F8FF 35%, transparent 35%),
            radial-gradient(3px 3px at 50px 220px, #E8F4FD 40%, transparent 40%),
            radial-gradient(4px 4px at 180px 260px, #F0F8FF 45%, transparent 45%);
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: snow-fall 15s linear infinite;
          opacity: 0.7;
          pointer-events: none;
        }

        .snow-overlay::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(2px 2px at 40px 50px, #E8F4FD 50%, transparent 50%),
            radial-gradient(3px 3px at 120px 140px, #F0F8FF 40%, transparent 40%),
            radial-gradient(1px 1px at 200px 190px, #E8F4FD 60%, transparent 60%);
          background-repeat: repeat;
          background-size: 250px 250px;
          animation: snow-fall-slow 20s linear infinite reverse;
          opacity: 0.5;
          pointer-events: none;
        }

        @keyframes snow-fall {
          0% { transform: translateY(-100px) translateX(0); }
          25% { transform: translateY(25vh) translateX(10px); }
          50% { transform: translateY(50vh) translateX(-5px); }
          75% { transform: translateY(75vh) translateX(15px); }
          100% { transform: translateY(100vh) translateX(0); }
        }

        @keyframes snow-fall-slow {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(100vh) translateX(-20px); }
        }

        @media (max-width: 1023px) {
          .snow-overlay::before,
          .snow-overlay::after {
            background-size: 200px 200px;
          }
        }
      `}</style>
    </div>
    // <div className="relative h-dvh w-full overflow-hidden bg-black flex items-center justify-center">
    //   <video
    //     src={LoadingVideo}
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="absolute inset-0 h-full w-full object-cover "
    //   />
    // </div>


  );
}

export default LoadingScreen;
