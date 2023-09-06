import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
    //Declarando componente do título do jogo
    const [title, setTitle] = useState("")
    //Declarando componenete da capa do jogo
    const [cover, setCover] = useState("")

    //Função para chamar o adicionar jogo 
    const handleSubmit = (ev) => {
        //Função preventDefault evitar que o evento comum ocorra, por exemplo o envio de um formulário atualizar a página
        ev.preventDefault()
        //Função para adicionar os jogos
        addGame({ title, cover })
        //Valores definidos pelo jogo
        setTitle("")
        setCover("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Caixa pedidno o título do jogo */}
                    <TextInput
                        value={title}
                        setValue={setTitle}
                        content="Título"
                        cod="title"
                    />
                </div>
                <div>
                    {/* Caixa falando que é a capa do jogo */}
                    <TextInput
                        value={cover}
                        setValue={setCover}
                        content="Capa:"
                        cod="cover"
                    />
                </div>
                {/* Butão de envio de jogos */}
                <button type="submit">Adicionar à biblioteca</button>
            </form>

        </div>
    )
}