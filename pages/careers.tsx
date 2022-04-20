import type { NextPage } from 'next'
import Image from 'next/image'
import CareersTeamBox from '../components/CareerTeamBox'
import CareersHeaderImg from '../public/assets/careers-header-img.png'

interface CareersPageProps {
	openPositions: string[]
}

const CareersPage: NextPage = () => {
	return (
		<div>
			<Image src={CareersHeaderImg} alt='image' layout='responsive' />

			<div className='p-5 w-10/12 m-auto'>
				<section id='info'>
					<HeadingWithSmallHr title='We are a strong Team' />
					<p className='text-center text-xs'>
						Our team has all the necessary members. We are actively looking for
						new members.
					</p>

					<div className='grid grid-cols-3 gap-10 my-10'>
						<CareersTeamBox
							name='Tech Team'
							positionsAvailable={[
								'Backend',
								'Second Option',
								'Backend',
								'ThirdOption',
								'Backend',
							]}
							containerClassName='after:bg-[#7387C3]'
						/>
						<CareersTeamBox
							name='Tech Team'
							positionsAvailable={[
								'Backend',
								'ThirdOption',
								'Second Option',
								'Backend',
								'ThirdOption',
							]}
							containerClassName='after:bg-[#8DA7F3]'
						/>
						<CareersTeamBox
							name='Tech Team'
							positionsAvailable={[
								'Backend',
								'Second Option',
								'Backend',
								'ThirdOption',
							]}
							containerClassName='after:bg-[#3E58A5]'
						/>
					</div>
				</section>

				<section id='open positions'>
					<HeadingWithSmallHr title='Open Positions' />
				</section>

				<section id='send-resume'>
					<HeadingWithSmallHr title='Send Resume' />
					<p className='text-center text-xs'>
						You can fill your information and we’ll contact you whenever we’ll
						have the requirement.
					</p>

					<form></form>
				</section>
			</div>
		</div>
	)
}

export default CareersPage

interface HeadingWithSmallHrProps {
	title: string
}
function HeadingWithSmallHr({ title }: HeadingWithSmallHrProps) {
	return (
		<div className='my-10'>
			<h1 className='uppercase text-2xl font-bold text-center'>{title}</h1>
			<div className='w-[5.625rem] h-[1px] bg-primary mx-auto mt-3'></div>
		</div>
	)
}
