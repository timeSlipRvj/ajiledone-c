import Image from 'next/image'
import { useEffect, useState } from 'react'
import ModalSideImg from '../public/assets/open-positions-modal-side-img.png'
import ButtonCTA from './ButtonCTA'

export default function OpenPositionsModal() {
	return (
		<div className='grid grid-cols-[1fr,2fr] rounded shadow-md shadow-slate'>
			<div className='bg-[#7387C3] flex justify-center items-center rounded-l'>
				<Image src={ModalSideImg} alt='asdf' />
			</div>

			<div className='p-14'>
				<h2 className='uppercase font-bold text-2xl'>Open Positions</h2>
				<p className='text-sm'>
					Apply in Ajiledone with simple steps, and we’ll contact you within a
					few hours.
				</p>

				<form className='flex flex-col gap-2 mt-10'>
					<input
						className='rounded-xl border-none p-3 bg-neutral-200'
						type='text'
						placeholder='Name of person'
						name='name'
					/>
					<input
						className='rounded-xl border-none p-3 bg-neutral-200'
						type='text'
						placeholder='Profile Selected'
						name='profile'
					/>

					<label className='rounded-xl border-none p-3 bg-neutral-200'>
						Add Resume (Limit: 5MB)
						<input type='file' name='resume' className='hidden' />
					</label>
					<label className='rounded-xl border-none p-3 bg-neutral-200'>
						Add Cover Letter (Limit: 5MB)
						<input type='file' name='resume' className='hidden' />
					</label>

					<ButtonCTA type='submit' className='w-64 mx-auto mt-2'>
						Apply Now
					</ButtonCTA>
					<p className='text-xs text-[#878787] mx-auto'>
						We&lsquo;ll contact you after reviewing your resume.
					</p>
				</form>
			</div>
		</div>
	)
}
