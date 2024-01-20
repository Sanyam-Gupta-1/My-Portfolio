import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          alt="Founder"
        />

        <h2 className="bg-black">Sanyam Gupta</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>

        <article>
        <h2>Social Media</h2>
          <a href="https://www.linkedin.com/in/guptasanyam500/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Sanyam-Gupta-1" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
      </aside>
    </footer>
  );
};

export default Footer;