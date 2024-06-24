"use server"

import Razorpay from "razorpay"
import connectDB from "@/db/connectDb"
import Payment from "@/models/Payment"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentForm) => {
    await connectDB()
    // fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username })
    const instance = new Razorpay({ key_id: user.razorpayId, key_secret: user.razorpaySecret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)
    // create a payment object which shows a pending payment in the database 
    await Payment.create({ oid: x.id, amount: x.amount / 100, to_user: to_username, name: paymentForm.name, message: paymentForm.message })
    return x
}

export const fetchUser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const updateProfile = async (data, oldUsername) => {
    await connectDB()
    let nData = Object.fromEntries(data)

    // if the username is being updated, check if username is available in database
    if (oldUsername !== nData.username) {
        let u = await User.findOne({ username: nData.username })
        if (u) {
            return { error: "Username already exist" }
        }

        // update the data excluding email
        await User.updateOne({ email: nData.email }, nData)
        // now update all the username in the database
        await Payment.updateMany({ to_user: oldUsername }, { to_user: nData.username })
    }

    // update the data excluding email
    await User.updateOne({ email: nData.email }, nData)
}

export const fetchPayments = async (username) => {
    await connectDB()
    // find all payments sorted by decreasing order of amount and flatten  object ids
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean()
    return p
}