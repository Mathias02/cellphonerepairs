import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <header className='border border-b-black'> 
        <div className="container-lg m-auto">
            <div className="w-full flex justify-between items-center px-5">
                <Link href={'/'}>
                      <Image src={'/logo1.svg'} width={125} height={125} alt="logo"/>
                </Link>
                <ul className="flex space-x-10 text-xl capitalize">
                  <li>home</li>
                  <li>service</li>
                  <li>contact</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header