import { useState, useEffect, useRef, useContext } from 'react'
import { FontContext } from '../fontContext/FontContext'
import ArrowDown from '../assets/icon-arrow-down.svg?react'

const FontsDropdownMenu = () => {
	const fontContext = useContext(FontContext)
	if (!fontContext) {
		throw new Error('useFont must be used within a FontProvider');
	}
	const { selectedFont, setSelectedFont } = fontContext

	const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false)
	const toggleDropdownMenu = () => setShowDropdownMenu(!showDropdownMenu)

	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Close dropdown menu when clicking outside
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setShowDropdownMenu(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className="fonts-dropdown-menu" ref={dropdownRef}>
			<button onClick={toggleDropdownMenu}>
				{selectedFont}
				<ArrowDown />
			</button>

			<ul className={`dropdown-menu ${showDropdownMenu ? "show" : "hide"}`}>
				{selectedFont !== 'Serif' && <li onClick={() => setSelectedFont('Serif')}>Serif</li>}
				{selectedFont !== 'Sans-Serif' && <li onClick={() => setSelectedFont('Sans-Serif')}>Sans-Serif</li>}
				{selectedFont !== 'Mono' && <li onClick={() => setSelectedFont('Mono')}>Mono</li>}
			</ul>
		</div>
	)
}

export default FontsDropdownMenu