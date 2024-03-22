import './Placar.css';

const Placar = ({ vitoriasP1, vitoriasP2 })  => {
  return (
    <div className="placar">
      <p>Placar:</p>
      <p>Jogador 1: {vitoriasP1}</p>
      <p>Jogador 2: {vitoriasP2}</p>
    </div>
  );
}

export default Placar;

