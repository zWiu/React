//Importando biblioteca usaState do react, para modificar compenentes específicos
import { useState } from "react"
//Importanto o componente Game
import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"

function App() {
  //Criando variáveis useState, para componentes que precisam ser atualizados
  //Declarando componente que ficará o jogo
  const [games, setGames] = useState(() => {
    //Declarando uma variável para caso já tenha jogos no armazenamento, mostra-los
    const storedGames = localStorage.getItem("obc-game-lib")
    //Caso não tenha voltará o valor nulo
    if (!storedGames) return []
    //Lendo o JSON e transformando-o em Array
    const gameArray = JSON.parse(storedGames)
    //Retornando o Array com os jogos
    return gameArray
  })
  //Criando funções para modificar o site
  //Função para adicionar jogos
  const addGame = ({ title, cover }) => {
    //Improvisando um id aleátorio
    const id = Math.floor(Math.random() * 1000000)
    //Declarando os valores do game 
    const game = { id, title, cover }
    //Adicionando o jogo na página 
    setGames(state => {
      //Declarando estado de jogo
      const newState = [...state, game]
      //Armazenando o estado de jogo
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      //Retornando o novo estado da página
      return newState
    })
  }
  //Função para remover jogos
  const removeGame = (id) => {
    //Removendo o jogo da página
    setGames(state => {
      //Selecionando jogo há ser removido
      const newState = state.filter(game => game.id !== id)
      //Removendo o jogo do estado
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      //Retornando o novo estado da página
      return newState
    })
  }
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
        {games.map((game) => (
          // Chamando componente Game
          <Game
            // Definindo valores para o componente Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />

        ))}
      </div>
    </div>
  )
}

export default App