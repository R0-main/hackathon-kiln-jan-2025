"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import KilnLogo from '../../public/kiln-logo.jpg';
import RobotImage from '../../public/robot.png';

export default function Home() {
  const fullText = "Not leave it in Darkness";
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // Vitesse d'écriture (en ms)

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] flex-col">
      <Image src={KilnLogo} alt="KilnLogo" width={300} height={300} priority />
      <div className="absolute bottom-5 right-5">
        <div className="chat chat-end">
          <div className="text-xl chat-bubble min-w-full max-w-[250px]">{displayedText}</div>
          <div className="left-[-50px] chat-image avatar">
            <Image src={RobotImage} alt="Robot" width={300} height={300} priority className={displayedText.length + 1 < fullText.length ? " animate-bounce duration-75" : "" }/>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <div className="flex justify-center align-middle w-full h-full flex-col">
<div className="flex flex-row w-full h-full ">
  <div className="w-full h-full">
    <button className="btn btn-primary"> </button>
  </div>
  <div className="w-full h-full">
    <button className="btn btn-primary"> </button>
  </div>
</div>
<div className="flex flex-row w-full h-full">
  <div className="w-full h-full">
    <button className="btn btn-primary"> </button>
  </div>
  <div className="w-full h-full">
    <button className="btn btn-primary"> </button>
  </div>
</div>
</div> */}