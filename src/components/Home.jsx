import React from "react";
import { motion } from "framer-motion";
import TypeWritter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me1.png";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        opacity: 0,
        x: "-100%",
      },
      whileInView: {
        opacity: 1,
        x: 0,
      },
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Sanyam Gupta
          </motion.h1>
          <TypeWritter
            options={{
              strings: [
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          ></TypeWritter>

          <div>
            <a href="mailto:guptasanyam500@gmail.com">Hire Me</a>
            <a href="#work">
              Projects {"   "}
              <BsArrowUpRight />
            </a>
          </div>

          <div id="home-contact">
            <p>Contact</p>
            <span>guptaSanyam500@gmail.com</span>
          </div>
        </div>
      </section>

      <section>
        <img src={me} alt="Sanyam" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
