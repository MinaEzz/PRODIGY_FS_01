import { enqueueSnackbar } from "notistack";

const Login = ({ setAuthType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("Login successfully", { variant: "success" });
  };
  const background = {
    backgroundColor: "rgba(255,255,255,0.5)",
  };
  return (
    <form
      action="/"
      method="post"
      className=" p-5 flex flex-col justify-center items-center gap-4 rounded-md w-[44rem] min-h-[40%]"
      style={background}
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl uppercase tracking-widest font-extrabold text-primary-900 ">
        login
      </h1>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70 text-primary-950"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70 text-primary-950"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" className="grow" placeholder="Password" />
      </label>

      <button
        type="submit"
        className="w-full btn border-primary-600 bg-primary-600 hover:bg-primary-900 hover:border-primary-900 text-white capitalize text-2xl outline-none"
      >
        login
      </button>
      <p className="text-primary-950 capitalize text-lg">
        don't have an account ?
      </p>
      <button
        type="button"
        className="w-full btn border-primary-600 bg-transparent hover:bg-primary-900 hover:border-primary-900 text-primary-900 hover:text-white capitalize text-2xl"
        onClick={() => setAuthType("signup")}
      >
        register
      </button>
    </form>
  );
};

export default Login;
