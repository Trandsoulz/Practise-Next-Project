

const getUser = async ( id : string ) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next : { revalidate : 3600 }
    })

    if (!res.ok) {
        throw new Error("An error occured");
    }

    return res.json();
}

export default getUser