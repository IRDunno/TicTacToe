import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ProfileCard = () => {
  const [editState, setEditState] = useState(false);

  return (
    <div className="bg-base-100 my-28 mx-10 p-14 shadow-xl rounded-xl lg:mx-0 md:mx-28 w-11/12 lg:w-3/4">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 grid grid-cols-2 gap-4">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              value="John"
              className="input input-bordered w-full"
              disabled={!editState}
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              value="password"
              className="input input-bordered w-full"
              disabled={!editState}
            />
          </label>

          <div className="form-control">
            <label className="label justify-start gap-2 items-center cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                onClick={(event) => setEditState(event.target.checked)}
              />
              <span className="label-text">Edit</span>
            </label>
          </div>
          <button className={`btn btn-active btn-sm ${!editState && "hidden"}`}>
            Update Profile
          </button>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="w-2/5">
          <div className="">
            <span className="label-text text-error cursor-pointer hover:underline flex gap-2 items-center">
              <FaRegTrashAlt />
              Delete Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
