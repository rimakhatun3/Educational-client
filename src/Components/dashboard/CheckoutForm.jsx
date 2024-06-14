
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import  './style.css'
import { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';


const CheckoutForm = ({price,courseData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const [clientSecret,setClientSecret] = useState('')
    const [processing,setProcessing] = useState(false)
    const {user} = UseAuth()

    useEffect(()=>{
      fetch("http://localhost:5000/create-payment-intent",{
       method:"POST",
       headers:{
           "Content-type":"application/json",
          
       },
       body:JSON.stringify(price)
     })
     .then(result=>{
      console.log(result)
      // setClientSecret(result.clientSecret)
    })
    .catch(error=>{
      console.log(error.message)
    })
   },[])
   

const handleSubmit =async (e)=>{
    e.preventDefault()
    if(!stripe || !elements){
        return
    }
    const card =elements.getElement(CardElement)
    if(card===null){
        return
    }

    console.log("card",card)

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
        setProcessing(true)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setCardError("")
      }

      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "anonious",
              email:user?.email || "invalid email"
            },
          },
        },
      );
      
      if(confirmError){
        setCardError(confirmError.message)
        
      }
      console.log(paymentIntent)

      if(paymentIntent.status=="succeeded"){
        setTransitionId(paymentIntent.id)
        const payment ={
            transationId :paymentIntent.id,
            email:user?.email,
            price,
            classId : data._id,
            classItem: data.classId,
            className: data.className,
            seat:data.seat,
            date:new Date(),
        
          }
          fetch("http://localhost:5000/payment",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
               
            },
            body:JSON.stringify(price)
          })
          .then(result=>{
           console.log(result)
           // setClientSecret(result.clientSecret)
         })
         .catch(error=>{
           console.log(error.message)
         })
        
        
          }

     
}

    return (
        <div className='w-full mx-auto'>
             <form className='w-3/5' onSubmit={handleSubmit}>
      <CardElement 
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#76F62B',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='bg-green-600 hover:bg-green-400  text-center w-2/5 flex items-center justify-center mx-auto px-6' type="submit" disabled={!stripe }>
        Pay
      </button>
    </form>
    {
      cardError && <p className='text-red-600 -mt-16 ms-9'>{cardError}</p>
    }
        </div>
    );
};

export default CheckoutForm;
