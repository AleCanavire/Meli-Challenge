import React from 'react';

function NotPhishing({ onHideAlert }) {
  return (
    <div className="notPhishingContainer">
      <div className="notPhishingContent">
        <h2>Este sitio no es un intento de phishing</h2>
        <p>Esta web NO es el sitio oficial de Mercado Libre, se trata de un challenge de Frontend, no es un intento de phishing hacia los usuarios que la visitan.</p>
      </div>
      <div className="notPhishingButtons">
        <button className="notPhishingBtn" onClick={() => { onHideAlert() }}>Entendido</button>
        <a href="https://www.linkedin.com/in/alexander-canavire/" target="_blank">
          <button className="notPhishingBtn">Perfil de Linkedin</button>
        </a>
      </div>
    </div>
  )
}

export default NotPhishing