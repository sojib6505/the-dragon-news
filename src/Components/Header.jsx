import { format } from 'date-fns'
import logo from '../assets/logo.png'


export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <img src={logo} alt="" />
        <p className=' text-accent'>Journalism Without Fear or Favour</p>
        <p className='font-semibold'> {format(new Date(),"EEEE")} <span className='text-accent'> {format(new Date(), `LLLL dd, yyyy`)}</span></p>
    </div>
  )
}
