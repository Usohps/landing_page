import Logo from "../tools/Frame 1000004057.png";

function Navbar() {
  return (
    <>
      <nav className="container py-5 m-auto flex items-center justify-between">
        <div>
          <img src={Logo} className="w-32" alt="" />
        </div>
        <div>
          <button className="rounded-full w-[180px] py-1 text-white bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] font-bold shadow-2xl">
            Get Priority Access
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
