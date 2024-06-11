import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <header className='border-b border-white bg-yellow-700 mx-2'> 
        <div className="container-lg m-auto">
            <div className="w-full flex justify-between items-center px-5">
                <Link href={'/'}>
                      <Image src={'/logo1.svg'} width={125} height={125} alt="logo"/>
                </Link>
                <ul className="flex space-x-10 text-xl capitalize">
                  <li>
                    <Link href={'/'}>home</Link>
                  </li>
                  <li>
                    <Link href={'/service'}>service</Link>
                  </li>
                  <li><Link href={'/contact'}>contact</Link></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header