import { useState } from "react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const AuthenticationPage = () => {
  const [authType, setAuthType] = useState("login");
  const background = {
    backgroundImage: `url("/authBG.webp")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className=" w-full h-[100dvh] relative" style={background}>
      <div className="layer flex items-center justify-center">
        {authType === "login" && <Login setAuthType={setAuthType} />}
        {authType === "signup" && <Signup setAuthType={setAuthType} />}
      </div>
    </section>
  );
};

export default AuthenticationPage;
