import Lamblogo from "../assets/lamblogo.png";
function Header() {
  return (
    <header>
      <nav id="navbar">
        <div id="left">
          <img src={Lamblogo} alt="Lamborghini Logo" />
          <p>LAMBORGHINI</p>
        </div>

        <div id="right">
          <a href="#models">MODELS</a>
          <a href="#performance">PERFORMANCE</a>
          <a href="#gallery">GALLERY</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
          <button>CONFIGURE</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;