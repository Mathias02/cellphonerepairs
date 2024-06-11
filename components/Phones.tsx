
import Image from "next/image"


const PhonePage = () => {
  return (
    <section className='w-full mx-auto bg-blue-50 mt-5'>
        <div className="grid md:grid-cols-3 gap-3">
            <Image src={'/images/phn2.jpg'} height={300} width={600} alt="phn1" />
            <Image src={'/images/phn3.jpg'} height={300} width={600} alt="phn1" />
            <Image src={'/images/phn4.jpg'} height={300} width={600} alt="phn1" />
        </div>
    </section>
  )
}

export default PhonePage