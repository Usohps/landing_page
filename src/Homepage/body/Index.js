import Eclipse from "../tools/Ellipse 37.png";
import EclipseXl from "../tools/Ellipse 39.png";
import Goldstar from "../tools/Star 4.png";
import Arrow from "../tools/Arrow.png";
import Bluestar from "../tools/blue_star.png";
import Line from "../tools/Line 6.png";
import GOUM from "../tools/GOUM.png";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
function Index() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="container  flex flex-col items-end px-48">
          <img src={Eclipse} className="w-16" alt="" />
        </div>
        <div className="container m-auto flex  items-center">
          <div className="flex flex-col items-start  w-1/5">
            <img src={Eclipse} className="w-32" alt="" />
          </div>
          <div className=" max-w-[800px] text-center">
            <div className="pl-40">
              <img src={Goldstar} className="w-8" alt="" />
            </div>
            <div className="flex items-center justify-between">
              <div>
              <h1 className="text-white font-bold text-[40px] text-center">
                Turn your best customers into
                <span className="text-[#A75FD2]"> Loyal fans</span>
              </h1>
              </div>
              <div className=" w-1/5">
                <img src={Goldstar} className="w-8 " alt="" />
              </div>
            </div>
            <p className="text-gray-400 max-w-[600px] m-auto">
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </p>
          </div>
        </div>
        <div className=" space-y-10 max-w-[800px]  m-auto pt-14 relative">
          <form className=" space-y-10 flex items-center flex-col py-12">
            <div className=" w-[500px] ">
              <div className="relative">
                <input
                  type="text"
                  className="block w-full bg-[#121B27] border-gray-100 border rounded  py-2 pl-12 text-white"
                  placeholder="Tell us your name"
                />
                <CgProfile className="absolute top-4 left-6" color="white" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full my-8 bg-[#121B27] border border-gray-100 py-2 pl-12 rounded text-white"
                  placeholder="Enter your email address"
                />
                <AiOutlineMail
                  className="absolute top-11 left-6"
                  color="white"
                />
              </div>
              <div className="flex flex-col items-center ">
                <button className="rounded-full w-[280px]  py-1 text-white bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] font-bold ">
                  Get early access
                </button>
                <div className="flex w-[200px] item-center justify-center mt-4 text-white font-bold ">
                  <img src={GOUM} className="w-16 h-5 mr-2" alt="" />
                  <p>+57 joined</p>
                </div>
              </div>
            </div>
          </form>
          <img src={Arrow} alt="" className="absolute top-0 right-3" />
        </div>
        <div className="flex flex-col items-end absolute top-48 right-0 ">
          <img src={EclipseXl} className="w-48" alt="" />
          <div className="w-full px-12 items-end flex flex-col">
            <img src={Goldstar} className="w-8" alt="" />
          </div>
        </div>
        <div className="w-full px-12 ">
          <img src={Goldstar} className="w-8" alt="" />
        </div>
      </main>

      <section className="flex item-center justify-between container m-auto">
        <div className="w-1/2">
          <div className="flex items-center justify-between">
            <img src={Eclipse} className="w-16 pt-6" alt="" />
            <img src={Bluestar} alt="" />
          </div>
          <div className="flex items-center flex-col justify-center">
            <img src={Goldstar} alt="" />
          </div>
          <div className="text-center flex flex-col item-center justify-center">
            <div className="text-white ">
              <h1 className="text-[40px] font-bold">Priority Access</h1>
              <div className="flex flex-col mb-6 items-center">
                <img src={Line} alt="" />
              </div>
            </div>
            <div className="text-white max-w-[494px] m-auto">
              <p>
                Get ready to revolutionize the way you interact with your
                customers and drive sales with Loyalbaze. Skip the waitlist and
                get exclusive priority access to LoyalBaze. Limited slots
                available. Please tell us a bit about your business and needs
                and of our consultants will be in touch Immediately!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end mt-16">
            <img src={Goldstar} alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="container  pr-16 flex flex-col items-end py-2">
            <img src={Bluestar} alt="" />
          </div>
          <form className="w-[80%] m-auto px-5 py-4 space-y-4 bg-[#1D2939] rounded-xl shadow-xl">
            <h2 className="text-white text-[20px] py-2">
              Book a Consultation with us
            </h2>
            <input
              type="text"
              placeholder="Enter your Full name "
              className="block bg-[#1D2939] border border-gray-300 w-full py-2 pl-4 rounded shadow-xl"
            />
            <input
              type="text"
              placeholder="Enter your Work email"
              className="block bg-[#1D2939] border border-gray-300 w-full py-2 pl-4 rounded shadow-xl"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="block bg-[#1D2939] border border-gray-300 w-full py-2 pl-4 rounded shadow-xl"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="block bg-[#1D2939] border  border-gray-300 w-full py-2 pl-4 rounded shadow-xl"
            />
            <select
              name="Select Country"
              placeholder=""
              id=""
              className="bg-[#1D2939] border text-gray-400 outline-none border-gray-300 w-full py-2 pl-4 rounded shadow-xl"
            >
              <option value="Select Country" placeholder="Select ">
                Select Option
              </option>
            </select>
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Drop a Message"
              className="bg-[#1D2939] border border-gray-300 w-full py-2 pl-4 rounded-lg shadow-xl"
            ></textarea>
            <Link to="/sucess">
              <div className="flex flex-col items-center ">
                <button className="rounded-full w-[200px] my-4 py-1 text-white bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] font-bold ">
                  Send Request
                </button>
              </div>
            </Link>
          </form>
          <div className="flex flex-col items-end">
            <img src={Goldstar} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Index;
