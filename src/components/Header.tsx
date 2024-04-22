import Logo from '../assets/logo.svg?react'

import FontsDropdownMenu from './FontsDropdownMenu'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header>
      <Logo />

      <div className="options">
        <FontsDropdownMenu />
        <div className="separator"></div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header