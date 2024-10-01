import nri from '@/assets/nri.png'
import bg from '@/assets/nri-bg.png'
import Sections from '../Section'
function NRI() {
  return (
    <Sections className=" mb-20 items-center justify-center w-auto">
         <h1 className="text-6xl md:text-6xl lg:text-9xl font-custom text-center">We are NRI Friendly Too</h1>
        <div className='bg-cover '  style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}>
      <img src={nri} alt="" className=' relative  -mx-[5vw] w-full '/>
      </div>
    </Sections>
  )
}
    
export default NRI
