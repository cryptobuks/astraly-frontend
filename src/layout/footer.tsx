import {
  ContactEmail,
  DiscordLink,
  GitHubLink,
  DocsLink,
  TwitterLink,
  WhitepaperLink,
  TelegramLink,
} from '../constants'
import TwitterIcon from 'assets/icons/Twitter.svg'
import TelegramIcon from 'assets/icons/Telegram.svg'
import GithubIcon from 'assets/icons/Github.svg'
import DiscordIcon from 'assets/icons/Discord.svg'
import DocumentIcon from 'assets/icons/Document.svg'
import FolderIcon from 'assets/icons/Folder.svg'
import Logo from 'assets/images/logo-text.svg'
import Link from 'next/link'
import Toggle from '../components/ui/inputs/Toggle'
import { useEffect, useState } from 'react'

const Item = ({ icon, label, href }: { icon: string; label: string; href: string }) => {
  return (
    <>
      <a href={href} target="__blank">
        <div className="flex items-center t-primary cursor-pointer">
          <div className="icon mr-2 transform -translate-y-0.5">
            <img src={icon} alt={label} />
          </div>

          <div className="text">{label}</div>
        </div>
      </a>
    </>
  )
}

const Footer = () => {
  const Links = [
    [TwitterIcon, 'Twitter', TwitterLink],
    [DiscordIcon, 'Discord', DiscordLink],
    [DocumentIcon, 'Whitepaper', WhitepaperLink],
    [GithubIcon, 'Github', GitHubLink],
    [TelegramIcon, 'Telegram', TelegramLink],
    [FolderIcon, 'Docs', DocsLink],
  ]
  const [isDark, setIsDark] = useState(false)

  const checkTheme = () => {
    const item = localStorage.getItem('theme')

    if (item) {
      setIsDark(item === 'dark')
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    checkTheme()

    window.addEventListener('storage', checkTheme)

    return () => {
      window.removeEventListener('storage', checkTheme)
    }
  }, [])

  const toggleTheme = () => {
    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark')
    checkTheme()
  }
  return (
    <>
      <div className="g-container py-4">
        <div className="py-2 flex flex-col lg:flex-row items-center justify-between text-16">
          <div className="links flex flex-wrap items-center gap-4 lg:gap-11 mb-6 lg:mb-0">
            {Links.map(([icon, label, href]) => (
              <Item icon={icon} label={label} href={href} key={label} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <Toggle value={isDark} onClick={toggleTheme} />
            </div>

            <p>
              Get in touch:{' '}
              <a href={`mailto:${ContactEmail}`} className={'text-primary'}>
                {ContactEmail}{' '}
              </a>
            </p>
            <Link href={'/'}>
              <img src={Logo} alt={'Astraly'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
