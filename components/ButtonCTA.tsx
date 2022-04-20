import type { ButtonHTMLAttributes } from 'react'

export default function ButtonCTA({
	className,
	children,
	...buttonProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type='button'
			className={`text-sm rounded-[5px] focus:ring-4 uppercase font-medium text-white p-3 bg-primary ${className}`}
			{...buttonProps}
		>
			{children}
		</button>
	)
}
