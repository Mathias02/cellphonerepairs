import Image from "next/image"

const FooterPage = () => {
  return (
    <div className='py-10 bg-yellow-700 text-white w-full mt-2 px-5 border-t-4 border-white'>
        <div className="container-lg flex justify-around">
            <div className="flex flex-col text-center">
                <h1 className="mb-3 font-bold text-2xl text-blue-200">Any brand goes</h1>
                <Image src={'/images/phn11.png'}   width={200}  height={100} alt="photo" className=""  />
            </div>
            <div className="text-sm">
                <h3 className="font-bold text-black text-xl">Our partners</h3>
                <ul>
                    <li>Samsung</li>
                    <li>Apple</li>
                    <li>Nokia</li>
                </ul>
            </div>
            <div className="text-sm">
                <h3 className="font-bold text-black text-xl">Social media</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterPage