import { Footer } from "flowbite-react";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram,FaGithub,FaLinkedin,FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDiscord,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 sm:mt-3">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white mb-10"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Siddhesh's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-8">
            {/* <div>
              <Footer.Title title="About" style={{ fontSize: "20px" }} />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.iNotebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "18px", fontWeight: 350 }}
                >
                  iNoteBook
                </Footer.Link>
                <Footer.Link
                  href="https://www.ray-of-hope.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "18px", fontWeight: 350 }}
                >
                  Ray-Of-Hope
                </Footer.Link>
              </Footer.LinkGroup>
            </div> */}

            {/* Follow us */}
            <div>
              <Footer.Title title="Follow Us" style={{ fontSize: "18px" }} />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/kavya__maifil?utm_source=qr&igsh=MTZ0c2toa2htaTJ4MA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "16px", fontWeight: 350 }}
                >
                  Instagram(@Kavya_Maifil)
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/siddhesh_2406?utm_source=qr&igsh=MXU0YjRqN2Y5dzljMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "16px", fontWeight: 350 }}
                >
                  Instagram(@Siddhesh More)
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* Legal */}
            <div>
              <Footer.Title title="Legal" style={{ fontSize: "18px" }} />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  style={{ fontSize: "16px", fontWeight: 350 }}
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  style={{ fontSize: "16px", fontWeight: 350 }}
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:item-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Siddhesh's Blog"
            year={new Date().getFullYear()}
            className="text-xl"
          />
          <div
            className="flex gap-6 sm:mt-0 mt-4 sm:justify-center"
            style={{ fontSize: "40px" }}
          >
            <div className='flex justify-center items-center gap-4'>
              <a href='https://www.instagram.com/kavya__maifil?utm_source=qr&igsh=MTZ0c2toa2htaTJ4MA==' className='text-red-500 hover:text-red-700'>
                <FaInstagram size={40} />
              </a>
              <a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADElDgsBOkUxT49dazt4I6qwFTVoAu4b0zk&keywords=siddhesh%20more&origin=RICH_QUERY_SUGGESTION&position=0&searchId=0f571b1d-fdc6-48ca-ac82-53e8943ab976&sid=ba%2C&spellCorrectionEnabled=false' className='text-blue-500 hover:text-blue-700'>
                <FaLinkedin size={40} />
              </a>
              <a href='#' className='text-green-500 hover:text-green-700'>
                <FaWhatsapp size={40} />
              </a>
              <a href='https://www.instagram.com/siddhesh_2406?utm_source=qr&igsh=MXU0YjRqN2Y5dzljMg==' className='text-orenge-500 hover:text-red-700'>
                <FaInstagram size={40} />
              </a>
              <a href='#' className='text-black-500 hover:text-black-700'>
                <FaGithub size={40} />
              </a>
              <a href='#' className='text-blue-400 hover:text-blue-600'>
                <FaTwitter size={40} />
              </a>
              <a href='#' className='text-blue-500 hover:text-blue-700'>
                <FaFacebook size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
