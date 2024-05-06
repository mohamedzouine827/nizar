"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventImg from "@/public/work/client/event/IMG_0995.jpg";
import ClientImg from "@/public/work/client/client/147.jpg";
import Image from "next/image";
import StreetImg from "@/public/work/streetphotography/stret.jpg"
import StreetImg1 from "@/public/work/streetphotography/streer1.jpg"
import StreetImg2 from "@/public/work/streetphotography/street2.jpg"
import Link from "next/link";

function Hero() {
  const lastWork = [
    {
        id: 1,
        description : "Street Photography",
        img: StreetImg
    },
    {
      id: 2,
      description: "Event Photoshoot",
      img: EventImg,
    },
    {
        id: 3,
        description : "Street Photography",
        img: StreetImg1
    },
    {
      id: 4,
      description: "Client Photoshoot",
      img: ClientImg,
    },
    {
        id: 5,
        description : "Street Photography",
        img: StreetImg2
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % lastWork.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="group relative w-[80vw] h-[60vh] md:w-[50vw] overflow-hidden">
        <Link href="/work">
      <AnimatePresence >
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.9 }}
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={() => {
            // Handle click event to navigate to work page
            console.log("Navigate to work page");
          }}
        >
          <Image
            src={lastWork[currentImage].img}
            alt={lastWork[currentImage].description}
            layout="fill"
            objectFit="cover"
            loading="eager"
            className="w-full h-full transition-all duration-500 ease-in-out hover:drop-shadow-xl"
          />
          <div className="absolute top-0 right-0 h-full w-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 ease-in-out" />
          <div
            className="absolute bottom-16 left-5 text-white text-3xl font-ko opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"

          >
            {lastWork[currentImage].description}
          </div>
          <div
            className="absolute bottom-8 text-white left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"

          >
            Click to see more
          </div>
        </motion.div>
      </AnimatePresence>
      </Link>
    </div>
  );
}

export default Hero;
