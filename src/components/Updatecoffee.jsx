import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updatecoffee = () => {
  const coffee = useLoaderData();
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
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.name.value;
    const quantity = form.quantity.value;
    const supplierName = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      coffeeName,
      quantity,
      supplierName,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-orange-50 p-24">
      <h1 className="text-5xl font-extrabold">Update Coffee : {coffeeName}</h1>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex gap-3 mb-2">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Coffee Name"
              defaultValue={coffeeName}
              name="name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Qunatity</span>
            </div>
            <input
              type="text"
              placeholder="Avaiable quantity"
              defaultValue={quantity}
              name="quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form supplier row */}
        <div className="md:flex gap-3 mb-2">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Supplier Name</span>
            </div>
            <input
              type="text"
              placeholder="Supplier Name"
              defaultValue={supplierName}
              name="supplier"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              placeholder="Taste"
              defaultValue={taste}
              name="taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-3 mb-2">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              placeholder="Category"
              defaultValue={category}
              name="category"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              placeholder="Details"
              defaultValue={details}
              name="details"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form photo url row */}
        <div className=" mb-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo Url</span>
            </div>
            <input
              type="text"
              placeholder="Photo URL"
              defaultValue={photo}
              name="photo"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="UPDATE COFFEE"
          className="w-full btn btn-neutral"
        />
      </form>
    </div>
  );
};

export default Updatecoffee;
