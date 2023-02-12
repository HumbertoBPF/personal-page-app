import './Menu.css'

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
                            <a className="nav-link" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About me
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">Educational Background</a></li>
                                <li><a className="dropdown-item">Work Experience</a></li>
                                <li><a className="dropdown-item">Prizes and Awards</a></li>
                                <li><a className="dropdown-item">Professional Competences</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
