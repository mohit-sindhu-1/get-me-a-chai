import React from 'react'

const about = () => {
  return (
    <>
      <div className='container mx-auto md:px-0 px-5 py-8 text-gray-950'>
        <div className='space-y-2'>
          <h1 className='text-2xl font-semibold md:text-left text-center'>About Get Me a Chai</h1>
          <p className='font-medium'>Get Me a Chai is a crowdfunding platform design for developers to fund their project with the support of their users. It's a space where your users can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your userbase and bring your project to life.</p>
        </div>

        <div className='py-5 md:gap-x-8 gap-y-16 md:gap-y-0 flex md:justify-between flex-col md:flex-row'>
          <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold md:text-left text-center'>How It Works</h2>
              <div className='flex items-center gap-2 md:flex-row flex-col'>
                <img className='w-14' src="group.gif" alt="group" />
                  <p className='text-sm font-medium md:text-left text-center'>Your users are enthusiastic about collaborating with you on your project.</p>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold'>Benefits for Developers</h2>
              <ul>
                <li className='text-sm font-medium list-inside list-disc'>Direct financial support from your userbase</li>
                <li className='text-sm font-medium list-inside list-disc'>Engage with your users on a more personal level</li>
                <li className='text-sm font-medium list-inside list-disc'>Access to a platform tailored for creative project</li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold'>Benefits for Users</h2>
              <ul>
                <li className='text-sm font-medium list-inside list-disc'>Directly contribute to the success of your developers whose projects you like</li>
                <li className='text-sm font-medium list-inside list-disc'>Exclusive rewards and perks for supporting developers</li>
                <li className='text-sm font-medium list-inside list-disc'>Be part of the creative process and connect with developers</li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold'>Benefits of Collaboration</h2>
              <ul>
                <li className='text-sm font-medium list-inside list-disc'>Unlock new opportunities through collaboration with fellow developers</li>
                <li className='text-sm font-medium list-inside list-disc'>Expand your network and reach a wider users</li>
                <li className='text-sm font-medium list-inside list-disc'>Combine skills and resources to combine innovative project</li>
              </ul>
            </div>

          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold md:text-left text-center'>Support Through Chai</h2>
              <div className='flex items-center gap-2 md:flex-row flex-col'>
                <img className='w-14' src="coin.gif" alt="coin" />
                <p className='text-sm font-medium md:text-left text-center'>Receive support from your users in the form of chai purchases</p>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold'>Recognition and Exposure</h2>
              <ul>
                <li className='text-sm font-medium list-inside list-disc'>Showcase your work to a global audience and gain recognition</li>
                <li className='text-sm font-medium list-inside list-disc'>Feature in promotional materials and campaigns</li>
                <li className='text-sm font-medium list-inside list-disc'>Build your portfolio and increase your credibility as a developer</li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold'>Access to Resources</h2>
              <ul>
                <li className='text-sm font-medium list-inside list-disc'>Gain access to resources such as tutorials, tools and beta versions</li>
                <li className='text-sm font-medium list-inside list-disc'>Receive guidance and mentorship from experienced developers</li>
                <li className='text-sm font-medium list-inside list-disc'>Stay updated about the updates and new features</li>
              </ul>
            </div>


            <div className='flex flex-col gap-3'>
              <h2 className='text-xl font-semibold'>Supportive Community</h2>
              <ul>
                <li className='text-sm font-medium list-inside list-disc'>Join a community that values creativity, diversity, and inclusivity</li>
                <li className='text-sm font-medium list-inside list-disc'>Find encouragement and inspiration from fellow members</li>
                <li className='text-sm font-medium list-inside list-disc'>Collaborate on projects and share resources for mutual growth</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default about

export const metadata = {
  title: "About - Get Me a Chai"
}