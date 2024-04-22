import '../styles/components/ThemeSwitch.css'
import { useEffect, useState } from 'react'
import IconMoon from '../assets/icon-moon.svg?react'

function getInitialTheme() {
	/* Get the prefered theme of the user -- true=dark; false=light */
	// Search for the theme in the local storage
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		return savedTheme === 'dark'; // If the theme is dark, return true
	}

	// Check the user's system theme
	if (window.matchMedia && window.matchMedia('(prefers-c olor-scheme: light)').matches) {
		return false
	}

	// If the user's system theme is dark or the user has no preference, return true
	return true
}

const ThemeSwitch = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => getInitialTheme())

	function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
		setIsDarkMode(e.target.checked)
	}

	useEffect(() => {
		// On change theme:
		const theme = isDarkMode ? 'dark' : 'light'
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [isDarkMode])

	return (
		<div className="theme-switch">
			<label className="switch">
				<input
					type="checkbox"
					checked={isDarkMode}
					onChange={(e) => handleThemeChange(e)}
				/>
				<span className="slider"></span>
			</label>

			<IconMoon className={`${isDarkMode ? 'dark-mode' : ''}`} />
		</div>
	)
}

export default ThemeSwitch