import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.module.css'

TextInput.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    content: PropTypes.string,
    cod: PropTypes.string,
    tipo: PropTypes.string
}

export default function TextInput({ value, setValue, content, cod, tipo }) {

    if (tipo === 'input') {
        return (
            <div className={Style.textInput}>
                <p>{content}</p>
                <input type='text'
                    id={cod}
                    name={cod}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        )
    }
    else {
        return (
            <div className={Style.textInput}>
                <p>{content}</p>

                <textarea type='text'
                    id={cod}
                    name={cod}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        )
    }
}
