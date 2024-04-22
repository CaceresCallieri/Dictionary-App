import { FC } from 'react'
import LinkIcon from '../assets/icon-new-window.svg?react'
import DecorativeLine from './DecorativeLine'


interface FooterProps {
  sourceURL: string
}

const Footer: FC<FooterProps> = ({ sourceURL }) => {
  const shortenedURL = sourceURL.replace('https://', '').replace('http://', '')

  return (
    <footer>
      <DecorativeLine />
      
      <div className="source">
        <p>Source</p>
        <span>
          <a href={sourceURL} target="_blank">
            {shortenedURL}
          </a>

          <LinkIcon />
        </span>
      </div>
    </footer>
  )
}

export default Footer