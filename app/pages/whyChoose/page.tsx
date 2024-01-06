import React from 'react'

function WhyChoose() {
  return (
    <div className='bg-black text-gray-400 p-5'>
        <section>
            <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 py-6'>Why Choose Victoria Cabs</h2>
        </section>

        <section className='mb-10'>
            <div className='flex flex-col px-10'>

                <h3 className='text-3xl font-semibold py-10 text-center'>Exquisite Fleet</h3>

                <div className='flex flex-row gap-40 items-center mt-10 mb-10'>
                    <div className='w-1/3 items-center px-10'>
                        <p className='text-1xl text-pretty sm:text-2xl'>
                            Our collection of top-of-the-range vehicles caters to your every need, whether it's a corporate event, airport transfer, or a special occasion.
                        </p>
                    </div>

                    <div className='w-1/2 items-center border-none rounded-sm px-2'>
                        <img src="/callcenter.jpg" alt="Call Center" />
                    </div>

                </div>

                <h3 className='text-3xl font-semibold py-10 text-center capitalize mt-24'>Professional drivers</h3>

                <div className='flex flex-row gap-40 items-center mt-10 mb-10'>
                    <div className='w-1/3 items-center px-10'>
                        <p className='text-1xl text-pretty sm:text-2xl'>
                        Our chauffeurs and taxi drivers are not just drivers; they are trained professionals dedicated to providing a service that exceeds expectations.
                        </p>
                    </div>

                    <div className='w-1/2 items-center border-none rounded-sm px-2'>
                        <img src="/callcenter.jpg" alt="Call Center" />
                    </div>

                </div>

                <h3 className='text-3xl font-semibold py-10 text-center mt-24'>Tailored Experiences</h3>

                <div className='flex flex-row gap-40 items-center mt-10 mb-10'>
                    <div className='w-1/3 items-center px-10'>
                        <p className='text-1xl text-pretty sm:text-2xl'>
                        We understand that every journey is unique. Our team is committed to tailoring our services to meet your specific requirements, ensuring a personalized experience.
                        </p>
                    </div>

                    <div className='w-1/2 items-center border-none rounded-sm px-2'>
                        <img src="/callcenter.jpg" alt="Call Center" />
                    </div>

                </div>

                <h3 className='text-3xl font-semibold py-10 text-center mt-24'>Reliability</h3>

                <div className='flex flex-row gap-40 items-center mt-10 mb-10'>
                    <div className='w-1/3 items-center px-10'>
                        <p className='text-1xl text-pretty sm:text-2xl'>
                        Punctuality and reliability are at the core of our service. When you choose Victoria Cabs, you can trust us to get you to your destination on time, every time.
                        </p>
                    </div>

                    <div className='w-1/2 items-center border-none rounded-sm px-2'>
                        <img src="/callcenter.jpg" alt="Call Center" />
                    </div>

                </div>

                <h3 className='text-3xl font-semibold py-10 text-center mt-24'>Airport Excellence</h3>

                <div className='flex flex-row gap-40 items-center mt-10 mb-10'>
                    <div className='w-1/3 items-center px-10'>
                        <p className='text-1xl text-pretty sm:text-2xl'>
                        Trust us for reliable and stress-free airport transfers, ensuring you reach your destination on time.
                        </p>
                    </div>

                    <div className='w-1/2 items-center border-none rounded-sm px-2'>
                        <img src="/callcenter.jpg" alt="Call Center" />
                    </div>

                </div>

                <h3 className='text-3xl font-semibold py-10 text-center mt-24'>Family-Friendly</h3>

                <div className='flex flex-row gap-40 items-center mt-10 mb-10'>
                    <div className='w-1/3 items-center px-10'>
                        <p className='text-1xl text-pretty sm:text-2xl'>
                        Our bigger SUVs cater to the needs of families, providing spacious and comfortable transportation.
                        </p>
                    </div>

                    <div className='w-1/2 items-center border-none rounded-sm px-2'>
                        <img src="/callcenter.jpg" alt="Call Center" />
                    </div>

                </div>


            </div>
            
        </section>
    </div>
  )
}

export default WhyChoose