import React from 'react'

const Nav = () => {
    return (
        <div>
        
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Utkarsh-Rogzar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Workers
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">New anouncement</a></li>
                <li><a className="dropdown-item" href="/">Workers by Domain</a></li>
                <li><hr></hr></li>
                <li><a className="dropdown-item" href="/">Workers previous Employment</a></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled"></a>
            </li> */}
          </ul>
          
        </div>
      </div>
    </nav>
        </div>
      )
}

export default Nav
