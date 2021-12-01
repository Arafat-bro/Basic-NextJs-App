import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( <nav>
        <div className="logo">
           <Image className="arafat" src="/Arafat.jpg" width={100} height={100} alt="logo"/>
        </div>
        <Link href="/" ><a>Home</a></Link >{' '}
        <Link href="/about"><a>About</a></Link>{' '}
        <Link href="/users"><a>Users</a></Link>{' '}
    </nav> );
}
 
export default Navbar;