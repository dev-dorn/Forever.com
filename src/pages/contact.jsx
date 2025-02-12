import { assets } from "../assets/assets"
import NewsLettterBox from "../components/NewsLettterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'Contact'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-xol justify-center md:flex-row gap-10 mb-28'>
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt=""/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className= 'text-gray-500'> 54709 willms Station <br/> Suite 350, Washington, USA</p>
        <p className='text-gray-500'> Tel:(415) 555-0132 <br /> Email: admin@forever.com</p>
        <p className='font-semibold text-x1 text-gray-600'>Careers at Forever</p>
        <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita accusantium pariatur voluptatum aliquam. Laudantium vero blanditiis id a ad consequatur? Quas, magni. Consequuntur vel repellendus at reprehenderit. Perferendis, iste laboriosam?</p>
        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"> Explore Jobs</button>
        </div>
        
      </div>
      <NewsLettterBox/>
    </div>
  )
}

export default Contact
