import React, { useContext } from 'react'
import { themeContent } from './Context'

function ThemeToggle() {
    const{theme, toogleTheme} = useContext(themeContent);

  return (
    <div>
        <p></p>
    </div>
  )
}

export default ThemeToggle