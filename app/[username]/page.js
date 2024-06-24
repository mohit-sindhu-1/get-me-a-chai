import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
  // if the username is not present in the database, show a 404 page
  const checkUser = async () => {
    await connectDB()
    let user = await User.findOne({ username: params.username.replace("%20", " ") })
    if (!user) {
      return notFound()
    }
  }

  await checkUser()

  return (
    <>
      <PaymentPage username={params.username.replace("%20", " ")} />
    </>
  )
}

export default Username

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username.replace("%20", " ")} - Get Me a Chai`
  }
}