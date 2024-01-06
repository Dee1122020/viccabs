import React from 'react'

function About() {
  return (
    <div className='bg-black text-gray-400 flex flex-col p-5'>
      <div>
        <div>
          <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 py-6'>About Victoria Cabs</h2>
        </div>
        <div className='flex flex-col p-5 items-center mb-20'>
          <div className='w-5/6'>
            <p className='text-2xl m-5 text-justify'>
              Welcome to Victoria Cabs, the epitome of luxury chauffeur and taxi services in Melbourne. We take pride in providing an unparalleled experience, where every journey is a seamless blend of sophistication, comfort, and professionalism.
            </p>
          </div> 
        </div>

        <div>
          <h3 className='text-3xl mb-5 text-center font-semibold'>Our Fleet</h3>
        </div>

        <div className='flex flex-col-reverse gap-5 p-5 items-center mb-20'>
          <div className='w-5/6'>
            <p className='text-2xl text-justify'>
              At Victoria Cabs, we boast a meticulously curated fleet of modern, top-of-the-range chauffeur cars that redefine elegance and style. From sleek sedans to spacious SUVs, each vehicle in our collection is a symbol of luxury and craftsmanship. Our commitment to excellence extends to the maintenance of our fleet, ensuring that every ride with us is not just a journey but an indulgence in opulence.
            </p>
          </div>
          <div className='w-5/6 p-10'>
            <img src="/chauffeur.jpg" alt="Chauffeur" />
          </div> 
        </div>

        <div>
          <h3 className='text-3xl mb-5 ml-5 text-center font-semibold'>Our Chauffeurs</h3>
        </div>

        <div className='flex flex-col-reverse gap-5 p-5 items-center mb-20'>
          <div className='w-5/6'>
            <p className='text-2xl text-justify'>
            Behind the wheel of every Victoria Cabs vehicle is a highly trained, professional chauffeur dedicated to delivering a superior service. Our chauffeurs embody the values of courtesy, discretion, and reliability. They are not just drivers; they are ambassadors of our commitment to providing an exceptional and personalized experience to our clients.
            </p>
          </div>
          <div className='w-5/6 p-10'>
            <img src="/chauffeur.jpg" alt="Chauffeur" />
          </div> 
        </div>

        <div>
          <h3 className='text-3xl mb-5 ml-5 text-center font-semibold'>Commitment to Excellence</h3>
        </div>

        <div className='flex flex-col-reverse gap-5 p-5 items-center mb-20'>
          <div className='w-5/6'>
            <p className='text-2xl text-justify'>
            At Victoria Cabs, our mission is to redefine luxury transport by setting the highest standards in the industry. We are driven by a passion for delivering unparalleled service, ensuring that every client experiences the epitome of comfort, safety, and style.
            </p>
          </div>
          <div className='w-5/6 p-10'>
            <img src="/chauffeur.jpg" alt="Chauffeur" />
          </div>
        </div> 
      </div>

      
    </div>
  )
}

export default About