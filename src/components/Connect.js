import gitHubIcon from "../assets/icons/github-icon.svg";
import linkedinIcon from "../assets/icons/linkedin-icon.svg";
import {
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
  YOUR_PUBLIC_KEY,
} from "../utils/constants";

import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Connect = () => {
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          if (result.text === "OK") {
            setEmailSubmitted(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    sendEmail(e);
  };

  return (
    <section id="contact">
      <div className="flex md:flex-row flex-col w-full py-8 px-4 sm:p-0 md:px-0  md:my-10 ">
        <div className="lg:w-6/12 md:4/12 w-full ">
          <h5 className="text-xl  font-bold text-gray-200 my-2">
            Let's Connect
          </h5>
          <p className="text-[#adb7be] md:text-lg mb-4 max-w-md md:pe-7 xl:pe-0">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="Socials flex flex-row gap-2 mb-5">
            <Link to="https://www.github.com">
              <img src={gitHubIcon} alt="github icon" />
            </Link>
            <Link to="https://www.linkedin.com">
              <img src={linkedinIcon} alt="github icon" />
            </Link>
          </div>
        </div>
        <div className="lg:w-6/12 md:8/12 w-full  ">
          <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-200 block mb-2 text-base font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-gray-200 block text-base mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-200 block text-base mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="bg-purple-500 hover:bg-purple-600 text-gray-200 font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer"
            />
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email Sent Successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
