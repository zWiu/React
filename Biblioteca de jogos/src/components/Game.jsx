import PropTypes from "prop-types"

Game.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func
}
//Destruturando os argumentos enviando para o Game
export default function Game({ title, cover, onRemove }) {

  return (
    <div>
      {/* Definindo onde ficará a capa do jogo */}
      <img src={cover} />
      <div>
        {/* Definindo onde ficará o título do jogo */}
        <h2>{title}</h2>
        {/* Butão chamando a função de remover jogos */}
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  )
}