
//Importanto o componente Game
import Game from "./components/Game"
//Importando o componente NewGameForm
import NewGameForm from "./components/NewGameForm"
// Importando um hook criado (useGameCollection))
import useGameCollection from "./hooks/useGameCollection"

function App() {
  // Destruturando o (useGameCollection) para utilizar suas propriedades (games, addGame, removeGame)
  const { games, addGame, removeGame } = useGameCollection()
  //Estrutura do site
  return (
    //Div do site geral
    <div id="app">
      {/* Título do site */}
      <h1>Biblioteca de jogos</h1>
      {/* Form para envio de jogos */}
      <NewGameForm
        // Enviando a função (addGame)
        addGame={addGame}
      />
      <div className="games">
        {/* Renderizando todos os jogos do Array de jogos na página */}
        { 
          // Utilizando um operador ternário para adicionar um texto, caso não exista jogos na biblioteca
          games.length > 0 ?
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
            : (
              // Texto que irá aparecer caso não existe jogos na biblioteca
              <h2>Parace que ainda não foi adicionado um jogo aqui, tente adicionar novos jogos!</h2>
            )}
      </div>
    </div>
  )
}

export default App