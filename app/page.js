import Link from "next/link";
import Image from "next/image";
import manPic from '../public/man.gif'
import coinPic from '../public/coin.gif'
import groupPic from '../public/group.gif'
import teaPic from '../public/tea.gif'

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 text-white md:h-[45vh] py-5 md:py-0">
        <div className="font-bold lg:text-5xl text-3xl flex justify-center items-center gap-2">Buy Me a Chai <span><Image className="md:w-20 w-14" src={teaPic} alt="tea" /></span></div>
        <p className="text-center md:text-left">A crowdfunding platform for developers. Get funded by your users.</p>

        <div>
          <Link href={'/login'}>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-300 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={'/about'}>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-300 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>

      <div className="text-white container mx-auto border-t border-gray-200 pb-16 pt-11 ">
        <h2 className="text-2xl font-bold text-center mb-8">Your users can buy you a Chai</h2>
        <div className="flex justify-around flex-col md:flex-row gap-y-10 md:gap-y-0">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-100 rounded-full p-2 " src={manPic} alt="man" width={88} />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your users are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-100 rounded-full p-2 " src={coinPic} alt="coin" width={88} />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your users are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-100 rounded-full p-2 " src={groupPic} alt="group" width={88} />
            <p className="font-bold">User want to help</p>
            <p className="text-center">Your users are available for you to help you</p>
          </div>
        </div>
      </div>


    </>
  );
}
