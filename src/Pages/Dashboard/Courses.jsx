import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseRow from '../../Components/dashboard/CourseRow';

const Courses = () => {
    const courseData = useLoaderData()
    const [filteredCourse, setFilteredCourse] = useState(courseData);
    const handleDelete =(id)=>{
        const filterCourse = courseData.filter(course=>course._id!==id)
        setFilteredCourse(filterCourse)
    }
    return (
        <div className="overflow-x-auto mt-10 ">
        <div className="flex flex-row justify-between items-center mb-8">
            <h1 className="text-xl font-semibold ms-8">All Course List</h1>
            {/* <div>
            <input
        placeholder="search"
        className="border rounded-lg px-4 py-2"
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <button 
        className="btn btn-primary ml-2"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
            </div> */}
        </div>
<table className="table">
{/* head */}
<thead>
  <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <th>Name</th>
    <th>title</th>
    <th>Price</th>
    <th>Quantity</th>
    <th className='text-center'>Enrol</th>
    <th className='text-center'>Edit</th>
    <th className='text-center'>Delete</th>

  </tr>
</thead>
<tbody>
 
  {
    filteredCourse?.map((course,index)=><CourseRow handleDelete={handleDelete} key={course._id} course={course} index={index}></CourseRow>)
  }
 
 

</tbody>


</table>
</div>
    );
};

export default Courses;