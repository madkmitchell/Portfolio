import NavBar from "./NavBar";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Maverick Boone Design Co.</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
