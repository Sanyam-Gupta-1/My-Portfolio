import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiReact, SiJavascript, SiRedux, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    two: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      y: "100%",
    },
  };
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="skillsBox1"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <SiReact />
          <span>REACT JS</span>
        </motion.div>
        
        <motion.div
          className="skillsBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <SiRedux />
          <span>REDUX TOOLKIT</span>
        </motion.div>
        
        <motion.div
          className="skillsBox3"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <SiNodedotjs />
          <span>NODE JS</span>
        </motion.div>
        
        <motion.div
          className="skillsBox4"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <SiExpress />
          <span>EXPRESS JS</span>
        </motion.div>
        
        <motion.div
          className="skillsBox5"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiMongodb/>
          <span>MONGO DB</span>
        </motion.div>

        <motion.div
          className="skillsBox6"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillHtml5 />
          <span>HTML</span>
        </motion.div>

        <motion.div
          className="skillsBox7"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiCss3 />
          <span>CSS</span>
        </motion.div>
        <motion.div
          className="skillsBox8"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiJavascript />
          <span>JAVASCRIPT</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
