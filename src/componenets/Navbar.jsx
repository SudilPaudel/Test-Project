import "../nav.css"

 const Navbar = ({meroName, home}) => {
  return (
  <nav className="navbar">
    <div className="navbar-container">
      <h1 className="logo">{meroName}</h1>
      <ul className="nav-links">
        <li> <a href="#home">{home}</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#rooms">Rooms</a> </li> <li> <a href="#contact">Contact</a> </li>
      </ul>

    </div>
  </nav>
  )
  
}
export default Navbar