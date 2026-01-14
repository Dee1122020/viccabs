import Link from "next/link"
import Image from "next/image"
import flindersStreetStation2 from '../public/flinders-street-station2.jpg';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <section className="flex flex-col justify-center p-4 md:p-6 items-center gap-6 md:gap-8 mb-8 md:mb-12 lg:flex-row-reverse lg:items-start">
        <div className="w-full mt-4 md:w-1/2 lg:mt-8">

          <Image
            src={flindersStreetStation2}
            alt="Melbourne skyline with Flinders Street Station"
            className='opacity-80 rounded-lg w-full h-auto'
            width={500}
            height={500}
            priority
          />

        </div>

        <article className='w-full text-white capitalize md:w-1/2'>
            <h2 className='max-w-md text-xl text-center md:text-2xl lg:text-3xl lg:text-left text-gray-300 mt-4 md:mt-6 lg:ml-7 mr-5'>Are You Looking For A<span className="text-indigo-300">&nbsp;Luxurious Car and Premium Service&nbsp;</span>For Your Next Travel in Melbourne?</h2>

            <p className='max-w-md text-lg text-center md:text-xl lg:text-2xl lg:text-left mt-6 md:mt-8 lg:ml-7'>Then Look No Further ...</p>

            <p className='max-w-md text-base text-center md:text-lg lg:text-xl lg:text-left mt-4 lg:ml-7'>We have got a fleet of top-of-the-range cars and professional drivers ...</p>

            <p className='max-w-md text-base text-center md:text-lg lg:text-xl lg:text-left mt-4 lg:ml-7 mb-3'>
              <Link href="/pages/book" className='link cursor-pointer hover:opacity-40 font-medium'><u className="text-indigo-500">Book</u></Link>
              &nbsp;Your Ride With Us!</p>

          </article>

      </section>
    </div>
    
  )
}
