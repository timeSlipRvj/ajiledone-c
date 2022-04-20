import Image from 'next/image'
import Link from 'next/link'
import logoFooter from '../public/assets/logo-footer.png'
import ButtonCTA from './ButtonCTA'
import { navLinksList } from './GlobalNavbar'

export default function GlobalFooter() {
	return (
		<footer className='container bg-primary flex justify-center items-center w-screen min-w-full text-white lg:px-24 px-16 py-3 text-sm'>
			<div className='grid grid-cols-4 gap-3'>
				<section>
					<div>
						<Image src={logoFooter} alt='logo' />
						<p>
							We Ajiledone, work to provide the best SAP Consulting Services
							with the experience to improve the IT landscape for uninterrupted
							business operations by 24*7 support.
						</p>
					</div>
				</section>

				<section id='footer-links'>
					<h6 className='footer-section-headers'>Links</h6>
					<ul className='flex flex-col gap-2'>
						{navLinksList.map(({ href, name }) =>
							name !== 'Home' ? (
								<li className='marker-➤'>
									<Link href={href}>
										<a className='uppercase'>{name}</a>
									</Link>
								</li>
							) : null,
						)}
					</ul>
				</section>

				<section id='footer-contact'>
					<h6 className='footer-section-headers'>Contact Info</h6>
					<div className='flex flex-col gap-5'>
						<p>
							Co-Offiz 8th Floor, Magnum Tower 1 Sector 58, Gurgaon Haryana
							-122011
						</p>
						<p>+91-9315473097</p>
						<p>info@ajiledone.com</p>
					</div>
				</section>

				<section id='footer-subscribe'>
					<h6 className='footer-section-headers'>Subscribe to us</h6>
					<form>
						<input
							type='email'
							className='block w-full px-2 py-1 bg-transparent border-b-2'
							placeholder='Enter your email'
						/>
						<ButtonCTA className='text-primary bg-white mx-auto mt-4'>
							Subscribe
						</ButtonCTA>
					</form>
				</section>
			</div>
		</footer>
	)
}
