import { IoMdEye } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, coffees,setCoffes}) => {
  const {
    _id,
    coffeeName,
    quantity,
    supplierName,
    taste,
    category,
    details,
    photo,
  } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        //
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
            const remainingCoffee = coffees.filter(coffee => coffee._id !== _id)
            setCoffes(remainingCoffee)
          });
      }
    });
  };

  return (
    <div className="card card-side bg-orange-50 hover:bg-orange-100 shadow-xl">
      <figure>
        <img className="w-20" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full p-4 items-center">
        <div className="text-start">
          <h2 className="card-title">Name : {coffeeName}</h2>
          <p>Supplier : {supplierName}</p>
          <p>Quantity : {quantity}</p>
          <p>Taste : {taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn  text-xl rounded-lg bg-stone-500">
              <IoMdEye />
            </button>
           <Link to={`/coffee/${_id}`}>
           <button className="btn  text-xl rounded-lg bg-gray-500">
              <CiEdit />
            </button>
           </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn  text-xl rounded-lg bg-red-400"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
