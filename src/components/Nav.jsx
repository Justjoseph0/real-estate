

const Nav = () => {
  return (
    <nav>
      <div className="w-4/5 mx-auto flex justify-between items-center h-20">
        <ul className="flex items-center gap-6 text-custom-black font-medium capitalize">
          <li className="bg-[#4361EE4D] py-3 px-4 rounded-[30px] ">Home</li>
          <li>about</li>
          <li>Listing</li>
          <li>Services</li>
          <li>Blogs</li>
        </ul>
        <div className="flex items-center gap-3">
          <span className="bg-custom-purple h-12 w-12 rounded-full flex justify-center items-center">
            <img
              src="./images/logo.png"
              alt=""
              className="h-6 w-6 object-contain"
            />
          </span>
          <h3 className="text-xl font-semibold text-[#1E1E1E]">Rezilla</h3>
        </div>
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 capitalize">
            <img src="user.svg" alt="" />
            <span className="font-medium text-custom-black">
              login/register
            </span>
          </button>
          <button className="bg-custom-purple py-4 px-[26px] text-white flex items-center gap-2 capitalize rounded-[50px]">
            <img src="home.svg" alt="" />
            add listing
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
