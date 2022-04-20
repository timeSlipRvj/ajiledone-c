import type { PropsWithChildren } from 'react'
import GlobalFooter from './GlobalFooter'
import GlobalNavbar from './GlobalNavbar'

export default function GlobalLayout({ children }: PropsWithChildren<{}>) {
	return (
		<>
			<header>
				<GlobalNavbar />
			</header>

			<main>{children}</main>

			<GlobalFooter />
		</>
	)
}
