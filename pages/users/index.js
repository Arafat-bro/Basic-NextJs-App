import Head from "next/head";
import Link from 'next/link'
import style from '../../styles/Users.module.css';

export const getStaticProps = async() => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await result.json();

    return{
        props:{  users: data  }
    }
}

const Users = ({users}) => {
    return ( 
        <>
          <Head>
                <title>Next App | Users</title>
                <meta name="keywords" content="arafat" />
            </Head>
        <h1 className={style.heading}>Users List</h1>
        {users.map((user) =>(
            <Link href={`/users/${user.id}`} key={user.id}>
                <a className={style.single}><h3>{user.name}</h3></a>
            </Link>
        ))}
        
        </>
     );
}
 
export default Users;