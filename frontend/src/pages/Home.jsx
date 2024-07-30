import Header from "../components/home/Header";

const Home = () => {
  return (
    <section className="w-full min-h-[100dvh]">
      <Header />
      <div className="container py-[40px] space-y-6">
        <h1 className="text-4xl text-black font-bold capitalize">
          welcome to my{" "}
          <span className="text-primary-950 font-extrabold">MERN</span> auth
          app!
        </h1>
        <div className=" space-y-4">
          <p className="text-black text-lg capitalize">
            This is a simple MERN (MongoDB, Express, React, Node.js) application
            <br />
            showcasing a user registration and login functionality. The app uses
            JWT for authentication. Please register a new user and log in to
            access the protected routes.
          </p>
          <p className="text-black text-lg capitalize">
            the frontend of the application is build with React.
            <br />
            the backend is build with Node.js, express and uses MongoDB as the
            database.
            <br />
            authentication is implemented using JSON web token (JWT).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
