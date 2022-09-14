import React from 'react'

const Header = ({titulo}) => {
  return (
    <header>
        <h1>{titulo}</h1>
    </header>
  )
}
// ? Con esto podemos establecer valores por default a los props
Header.defaultProps = {
    titulo : 'Tareas'
}

export default Header