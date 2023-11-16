import React from 'react'
import { useState } from 'react'
import TextInput from '../TextInput'
import Style from './style.module.css'
import PropTypes from 'prop-types'

Form.propTypes = {
    addPost: PropTypes.func
}

export default function Form({ addPost }) {
    const [email, setEmail] = useState("")
    const [coment, setComent] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addPost({ email, coment })

        setComent('')
        setEmail('')
    }
    return (
        <div className={Style.form}>
            <form onSubmit={handleSubmit}>
                    <TextInput
                        content='Email'
                        cod='email'
                        value={email}
                        setValue={setEmail}
                        altura='5vh'
                        tipo='input'
                    />
                    <TextInput
                        content='Comentário'
                        cod='coment'
                        value={coment}
                        setValue={setComent}
                        altura='20vh'
                        tipo='textarea'
                    />
                    <button type='submit'>Enviar Comentário</button>
            </form>
        </div>
    )
}
