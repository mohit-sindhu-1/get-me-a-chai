"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchUser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } else {
            getData()
        }
    }, [router, session])

    const getData = async () => {
        let u = await fetchUser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast('Profile Updated!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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
            <div className='container mx-auto py-5'>
                <h1 className='font-bold md:text-3xl text-2xl text-center'>Welcome to your Deshboard</h1>

                <form className="md:max-w-2xl max-w-xs mx-auto py-5" action={handleSubmit}>

                    <div className='my-2'>
                        <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                        <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id='name'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id='email'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id='username'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="profile_pic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Profile Picture</label>
                        <input value={form.profile_pic ? form.profile_pic : ""} onChange={handleChange} type="text" name='profile_pic' id='profile_pic'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="cover_pic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover Picture</label>
                        <input value={form.cover_pic ? form.cover_pic : ""} onChange={handleChange} type="text" name='cover_pic' id='cover_pic'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="razorpayId" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Id</label>
                        <input value={form.razorpayId ? form.razorpayId : ""} onChange={handleChange} type="text" name='razorpayId' id='razorpayId'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="razorpaySecret" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Secret</label>
                        <input value={form.razorpaySecret ? form.razorpaySecret : ""} onChange={handleChange} type="text" name='razorpaySecret' id='razorpaySecret'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>


                    <div className='flex justify-center py-2'>
                        <button type="submit" className="w-28 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Dashboard
