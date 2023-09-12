
//Importanto o componente Game
import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

function App() {
  const {games, addGame, removeGame} = useGameCollection()
  //Estrutura do site
  return (
    //Div do site geral
    <div id="app">
      {/* Título do site */}
      <h1>Biblioteca de jogos</h1>
      {/* Form para envio de jogos */}
      <NewGameForm
        addGame={addGame}
      />
      <div className="games">
        {/* Renderizando todos os jogos do Array de jogos na página */}
        {games.length > 0 ?
        (games.map((game) => (
          // Chamando componente Game
          <Game
            // Definindo valores para o componente Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />

        )))
      :(
        <h2>Parace que ainda não foi adicionado um jogo aqui, tente adicionar novos jogos!</h2>
      )}
      </div>
    </div>
  )
}

export default App