import Link from 'next/link';
// import useEffect  from 'react';
// import useRouter from 'next/router';


const NotFound = () => {

    // const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     },10000)
    // })

    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h3>that page was not found</h3>
            <p>Go back to the previous page or <Link href="/" ><a>Home</a></Link></p>
            <p>Sit tight. We are redirecting you to the home page within 5 seconds.</p>
        </div>
     );
}
 
export default NotFound;