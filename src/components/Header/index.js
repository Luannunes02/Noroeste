import './header.css'
import { Link } from 'react-router-dom';
import LogoNoroeste from '../../img/logoNoroeste.png'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg" id='navbar'>
            <div className="container-fluid d-flex mx-5">
                <Link to='/'><img src={LogoNoroeste} alt="Bootstrap" width="150" height="74" id='navbarLogo'/></Link> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" id='navbarItem'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/produtos" id='navbarItem'>Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobrenos" id='navbarItem'>Sobre nós</Link>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;