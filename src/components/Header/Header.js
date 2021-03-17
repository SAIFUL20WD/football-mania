import React from 'react';


const Header = () => {
    return (
        <header className="bg-light pointer">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <p className="navbar-brand">Football Mania</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                    <p className="nav-item nav-link active">Home <span className="sr-only">(current)</span></p>
                    <p className="nav-item nav-link">About</p>
                    <p className="nav-item nav-link">Pricing</p>
                    <p className="nav-item nav-link">Contact Us</p>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;