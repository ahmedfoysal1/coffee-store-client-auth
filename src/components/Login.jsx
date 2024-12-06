import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);

        //update last loggedIntime
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:3000/users`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSignIn} className="mt-6 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-primary w-full mt-4">Login</button>
          <p className="text-center mt-2">
            <Link href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </Link>
          </p>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          new to this website?{" "}
          <Link to={"/signup"} className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
