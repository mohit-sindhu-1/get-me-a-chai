"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { initiate, fetchUser, fetchPayments } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from "next/image";
import avatarPic from '/public/avatar.gif'

const PaymentPage = ({ username }) => {
    const [paymentForm, setPaymentForm] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        setData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Thanks for your donation!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push(`/${username}`)
        }
    }, [])


    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    }

    const setData = async () => {
        let u = await fetchUser(username)
        setCurrentUser(u)
        let dbPayments = await fetchPayments(username)
        setPayments(dbPayments)
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentForm)

        var options = {
            "key": currentUser.razorpayId, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me a chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": a.id, //This is a sample Order ID. Pass the `id` obtained in the response
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": username, //your customer's name
                "email": paymentForm.email,
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        let rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div>
                <div className='cover relative'>
                    <img className='object-contain w-full md:h-[340px] h-44 border-t border-gray-700' src={currentUser.cover_pic ? currentUser.cover_pic : '/cover.jfif'} alt="cover" />
                    <div className="profilePic absolute md:left-[48%] sm:left-[44%] left-[40%] -bottom-12 md:size-32 size-20 overflow-hidden">
                        <img className='object-cover rounded-b-lg rounded-t-lg md:size-32 size-20' src={currentUser.profile_pic ? currentUser.profile_pic : '/profile.jfif'} alt="" />
                    </div>
                </div>

                <div className="info flex flex-col gap-y-2 justify-center items-center mt-20">
                    <h2 className='text-3xl font-semibold'>{username.replace("%20", " ")}</h2>
                    <div className='text-gray-300'>{payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount, 0)} Raised</div>
                </div>

                <div className="payment flex flex-col items-center lg:items-start lg:flex-row gap-3 xl:w-4/5 w-11/12 mx-auto py-10">
                    <div className="supporters bg-gray-900 py-3 px-6 rounded-lg lg:w-1/2 md:w-4/5 w-full md:h-80 h-fit">
                        <h2 className='text-2xl font-bold pb-1.5 text-center border-b border-gray-700'>Top Supporters</h2>
                        <ul className='md:space-y-1 space-y-3 py-3 text-sm font-medium '>
                            {payments.length === 0 && <li>No payments yet</li>}
                            {/* display only first/top ten donations */}
                            {payments.slice(0, 10).map((e, index) => {
                                return <li key={index} className='flex items-center gap-x-2'>
                                    <Image width={23} src={avatarPic} alt="user avatar" />
                                    <span>{`${e.name} donated ₹${e.amount} with message "${e.message}"`}</span>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="makePayment bg-gray-900 py-3 px-6 rounded-lg lg:w-1/2 md:w-4/5 w-full md:h-80 h-fit">
                        <h2 className='text-2xl font-bold my-4'>Make a Payment</h2>
                        <div className="flex gap-y-2 flex-col items-center">
                            <input onChange={handleChange} value={paymentForm.name} type="text" className='w-full p-2 rounded-lg bg-slate-800' placeholder='Enter Name' name="name" id="name" />
                            <input onChange={handleChange} value={paymentForm.message} type="text" className='w-full p-2 rounded-lg bg-slate-800' placeholder='Enter Message' name="message" id="message" />
                            <input onChange={handleChange} value={paymentForm.amount} type="number" className='w-full p-2 rounded-lg bg-slate-800' placeholder='Enter Amount' name="amount" id="amount" />
                            <button disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 5 || paymentForm?.amount < 1} onClick={() => pay(Number.parseInt(paymentForm.amount) * 100)} className='bg-blue-600 p-2 rounded-lg w-full font-semibold hover:bg-blue-700 disabled:bg-[#cccccc] disabled:text-[#666666]'>Pay</button>

                        </div>
                        <div className='flex gap-x-2 pt-2'>
                            <button disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 5} className='bg-emerald-500 p-1.5 rounded-lg disabled:bg-[#cccccc] disabled:text-[#666666] w-1/3' onClick={() => pay(10 * 100)}>₹10 </button>
                            <button disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 5} className='bg-emerald-500 p-1.5 rounded-lg disabled:bg-[#cccccc] disabled:text-[#666666] w-1/3' onClick={() => pay(20 * 100)}>₹20</button>
                            <button disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 5} className='bg-emerald-500 p-1.5 rounded-lg disabled:bg-[#cccccc] disabled:text-[#666666] w-1/3' onClick={() => pay(50 * 100)}>₹50</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
