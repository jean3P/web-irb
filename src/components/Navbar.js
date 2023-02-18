import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
import './Button'
import {Button} from "./Button";

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  },[])
  window.addEventListener('resize', showButton)

  return (
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to={"/"} className={"navbar-logo"} onClick={closeMobileMenu}>
              IRB <i className="fab fa-typo3"/>
            </Link>
            <div className={"menu-icon"} onClick={handleClick}>
              <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className={'nav-item'}>
                <Link to={"/"} className={"nav-links"} onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className={'nav-item'}>
                <Link to={"/aboutUs"} className={"nav-links"} onClick={closeMobileMenu}>About us</Link>
              </li>
              <li className={'nav-item'}>
                <Link to={"/believe"} className={"nav-links"} onClick={closeMobileMenu}>What we believe?</Link>
              </li>
              <li>
                <Link to={"/contactUs"} className={"nav-links-mobile"} onClick={closeMobileMenu}>CONTACT US</Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
          </div>
        </nav>
      </>
    </div>
  )
}

export default Navbar