

const getDog = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        next : { revalidate : 5}
    });

    if(!res.ok) { 
        throw new Error("An error occured while trying to fetch");
        
    }

    return res.json();
}

export default getDog

// const DogData = async () => {

//     const dogData : dogDataType = await fetchDogData();
//     console.log(dogData);
// }