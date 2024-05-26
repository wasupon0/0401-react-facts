import reactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav--icon" src={reactLogo} />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
export default Navbar;
