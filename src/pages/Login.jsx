import { Link, useNavigate } from "react-router-dom";
import voting from "../assets/onlineVoting.png";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Backend/firebaseConfig";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // Login with email and password

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password).then(
      (credential) => {
        console.log("Login Successful:", credential.user);
      }
    );
    //   .catch((error) => {
    //     error.message;
    //   });
    navigate("/votersPage");
  };

  //   Sign in with Google

  const signinGoogle = async () => {
    await signInWithPopup(auth, provider)

      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = provider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
        navigate("/votersPage")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };

  return (
    <div className="min-h-[80vh] shadow-sm px-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-2/3 flex items-center justify-center ">
          <img src={voting} alt="" />
        </div>

        <div className="">
          <div>
            <h2 className="text-4xl font-semibold">Welcome Back!</h2>
            <p className=" text-sm mt-5">
              Welcome back to the Academia. Sign in to vote in your preffered
              candidate
            </p>
          </div>

          <div>
            <div className="signin [&>input]:border [&>input]:border-primary [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-primary [&>input]:rounded-full [&>input]:my-5 [&>input]:pl-4">
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

              <div className="flex justify-between mb-10 text-xs sm:text-sm flex-wrap gap-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberPassword"
                    id="rememberPassword"
                    className="w-5 h-5 border border-primary mr-2"
                  />
                  <label htmlFor="rememberPassword">Remember Password</label>
                </div>

                <h2 className="text-primary font-semibold hover:underline cursor-pointer">
                  <Link to={"/login/forgot_password"}>Forgot Password?</Link>
                </h2>
              </div>

              <button
                onClick={login}
                className="border border-primary bg-primary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95"
              >
                LogIn
              </button>

              <button onClick={signinGoogle} className="w-full h-10 rounded-full shadow-md text-center bg-white border  my-3 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center">
                <div className="text-3xl pr-2">
                  <FcGoogle />
                </div>
                <h2>LogIn with Google</h2>
              </button>
              <div className="text-center font-semibold mt-6">
                <Link to={"/login/admin"}>LogIn as an Admin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
