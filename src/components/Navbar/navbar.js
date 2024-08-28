import logo from '../../img/logo.png'
import './navbar.css'
const Navbar=()=>{
return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light navi" >
    <div class="container-fluid d-flex justify-content-around">
      <a class="navbar-brand" href="#"><img src={logo} alt="not img"></img></a>
      
      <div  id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
          <li class="nav-item">
            <a class="nav-link  fs-5 link" aria-current="page" href="#">work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5 link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5 link" href="#">Belog</a>
          </li>
          <li class="nav-item">
            <a className="nav-link fs-5 link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
}
export default Navbar;