import "../nav.css"

 const Navbar = () => {
  return (
  <nav className="navbar">
    <div className="navbar-container">
      <h1 className="logo">Hotel Timu</h1>
      <ul className="nav-links">
        <li> <a href="#home">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#rooms">Rooms</a> </li> <li> <a href="#contact">Contact</a> </li>
      </ul>

    </div>
  </nav>
  )
  
}
export default Navbar