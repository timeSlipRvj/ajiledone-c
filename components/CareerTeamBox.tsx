import ButtonCTA from './ButtonCTA'

interface CareersTeamBoxProps {
	name: string
	containerClassName?: string
	positionsAvailable: string[]
}

export default function CareersTeamBox({
	name,
	containerClassName,
	positionsAvailable,
}: CareersTeamBoxProps) {
	return (
		<div
			className={`bg-neutral-200 rounded p-5 relative careers-team-box ${containerClassName}`}
		>
			<div>
				<h3 className='font-bold uppercase'>{name}</h3>
				<span className='careers-team-box-bar' />
			</div>

			<p>Positions For:</p>

			<div className='flex flex-wrap gap-1 mt-3'>
				{positionsAvailable.map((position, index) => (
					<ButtonCTA className='text-xs py-2' key={position + index}>
						{position}
					</ButtonCTA>
				))}
			</div>
		</div>
	)
}
