

const getPosts = async (id : string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next : {revalidate : 30}
    })

    if (!res.ok) {
        throw new Error("An error occured");
    }
    return res.json();
}

export default getPosts