import React, { useState} from 'react';

const App = () => {
  return (
    <div>
      <Aleatorio min={0} max={100} />
    </div>
  );
};


import React, { useState } from 'react';


const Aleatorio = ({ min, max }) => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);

  const gerarNumeroAleatorio = () => {
    const novoNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumeroAleatorio(novoNumero);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ margin: '0', marginBottom: '20px' }}>Gerador de Números Aleatórios</h2>
      <button
        style={{
          backgroundColor: '#4CAF50',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          fontSize: '16px',
          borderRadius: '5px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
          display: 'block',
          margin: '0 auto', // Centralizar horizontalmente
        }}
        onClick={gerarNumeroAleatorio}
      >
        Gerar Número Aleatório
      </button>
      {numeroAleatorio !== null && (
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginTop: '20px' }}>
          Número Aleatório: {numeroAleatorio}
        </p>
      )}
    </div>
  );
};

export default App;

