const Navbar = () => {
  return (
    <nav className="bg-slate-600 fixed top-0 w-full h-30 z-50 flex text-white  ">
      <div className="grid grid-cols-4 gap-4 w-full items-center px-4">
        <div className="flex items-center justify-center text-xl font-bold">
          <img
            src="../public/logo.jpg"
            className="h-25 w-30 object-cover rounded-full"
            alt="Logo"
          />
        </div>
        <div className="col-span-2 relative flex items-center">
          <input
            type="text"
            placeholder="Search Product..."
            className="h-13 pr-20 w-full bg-white justify-center items-center text-slate-900 px-3 py-1 focus:outline-none"
          />
          <button className="absolute z-10 right-1 top-1/2 -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-md hover:bg-slate-700 ">
            Search
          </button>
        </div>

        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
