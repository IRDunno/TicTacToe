import React from 'react'

const RegisterCard = () => {
  return (
    <div className="bg-base-100 my-28 mx-10 p-14 shadow-xl rounded-xl lg:mx-0 md:mx-28 w-[500px]">
      <h1 className="text-3xl font-medium text-center">REGISTER</h1>
      <div className="grid grid-rows-2 gap-2 mt-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Username:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password:</span>
          </div>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="grid grid-rows-1 mt-3">
        <button className="btn btn-active">Register</button>
      </div>
    </div>
  )
}

export default RegisterCard