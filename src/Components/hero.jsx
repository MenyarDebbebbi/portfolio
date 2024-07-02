import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import gil from "../assets/gil.jpg";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const hoverVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="lg:w-1/2 ssm:w-fit">
        <motion.p
          className="text-4xl mb-5 text-slate-300"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, my name is <i> Menyar Debbebi</i>
        </motion.p>
        <motion.h1
          className="text-6xl"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typewriter
            words={["I'm a web developer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={10}
            delaySpeed={1000}
          />
        </motion.h1>
        <motion.h1
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="mt-10 text-slate-200 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I graduated as an information systems developer at the Higher
          Institute of Technological Studies of Sfax, where I followed
          specialized training in the development of information systems. I have
          been working in the programming and web design industry for five
          years. I have obtained several distinctions in programming
          competitions. I have provided in-depth training to over 250 candidates
          in programming competitions.
        </motion.p>
        <div className="flex mt-5 space-x-4 cursor-pointer">
          <BsFacebook
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full transition-all duration-300"
          />
          <BsTwitter
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full transition-all duration-300"
          />
          <BsInstagram
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full transition-all duration-300"
          />
          <BsGithub
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full transition-all duration-300"
          />
        </div>
      </div>
      <div
        className="lg:w-1/2 ssm:w-fit relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={gil}
          width={250}
          height={350}
          className="rounded-full w-full border-8 border-white transition-transform duration-300"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        />
        {isHovered && (
          <motion.div
            className="absolute rounded-full w-full inset-0 transition-transform duration-300 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={hoverVariants}
          >
            <a
              href="#"
              className="text-white text-xl hover:text-indigo-400 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-indigo-400 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-indigo-400 transition-all duration-300"
            >
              Services
            </a>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Hero;
