import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row-reverse gap-2 p-5 bg-black">
        <div className="w-1/2 px-7 mt-8">

          <img className='opacity-80' src="/FlindersStreetStation.jpg" alt="Melbourne" />

        </div>

        <article className='w-1/2 text-white capitalize mt-10 px-7'>
            <h2 className='text-2xl text-center sm:text-5xl sm:text-left text-gray-300 mt-3 ml-7 mr-5'>Are You Looking For A<span className="text-indigo-300">&nbsp;Luxurious Car and Premium Service&nbsp;</span>For Your Next Travel?</h2>

            <p className='text-1xl text mt-8 ml-7'>Then Look No Further ...</p>

            <p className='text-1xl text mt-4 ml-7'>We have got a fleet of top of the range cars <br/>and professional drivers ...</p>

            <p className='text-1xl text mt-4 ml-7 mb-3'>
              <Link href="/pages/contact" className='link cursor-pointer hover:opacity-40'><u>Book</u></Link>
              &nbsp;Your Ride With Us!</p>

          </article>

      </div>
    </div>
    
  )
}
