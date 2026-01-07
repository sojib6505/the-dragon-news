import { format } from 'date-fns'
import logo from '../assets/logo.png'


export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <img className='w-4/5 md:w-4/12' src={logo} alt="" />
        <p className=' text-accent text-sm md:text-xl'>Journalism Without Fear or Favour</p>
        <p className='font-semibold text-sm md:text-xl'> {format(new Date(),"EEEE")} <span className='text-accent'> {format(new Date(), `LLLL dd, yyyy`)}</span></p>
    </div>
  )
}
