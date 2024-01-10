import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="flex flex-col justify-center sm:flex-row-reverse p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallescreen:section-min-height">
        <div className="w-1/2 mt-8">

          <img className='opacity-80' src="/flinders street station2.jpg" alt="Melbourne" />

        </div>

        <article className='sm:w-1/2 text-white capitalize'>
            <h2 className='max-w-md text-2xl text-center sm:text-3xl sm:text-left text-gray-300 mt-4 ml-7 mr-5'>Are You Looking For A<span className="text-indigo-300">&nbsp;Luxurious Car and Premium Service&nbsp;</span>For Your Next Travel in Melbourne?</h2>

            <p className='max-w-md text-1xl text-center sm:text-2xl sm:text-left mt-8 ml-7'>Then Look No Further ...</p>

            <p className='max-w-md text-1xl text-center sm:text-2xl sm:text-left mt-4 ml-7'>We have got a fleet of top-of-the-range cars <br/>and professional drivers ...</p>

            <p className='max-w-md text-1xl text-center sm:text-2xl sm:text-left mt-4 ml-7 mb-3'>
              <Link href="/pages/contact" className='link cursor-pointer hover:opacity-40'><u className="text-indigo-500">Book</u></Link>
              &nbsp;Your Ride With Us!</p>

          </article>

      </section>
    </div>
    
  )
}
