import React from "react"; 
import { contactConfig } from "@/app/contact/content_option"

export default function ContactUs() {
  return (
    <div className="container  ">
      <div className="flex flex-wrap mb-8 mt-12">
        <div className="w-full lg:w-8/12">
          <h1 className="text-4xl font-brimestone">Contact Me</h1>
          <hr className="border-t-2 bg-black my-8 ml-0 text-left" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-5/12 mb-4">
          <h3 className="text-2xl py-4 font-brimestone">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="text-blue-500">
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </div>
        <div className="w-full lg:w-7/12 mt-4 flex items-center  ">
          <form className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 form-group mb-2 ">
                <input
                  className="form-control px-2 h-8 border-2 border-black"
                  id="name"
                  name="name"
                  placeholder="Name" 
                  type="text"
                  required 
                  
                />
              </div>
              <div className="w-full lg:w-6/12 form-group px-2">
                <input
                  className="form-control rounded-none border-2 px-2 h-8 border-black"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email" 
                  required 
                />
              </div>
            </div>
            <textarea
              className="form-control px-2 rounded-none border-2 border-black"
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              required
            ></textarea>
            <br />
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 form-group">
                <button className="btn bg-black w-20  text-white" type="submit"> 
                Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}