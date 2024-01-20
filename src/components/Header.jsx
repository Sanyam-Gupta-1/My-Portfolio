import { AiOutlineMenu } from "react-icons/ai";

export const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent></NavContent>
      </nav>
        <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu />
        </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </nav>
  );
};

const NavContent = ({setMenuOpen}) => {
  return (
    <>
      <h2>Sanyam.</h2>
      <div>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>
        <a href="#timeline" onClick={() => setMenuOpen(false)}>
          Timeline
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#testimonial" onClick={() => setMenuOpen(false)}>
          Testimonial
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      <a href="mailto:guptasanyam500@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};
export default Header;
