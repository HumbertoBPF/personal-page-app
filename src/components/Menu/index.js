import { Link } from 'react-router-dom';
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navlink}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`nav-link dropdown-toggle ${styles.navlink}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About me
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/educational-background">Educational Background</Link></li>
                                <li><Link className="dropdown-item" to="/work-experience">Work Experience</Link></li>
                                <li><Link className="dropdown-item" to="/prizes-and-awards">Prizes and Awards</Link></li>
                                <li><Link className="dropdown-item" to="/professional-competences">Professional Competences</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
