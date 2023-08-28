import Image from "next/image";
import { DogDataType } from "../types/Dog";
import getDog from "../utils/getDog";

const DogData = async () => {

  const dogData : DogDataType = await getDog();


  return (
    <>
        <h1 className="p-4">This is the image of a random dog page</h1>

        <div className=" pt-4 p-8">
        <Image src={dogData.message} className="rounded-xl mx-auto" alt="dog img" priority width={500} height={500}  />
        </div>
    </>
  )
}

export default DogData