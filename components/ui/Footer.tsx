import { FaLocationArrow, FaFilePdf } from "react-icons/fa6"; // added PDF icon
import { socialMedia } from "@/data";
import MagicButton from "../MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mt-4">
          {/* Contact Button */}
          <a href="mailto:harshbisht180@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Resume Button */}
          <a
            href="/Harsh_Bisht_Resume.pdf" // put your resume file inside /public folder
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="View Resume"
              icon={<FaFilePdf />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Harsh Bisht
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
