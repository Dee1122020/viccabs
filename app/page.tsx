import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-full relative">

          <img className='opacity-80' src="/FlindersStreetStation.jpg" alt="Melbourne" />

          <article className='absolute top-20 left-40 w-1/2 bg-transparent z-10 capitalize'>
            <h2 className='text-4xl font-normal text-center sm:text-5xl sm:text-left text-gray-300 mt-3 ml-7 mr-5'>Are You Looking For A<span className="text-indigo-300">&nbsp;Luxurious Car and Premium Service&nbsp;</span>For Your Next Travel?</h2>

            <p className='text-3xl font-medium text mt-8 ml-7'>Then Look No Further ...</p>

            <p className='text-3xl font-medium text mt-4 ml-7'>We have got a fleet of top of the range cars and professional drivers ...</p>

            <p className='text-3xl font-medium text mt-4 ml-7 mb-3'>
              <Link href="/pages/contact" className='link cursor-pointer hover:opacity-40'><u>Book</u></Link>
              &nbsp;Your Ride With Us!</p>

          </article>
        </div>

      </div>
    </div>
    
  )
}
