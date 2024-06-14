import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../../Components/dashboard/CheckoutForm';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_stripe_secret_key)
const Payment = () => {
    const courseData = useLoaderData()
    const price= courseData.price
//    const  price = parseFloat((item).toFixed(2))
    console.log(price)



    return (
        <div className='flex flex-col justify-center items-center'>
      <h1 className=' text-3xl font-bold mt-14 '>Payment Now </h1>
      
        <Elements stripe={stripePromise}>
            <CheckoutForm price={price} courseData={courseData}/>
        </Elements>
       
        </div>
    );
};

export default Payment;