import PropTypes from "prop-types"

TextInput.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    content: PropTypes.string,
    cod: PropTypes.string

}
//Destruturando argumetnos enviados para o TextInput
export default function TextInput({ value, setValue, content, cod }) {

    return (
        <div>
            <label htmlFor={cod}>{content}</label>
            <input
                // Declarando variáveis do input
                type="text"
                name={cod}
                id={cod}
                // Declando que o que tiver dentro será a capa do jogo
                value={value}
                // Enviando a capa do jogo, para o seu componente
                onChange={(e) => setValue(e.target.value)}
            />

        </div>
    )
}