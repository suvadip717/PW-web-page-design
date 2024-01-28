import "./App.css";
import { FaStar } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { CiCreditCard2 } from "react-icons/ci";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbAffiliate } from "react-icons/tb";
import { MdOutlineBadge } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF,FaInstagram,FaTelegramPlane,FaYoutube,FaTwitter,FaLinkedin,FaDiscord } from "react-icons/fa";


function App() {
  return (
    <>
      {/* <div>
        <div className="bg-slate-800 grid place-content-center h-screen">
          <div className="mt-3 mx-auto">
            <h1 className="font-bold text-white text-3xl">Test Program</h1>
            <div>
              <div className="p-2 m-2 bg-white rounded-lg items-center shadow-lg shadow-green-400/55 space-x-2 max-w-sm mx-auto">
                <div className="">
                  <img
                    className="w-12 h-12 mx-auto rounded-lg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/600px-Physics_wallah_logo.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="font-bold text-black text-xl">
                  Tailwind CSS
                  <p className="text-slate-500 text-base">Hitesh Choudhury</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 mx-auto place-content-center">
            <h1 className="text-3xl text-white font-bold ">Test Tailwind</h1>
            <div>
              <div className="p-6 m-2 bg-white rounded-xl shadow-lg shadow-cyan-500/50 flex max-w-sm mx-auto items-center space-x-2">
                <div>
                  <img
                    className="h-20 w-20"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/600px-Physics_wallah_logo.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="font-bold text-xl text-black">
                  Tailwind CSS
                  <p className="text-slate-500 text-base">Hitesh Choudhury</p>
                </div>
              </div>
            </div>
            <button className="bg-sky-500 p-2 mt-2 w-24 rounded-xl text-base items-center text-white hover:text-black hover:bg-white dark:bg-green-400">
              Buy Now
            </button>
          </div>

          <div className="bg-white rounded-lg overflow-hidden m-4 shadow-md shadow-green-300/90 max-h-min max-w-5xl mx-auto ">
            <div className="md:flex">
              <div>
                <img
                  className="h-60 w-full object-cover md:h-full md:w-70"
                  src="https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="p-10">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Nature is so Beautiful
                </div>
                <a
                  href="#"
                  className="block mt-1 text-black hover:text-blue-700 text-lg font-medium"
                >
                  Tailwid CSS is amazing once you understand the power of it
                </a>
                <p className="mt-2 text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  harum libero omnis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="grid place-content-center h-screen">
        <label class="relative inline-flex items-center cursor-pointer m-2">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            Toggle Theme
          </span>
        </label>

        <div className="bg-slate-800 rounded-lg p-6 w-[452px]">
          <div className="">
            <img
              className="h-80 w-90"
              src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
          </div>
          <div className="mt-8 db-5">
            <div className=" text-white text-xl font-bold tracking-tight">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </div>
          </div>
          <div className="mt-2 flex ">
            <FaStar color="yellow" className="m-1" />
            <FaStar color="yellow" className="m-1" />
            <FaStar color="yellow" className="m-1" />
            <FaStar color="yellow" className="m-1" />
            <FaStar color="grey" className="m-1" />
            <div className="bg-cyan-100 rounded-lg ml-3 pl-2 pr-2 text-indigo-900 text-sm font-bold">
              4.0
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="font-bold text-white text-3xl">$599</div>
            <button className="text-white bg-cyan-600 p-2 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div> */}

      <div className="h-screen flex-col">
        {/* Navbar Start */}
        <div className="w-full bg-slate-300 flex justify-between p-2 items-center">
          <div className="m-1">
            <img
              className="h-12 w-12 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="md:flex hidden font-semibold">
            <div className="p-4 cursor-pointer mx-2">Home</div>
            <div className="p-4 cursor-pointer mx-2">About Us</div>
            <div className="p-4 cursor-pointer mx-2">Contact Us</div>
            <div className="p-4 cursor-pointer mx-2">Help</div>
          </div>
          <div className="hidden md:block p-3 rounded-lg text-white font-semibold bg-blue-500 cursor-pointer">
            SignIn/SignUp
          </div>
          <div className="md:hidden">
            <a className="text-3xl" href="#">
              &#8801;
            </a>
          </div>
        </div>
        {/* Navbar End */}
        {/* Hero Section start */}
        <div>
          <div className="w-full h-auto">
            <img
              className="hidden md:block w-full opacity-85"
              src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
              alt=""
              srcset=""
            />
            <img
              className="w-full md:hidden opacity-85"
              src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        {/* Hero Section end */}

        {/* Student Section start */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-10">
          <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
            <p className="text-indigo-800 font-bold text-3xl text-center md:text-4xl">
              "Pure Hardwork, NO Shortcuts!"
            </p>
            <div className="h-1 md:w-1/5 w-36 border-b-4 border-yellow-500 rounded-2xl mt-3 md:mt-4 mb-12"></div>
          </div>
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-46 flex flex-col items-center mb-12">
              <LiaBookSolid className="h-44 w-44 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-3xl font-semibold">600+</p>
              <p className="text-2xl font-semibold text-gray-500">
                Different Courses
              </p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
              <PiStudent className="h-44 w-44 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-3xl font-semibold">700,000+</p>
              <p className="text-2xl font-semibold text-gray-500">
                Student Enrolled
              </p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
              <CiCreditCard2 className="h-44 w-44 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-3xl font-semibold">10,000+</p>
              <p className="text-2xl font-semibold text-gray-500">
                Successful Transition
              </p>
            </div>
          </div>
        </div>
        {/* Student Section end */}
        {/* Product Section Start */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-10">
          <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
            <p className="text-indigo-800 font-bold text-3xl text-center md:text-4xl">
              Our Products
            </p>
            <div className="h-1 md:w-1/7 w-36 border-b-4 border-yellow-500 rounded-2xl mt-3 md:mt-4 mb-12"></div>
          </div>
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-44 flex flex-col items-center mb-12">
              <MdOutlineSettingsApplications className="h-32 w-32 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-2xl font-semibold">PW Skills Lab</p>
              <p className="text-sm font-semibold text-gray-500 flex flex-wrap">
                Supercharge your project development with our robust lab
              </p>
            </div>
            <div className="w-44 flex flex-col items-center mb-12">
              <ImFileText2 className="h-32 w-32 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-2xl font-semibold">Job Portal</p>
              <p className="text-sm font-semibold text-gray-500 flex flex-wrap">
                Use exceptional templates for a stand-out resume minus the sign
                up process
              </p>
            </div>
            <div className="w-44 flex flex-col items-center mb-12">
              <IoBagRemoveOutline className="h-32 w-32 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-2xl font-semibold">Experience Portal</p>
              <p className="text-sm font-semibold text-gray-500 flex flex-wrap">
                PW Skills's self-paced experience portal prioritises hand-on
                training with 570+ internship project
              </p>
            </div>
            <div className="w-44 flex flex-col items-center mb-12">
              <TbAffiliate className="h-32 w-32 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-2xl font-semibold">Affiliate</p>
              <p className="text-sm font-semibold text-gray-500 flex flex-wrap">
                Explore affiliate marketing opportunities with PW skills and
                attain financial freedom
              </p>
            </div>
            <div className="w-44 flex flex-col items-center mb-12">
              <MdOutlineBadge className="h-32 w-32 bg-slate-300 rounded-full mx-auto text-blue-800 p-2 m-2" />
              <p className="text-2xl font-semibold">Hall Of Fame</p>
              <p className="text-sm font-semibold text-gray-500 flex flex-wrap">
                Our student placements and 100k+ career transitions speak
                volumes about our courses
              </p>
            </div>
          </div>
        </div>
        {/* Product Section End */}

        {/* footer start */}
        <div className="w-full flex flex-wrap flex-col md:flex-row bg-gray-900 pt-8 px-4 text-white ">
          <div className="m-8">
            <img
              className="h-16 w-40 m-4"
              src="https://lab.pwskills.com/images/PWSkills-white.png"
              alt=""
              srcset=""
            />
            <div className="flex">
              <AiOutlineMail className="h-6 w-6 mx-4" />
              <div className="font-bold">Email us :</div>
              <a className="px-1 cursor-pointer">support@pwskills.com</a>
            </div>
            <div className=" flex flex-row mx-4 pt-4 justify-between">
              <FaFacebookF className="h-6 w-6"/>
              <FaInstagram className="h-6 w-6"/>
              <FaTelegramPlane className="h-6 w-6"/>
              <FaYoutube className="h-6 w-6"/>
              <FaTwitter className="h-6 w-6"/>
              <FaLinkedin className="h-6 w-6"/>
              <FaDiscord className="h-6 w-6"/>
            </div>
            <div className="flex flex-col items-center p-4">
              <img className="h-40 w-32" src="https://lab.pwskills.com/images/landingpage/iso-9001-2015.svg" alt="" srcset="" />
              <p className="pt-4">ISO 9001</p>
            </div>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row m-8 mx-32">
            <div className="p-8">
              <p className="text-3xl font-semibold">PW Skills</p>
              <div className="flex flex-col md:flex-row pt-2">
                <div className="pt-2">
                  <p className="mt-6">About us</p>
                  <p className="mt-6">FAQs</p>
                  <p className="mt-6">Privacy policy</p>
                </div>
                <div className="pt-2 ml-28 mr-10">
                  <p className="mt-6">Contact us</p>
                  <p className="mt-6">Job assistance</p>
                  <p className="mt-6">Terms and conditions</p>
                </div> 
              </div>
            </div>
            <div className="w-1 h-5/6 border-r-4 text-center rounded-full border-white"></div>
            <div className="p-6 mx-12">
              <p className="text-3xl font-semibold">Products</p>
              <div className="flex flex-col md:flex-row pt-2">
                <div className="pt-2">
                  <p className="mt-6">PW Skills Lab</p>
                  <p className="mt-6">Experience portal</p>
                  <p className="mt-6">Hall of fame</p>
                </div>
                <div className="pt-2 ml-28 mr-10">
                  <p className="mt-6">Job Portal</p>
                  <p className="mt-6">Become an affiliate</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
        {/* footer end */}
      </div>
    </>
  );
}

export default App;
