import React, { FC, useEffect } from 'react'
import Logo from '../assets/logo.svg?react'

import fetchWordData from '../utils/fetchWordData'
import interestingWords from '../data/interestingWords'

import FontsDropdownMenu from './FontsDropdownMenu'
import ThemeSwitch from './ThemeSwitch'

interface HeaderProps {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
	setWordDataResponse: React.Dispatch<React.SetStateAction<object>>
}

const Header: FC<HeaderProps> = ({ setIsLoading, setWordDataResponse }) => {
	function getInterestingWord() {
		setIsLoading(true)
		const interestingWord = interestingWords[Math.floor(Math.random() * interestingWords.length)]
		fetchWordData(interestingWord)
			.then((data: object) => {
				setIsLoading(false)
				setWordDataResponse(data)
			})
			.catch(err => {
				console.error(err)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		getInterestingWord()
	}, [])

	return (
		<header>
			<Logo onClick={getInterestingWord}/>

			<div className="options">
				<FontsDropdownMenu />
				<div className="separator"></div>
				<ThemeSwitch />
			</div>
		</header>
	)
}

export default Header