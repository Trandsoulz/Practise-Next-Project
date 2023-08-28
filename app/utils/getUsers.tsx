

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next : { revalidate : 60 }
    });
    
    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
    
}

export default getUsers;