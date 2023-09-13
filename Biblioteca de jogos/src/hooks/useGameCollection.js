import { useState } from "react"

export default function useGameCollection() {
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
      //Juntando o antigo estado (...state) ao novo jogo (game)
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
      //Selecionando jogo que sera removido
      const newState = state.filter(game => game.id !== id)
      //Removendo o jogo do estado
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      //Retornando o novo estado da página
      return newState
    })
  }

  return { games, addGame, removeGame }
}
