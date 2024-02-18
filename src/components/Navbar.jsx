import RequestInviteButton from "./RequestInviteButton";

function Navbar() {
  return (
    <>
      {/* desktop */}
      <nav className="hidden md:flex justify-around py-8 items-baseline bg-neutral-white ">
        <div>
          <img src="./logo.svg" alt="" />
        </div>
        <div>
          <ul className="flex gap-8 text-neutral-grayish-blue">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <RequestInviteButton />
        </div>
      </nav>
      {/* mobile */}
      <nav>
        <div>
          <img src="./logo.svg" alt="" />
        </div>
        <div>
          <button>
            <img src="./icon-hamburger.svg" alt="" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
