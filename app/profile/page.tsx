import Image from "next/image"
import { img1, img2, img3, img4, img5, img6 } from "./img"
import { Metadata } from "next"

export const metadata : Metadata = {
  title : 'Profile Page',
  description : 'This is the profile page'
}

const Profile = () => {
  return (
    <>
    <h1 className="p-4">This is my likkle profile of peng women</h1>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="relative h-[400px] w-[100%]">
      <Image src={img1} alt="bee img" className="rounded-lg object-cover w-full h-auto" placeholder="blur" sizes="100vw" fill  />
      </div>
      <div className="relative h-[400px] w-[100%]">
      <Image src={img2} alt="bee img" className="rounded-lg object-cover w-full h-auto" placeholder="blur" sizes="100vw" fill  />
      </div>
      <div className="relative h-[400px] w-[100%]">
      <Image src={img3} alt="bee img" className="rounded-lg object-cover w-full h-auto" placeholder="blur" sizes="100vw" fill  />
      </div>
      <div className="relative h-[400px] w-[100%]">
      <Image src={img4} alt="bee img" className="rounded-lg object-cover w-full h-auto" placeholder="blur" sizes="100vw" fill  />
      </div>
      <div className="relative h-[400px] w-[100%]">
      <Image src={img5} alt="bee img" className="rounded-lg object-cover w-full h-auto" placeholder="blur" sizes="100vw" fill  />
      </div>
      <div className="relative h-[400px] w-[100%]">
      <Image src={img6} alt="bee img" className="rounded-lg object-cover w-full h-auto" placeholder="blur" sizes="100vw" fill  />
      </div>
      </div>
    </>
  )
}

export default Profile