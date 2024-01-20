import { motion } from "framer-motion";
import vg from "../assets/vg.png";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const animations = {
    form: {
      initial: {
        opacity: 0,
        x: "-100%",
      },
      whileInView: {
        opacity: 1,
        x: 0,
      },
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    button: {
      initial: {
        opacity: 0,
        y: "-100%",
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contact"), {
        name,
        email,
        message,
      });
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
      setName('')
      setEmail('')
      setMessage('')
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <motion.button
            type="submit"
            className={`${disableBtn ? 'disableBtn' : ''}`}
            disabled={disableBtn}
            {...animations.button}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Contact Me" />
      </aside>
    </div>
  );
};

export default Contact;
