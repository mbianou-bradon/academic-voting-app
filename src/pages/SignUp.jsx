import signup from "../assets/signup.jpg";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../Backend/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    console.log(email, password)
    await createUserWithEmailAndPassword(auth, email, password).then(
      (credential) => {
        // const navigate = useNavigate();
        // navigate("/dashboard");
        console.log("user created:", credential.user);
      }
    );
    // .catch (error => {error.message});
  };

  return (
    <div className="min-h-[80vh] shadow-sm px-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img src={signup} alt="" />
        </div>

        <div className="w-4/5 mx-auto">
          <div>
            <h2 className="text-4xl font-semibold">Welcome !</h2>
            <p className=" text-sm mt-5">
              Create an account if you don't have one inorder to vote in your
              preffered candidate
            </p>
          </div>

          <div className="px-4">
            <div
              id="signup"
              className="[&>input]:border [&>input]:border-primary [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-primary [&>input]:rounded-full [&>input]:my-5 [&>input]:pl-4 [&>input]:placeholder:text-sm"
            >
              <input
                type="email"
                name="email"
                id="FormEmail"
                placeholder="Institutional Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                name="password"
                id="FormPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="w-3/4 text-center mx-auto text-xs md:text-sm">
                By Clicking the sign up button, you agree with our{" "}
                <span className="block text-primary font-semibold placeholder:text-primary hover:underline">
                  Terms and Conditions
                </span>
              </p>

              <button
                onClick={createUser}
                className="border border-primary bg-primary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95"
              >
                Sign Up
              </button>

              <button className="w-full h-10 rounded-full shadow-md text-center bg-white border  my-3 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center">
                <div className="text-3xl pr-2">
                  <FcGoogle />
                </div>
                <h2>Sign Up with Google</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
