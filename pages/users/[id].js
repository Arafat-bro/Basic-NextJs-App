import Head from 'next/head'

export const getStaticPaths = async() => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await result.json();
    
    //we need only id from whole data object
    const paths = data.map(user => {
        return{
            params: {id : user.id.toString()}
        }
    })
    return{
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) => {   //here context = paths
    const id = context.params.id;
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
    const data = await result.json();

    return{
        props:{user:data}
    }
}

const Details = ({user}) => {
    return ( 
    <div>
        <Head>
            <title>Next App | User Details</title>
            <meta name="keywords" content="arafat" />
        </Head>
        <h1>{user.name} Details</h1>
        <h3>{user.email}</h3>
        <h3>{user.website}</h3>
        <h3>{user.address.city}</h3>
     
    </div> );
}
 
export default Details;