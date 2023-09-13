import React from 'react'
import Style from './style.module.css'
import PropTypes from 'prop-types'



Post.proptypes = {
    email: PropTypes.string,
    coment: PropTypes.string
}

export default function Post({ email, coment, date}) {
  return (
    <div className={Style.post}>
        <div className={Style.email}>
            <p>{email}</p>
        </div>
        <span>Em {date.toLocaleString()}</span>
        <div>
            <p>{coment}</p>
        </div>
    </div>
  )
}
