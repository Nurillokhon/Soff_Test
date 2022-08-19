import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container ">
                    <a className="navbar-brand" href="#">FinalExam</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <form className="d-flex">
                            <button className="btn btn-danger shadow" type="submit">Finish</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
