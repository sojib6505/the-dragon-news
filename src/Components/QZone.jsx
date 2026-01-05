import swimming from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playground from '../assets/playground.png'
import bg from '../assets/bg.png'

export default function QZone() {
  return (
   <div>
     <div className='bg-base-200 p-3'>
        <h2 className="font-bold text-xl">
            Q-Zone
        </h2>
        <div>
           <img src={swimming} alt="" />
           <img src={classImg} alt="" />
           <img src={playground} alt="" />
        </div>
    </div>
    <div className='mt-5'>
          <img className='w-full' src={bg} alt="" />
        </div>
   </div>
  )
}
