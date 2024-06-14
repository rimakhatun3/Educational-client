import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CourseRow = ({course,index,handleDelete}) => {

    const {title,image_url,price,_id,quantity,instructor} = course || {}
    const onDelete = ()=>{
        fetch(`https://education-server-alpha.vercel.appcourse/${_id}`,{
         method:"DELETE",
        
        })
        .then(res=>res.json())
        .then(data=>{
         Swal.fire({
             title: "Are you sure?",
             text: "Delete ",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, delete it!"
           })
           handleDelete(_id)
        })
     }

    return (
        <tr>
        <td>
         {index}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            
              <div className="text-sm opacity-50">{instructor}</div>
            </div>
          </div>
        </td>
        
        <td>{title}</td>
        <td>${price}</td>
        <td className='text-center'>{quantity}</td>
        
        <th>
         <Link to={`payment/${_id}`}> <button className="btn btn-primary ">Enroll</button></Link>
        </th>
        <th>
         <Link to={`editcourse/${_id}`}> <button className="btn btn-primary ">Edit</button></Link>
        </th>
        <th>
          <button onClick={onDelete} className="btn btn-error">Delete</button>
        </th>
      </tr>
    );
};

export default CourseRow;