import React from 'react'

function courseTemplate(props) {
  const original = props.price.original;
  const discount = props.price.discount;
  const paid = original - discount;
  return (
    <div className='h-[100vh] w-full pt-10 flex justify-center '>

     <div className='bg-blue-100 p-5 rounded-sm w-[50%] h-fit shadow-xl border-r border-b border-blue-300'>
        <div className=' flex justify-center '>
          <img src={props.image} alt="" className='w-[25%] h-[25%]' />

        </div>

        <div className='w-full pt-10 flex justify-center'>
          <h1 className='text-3xl font-bold'>{props.courseName}</h1>
        </div>



        {/* //content */}
        <div className='flex justify-center'>
          <div className=' w-[50%] rounded-sm  '>
            <div className='w-full p-5 flex  text-xl justify-center'>
              <h2>{props.shortDescription}</h2>
            </div>

            <div className='w-full  flex justify-center'>
              <h2><b>level</b>{props.level}</h2>
            </div>

            <div className='w-full  flex justify-center'>
              <h2><b>Technologiesused:</b>{props.technologiesUsed}</h2>
            </div>
            <div className='w-full  flex justify-center'>
              <h2><b>Project:</b>{props.projects}</h2>
            </div>
            <div className='w-full  flex justify-center'>
              <h2><b>Certificate:</b> {props.certificate ? "yes" : "No"}</h2>
            </div>
            <div className='w-full  flex justify-center'>
              <h2><b>Time:</b>{props.duration}</h2>
            </div>
            <div className='w-full  flex justify-center'>
              <h2>{props.status}</h2>
            </div>


            <div className='w-full  flex justify-center'>
              <h2><b>Rating:</b>{props.rating}</h2>
            </div>
            <div className='w-full p-2 flex justify-center'>
              <h2><b>Full Description:</b> {props.fullDescription}</h2>
            </div>
            <div className='w-full  flex  justify-center gap-8 '>
              <h2><b>Price:</b>{props.price.original}</h2><br />
              <h2><b>Discount:</b>{props.price.discount}</h2>
              <h2><b>Paidable Amount:</b>{paid}</h2>
            </div>

          </div>

        </div>

     </div>
    </div>
  )
}

export default courseTemplate