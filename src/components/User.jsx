import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";

const User = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleUserDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = users.filter(user => user._id !== id)
              setUsers(remaining); 
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl">Users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Creation Time</th>
              <th>last SignIn Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime}</td>
                <td className="space-x-2">
                  <button className="border border-gray-500 p-2 text-lg rounded-lg">
                    <MdModeEdit />
                  </button>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="border border-gray-500 p-2 bg-red-300 text-lg rounded-lg"
                  >
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
