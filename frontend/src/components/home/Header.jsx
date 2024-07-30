import EditProfileModal from "../EditProfileModal";

const Header = () => {
  return (
    <header className="w-full h-[72px] bg-primary-300">
      <div className="h-full container flex justify-between items-center">
        <strong className="text-2xl font-extrabold capitalize text-primary-950">
          auth app
        </strong>
        <ul className="flex flex-1 items-center gap-4 justify-end">
          <li
            className="text-lg text-primary-950 capitalize font-semibold cursor-pointer"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            edit profile
          </li>
          <EditProfileModal />
          <li>
            <button
              type="button"
              className="btn border-primary-600 bg-transparent hover:bg-primary-900 hover:border-primary-900 text-primary-900 hover:text-white capitalize text-lg font-semibold"
            >
              logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
