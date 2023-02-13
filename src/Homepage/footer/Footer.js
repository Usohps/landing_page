import {FiPhone} from "react-icons/fi"
import {BsHouseDoor} from "react-icons/bs"
function Footer() {
  return (
    <>
      <div className="container border-t m-auto p-4 text-white flex items-center justify-between mt-10  ">
        <div className="w-[300px] text-left flex items-center justify-center space-x-2">
            <div><BsHouseDoor/></div>
          <p>
            2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </div>
        <div>
          <p>Loyalbaze is almost here.</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
            <div><FiPhone/></div>
          <p>+234 903 618 9485</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
