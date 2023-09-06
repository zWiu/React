//Importando biblioteca usaState do react, para modificar compenentes específicos
import {useState} from "react"

function App() {
//Criando variáveis useState, para componentes que precisam ser atualizados
  //Declarando componente que ficará o jogo
  const [games, setGames] = useState(() =>{
    //Declarando uma variável para caso já tenha jogos no armazenamento, mostra-los
    const storedGames = localStorage.getItem("obc-game-lib")
    //Caso não tenha voltará o valor nulo
    if(!storedGames) return []
    //Lendo o JSON e transformando-o em Array
    const gameArray = JSON.parse(storedGames)
    //Retornando o Array com os jogos
    return gameArray 
  })
  //Declarando componente do título do jogo
  const [title, setTitle] = useState("")
  //Declarando componenete da capa do jogo
  const [cover, setCover] = useState("")
//Criando funções para modificar o site
  //Função para adicionar jogos
  const addGame = ({ title, cover}) => {
    //Improvisando um id aleátorio
    const id = Math.floor(Math.random() *1000000)
    //Declarando os valores do game 
    const game = {id, title, cover}
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
  //Função para chamar o adicionar jogo 
  const handleSubmit = (ev) => {
    //Função preventDefault evitar que o evento comum ocorra, por exemplo o envio de um formulário atualizar a página
    ev.preventDefault()
    //Função para adicionar os jogos
    addGame({title, cover})
    //Valores definidos pelo jogo
    setTitle("")
    setCover("")
  }
  //Estrutura do site
  return (
    //Div do site geral
    <div id="app">
      {/* Título do site */}
     <h1>Biblioteca de jogos</h1>
     {/* Form para envio de jogos */}
     <form onSubmit={handleSubmit}>
      <div>
        {/* Caixa pedidno o título do jogo */}
        <label htmlFor="title">Titulo:</label>
        <input 
        // Definindo varáveis do input
        type="text" 
        name="title" 
        id="title" 
        // Declarando que o valor colocado é o título do jogo
        value={title}
        // Enviando título inserido para o componente do jogo
        onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        {/* Caixa falando que é a capa do jogo */}
        <label htmlFor="cover">Capa:</label>
        <input 
        // Declarando variáveis do input
        type="text" 
        name="cover" 
        id="cover" 
        // Declando que o que tiver dentro será a capa do jogo
        value={cover}
        // Enviando a capa do jogo, para o seu componente
        onChange={(e) => setCover(e.target.value)}
        />
      </div>
      {/* Butão de envio de jogos */}
      <button type="submit">Adicionar à biblioteca</button>
     </form>
     <div className="games">
      {/* Renderizando todos os jogos do Array de jogos na página */}
        {games.map((game)=> (
          // Definindo div de id
        <div src={game.id}>
          {/* Definindo onde ficará a capa do jogo */}
          <img src={game.cover}/>
          <div>
            {/* Definindo onde ficará o título do jogo */}
            <h2>{game.title}</h2>
            {/* Butão chamando a função de remover jogos */}
            <button onClick={() => removeGame(game.id)}>Remove</button>
          </div>
        </div>
        ))}
     </div>
    </div>
  )
}

export default App