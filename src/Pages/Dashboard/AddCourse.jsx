import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddCourse = () => {
   
    
        const HandleAddCourse = async (e)=>{
            e.preventDefault()
            
            const form = e.target;
            const image_url = form.image_url.value
            const title = form.title.value
          const instructor = form.instructor.value
            const price = form.price.value
            const description = form.description.value
            const quantity = form.quantity.value
            
            const courseData = {
                image_url,
                quantity,
                title,
              instructor,
                price,
                description,
               
            }
            
            console.log(courseData)
            
              await fetch(`https://education-server-alpha.vercel.app/course`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                   
                },
                body:JSON.stringify(courseData)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.acknowledged === true
                  ){
                    Swal.fire({
                        title: "Good job!",
                        text: "Product added succes",
                        icon: "success"
                      });
                }
    
                form.reset()
                
              })
            
            
            
            }
    
    return (
        <div className='w-full mx-auto pe-8 bg-green-200 pb-14'>
        <h1 className='text-3xl font-bold text-center my-10'>Add Course </h1>
                    <form onSubmit={HandleAddCourse}>
                        <div className='flex flex-row justify-center items-center w-full gap-5  '>
                        <div className='w-1/2 mx-9'>
                            <p className='mb-2 '>Image Url</p>
                            <input className=' px-4 py-2 border rounded-lg w-full ' type="text"  name="image_url" id="" />
                        </div>
                        <div className='w-1/2'>
                        <p className='my-2 '>Title</p>
                          <input  className='px-4 py-2 border rounded-lg w-full'  type="text" name="title" id="" />
                        </div>
                        
                        </div>
                        <div className='flex flex-row justify-center items-center ms-10 gap-6  '>
                       
                        <div className='w-1/2'>
                            
                        
                            <p className='my-2 ms-2'>Instructor</p>
                            <input className=' px-4 py-2 border rounded-lg w-full ' type="text" name="instructor"  id="" />
                        </div>
                        <div className='w-1/2'>
                            <p className='my-2 ms-2'>Price</p>
                          <input className='px-4 py-2 border rounded-lg w-full' type="text" name="price"  id="" />
                        </div>
                        <div className='w-1/2'>
                        <p className='my-2 ms-2'>Quantity</p>
                          <input  className='px-4 py-2 border rounded-lg w-full '  type="text" name="quantity" id="" />
                        </div>
                        
                        </div>
                        <div className='w-full mx-9'>
                        <p className='my-2 ms-2'>Description</p>
                      <textarea rows={3} cols={108} className='px-4 py-4 border rounded-lg ' name="description"  id=""></textarea>
                        </div>
                        <div className='w-full mx-9 flex justify-center mt-3 pb-8'>
                            <input className='btn bg-green-600 hover:bg-green-800 hover:text-white text-white w-1/2' type="submit" value="Add Now" />
                        </div>
                    </form>
                </div>
    );
};

export default AddCourse;