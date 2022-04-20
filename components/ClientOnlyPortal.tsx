import { useRef, useEffect, useState, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface ClientOnlyPortalProps {
	selector: string
}
export default function ClientOnlyPortal({
	children,
	selector,
}: PropsWithChildren<ClientOnlyPortalProps>) {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector(selector)
		setMounted(true)
	}, [selector])

	return mounted && ref.current ? createPortal(children, ref.current) : null
}
