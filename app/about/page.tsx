import type { Metadata } from "next"

export const metadata : Metadata = {
  title : 'About page',
  description : 'This is the about page'
}

const AboutPage = () => {
  return (
    <>
        <h1 className="p-4 h-[85vh] flex justify-center items-center">This is the About us page</h1>
    </>
  )
}

export default AboutPage