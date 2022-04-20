import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ReactModal from 'react-modal'
import logoImg from '../public/assets/logo-nav.png'
import ButtonCTA from './ButtonCTA'
import OpenPositionsModal from './OpenPositionsModal'

ReactModal.setAppElement('#modal-container')

export const navLinksList: Record<'href' | 'name', string>[] = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/about',
		name: 'About',
	},
	{
		href: '/careers',
		name: 'Careers',
	},
	{
		href: '/blogs',
		name: 'Blogs',
	},
	{
		href: '/services',
		name: 'Services',
	},
]

export default function GlobalNavbar() {
	const [showModal, setShowModal] = useState(false)
	const router = useRouter()

	return (
		<header>
			<ReactModal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
				<OpenPositionsModal />
			</ReactModal>

			<nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<Link href='/'>
						<a className='flex items-center border-2 rounded-full p-2.5 w-7 h-7 sm:h-10 sm:w-10'>
							<Image src={logoImg} alt='logo' className='mx-auto' />
						</a>
					</Link>

					<div className='flex justify-between items-center w-auto text-black'>
						<ul className='flex mt-4'>
							{navLinksList.map(({ href, name }) => (
								<li key={href}>
									<Link href={href}>
										<a
											href='#'
											className={`block py-2 pr-4 pl-3 text-black ${
												router.pathname === href ? 'active-nav-link' : ''
											}`}
										>
											{name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className='flex items-center'>
						<ButtonCTA onClick={() => setShowModal(true)}>
							Get in Touch
						</ButtonCTA>
					</div>
				</div>
			</nav>
		</header>
	)
}
