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
            Welcome to our MERN (MongoDB, Express, React, Node.js) application!
            <br />
            This app demonstrates user registration and login functionalities
            with JWT authentication. Please register a new user and log in to
            access protected routes.
          </p>
          <p className="text-black text-lg capitalize">
            The frontend is built with React, utilizing Daisy UI, React Query,
            and Tailwind CSS for a modern and responsive user experience.
            <br />
            The backend is powered by Node.js, Express, and MongoDB, with
            Mongoose for data modeling.
            <br />
            Authentication is implemented using JSON Web Tokens (JWT) for secure
            access.
          </p>
          <p className="text-black text-lg capitalize">
            Our app includes client-side validation for the login and signup
            pages, ensuring a smooth user experience.
            <br />
            Additionally, server-side validation guarantees data integrity and
            security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
