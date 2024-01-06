import React from 'react'

function Services() {
  return (
    <div className='bg-black text-gray-400 p-5'>
      <div className='flex flex-col'>
        <div>
          <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 py-6'>Our Services</h2>
        </div>
        <div>
          <section>
            <h3 className="text-3xl font-semibold text-center">Premium Taxi Service
            </h3>
            <div className='flex flex-col-reverse gap-5 p-5 items-center mb-20'>
              <div className='w-5/6'>
                <p className='text-2xl text-justify'>
                Victoria Cabs takes pride in offering a premium taxi service that goes beyond the ordinary. Our fleet of meticulously maintained vehicles ensures a comfortable and stylish journey for every passenger. Whether you're heading to a business meeting or exploring the city, our premium taxi service combines reliability with luxury.
                </p>
              </div>
              <div className='w-5/6 p-10'>
                <img src="/chauffeur.jpg" alt="Chauffeur" />
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-3xl font-semibold text-center">Chauffeur Service
            </h3>
            <div className='flex flex-col-reverse gap-5 p-5 items-center mb-20'>
              <div className='w-5/6'>
                <p className='text-2xl text-justify'>
                Indulge in the ultimate chauffeur experience with Victoria Cabs. Our professional chauffeurs are dedicated to providing a service that exceeds expectations. From corporate events to special occasions, our chauffeur service is designed to add a touch of sophistication to your every journey.
                </p>
              </div>
              <div className='w-5/6 p-10'>
                <img src="/chauffeur.jpg" alt="Chauffeur" />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-semibold text-center">Airport Transfer
            </h3>
            <div className='flex flex-col-reverse gap-5 p-5 items-center mb-20'>
              <div className='w-5/6'>
                <p className='text-2xl text-justify'>
                Start and end your travels with seamless airport transfers by Victoria Cabs. Our prompt and reliable service ensures that you reach your destination on time, stress-free. Experience the convenience of door-to-door transfers with our expert drivers and premium vehicles.
                </p>
              </div>
              <div className='w-5/6 p-10'>
                <img src="/chauffeur.jpg" alt="Chauffeur" />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-semibold text-center">Family-Friendly SUVs
            </h3>
            <div className='flex flex-col-reverse gap-5 p-5 items-center mb-20'>
              <div className='w-5/6'>
                <p className='text-2xl text-justify'>
                For your family's transportation needs, Victoria Cabs offers spacious and comfortable SUVs. Whether you're planning a day out or need transportation for a larger group, our bigger SUVs are equipped to provide a safe and enjoyable journey for the whole family.
                </p>
              </div>
              <div className='w-5/6 p-10'>
                <img src="/chauffeur.jpg" alt="Chauffeur" />
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}

export default Services