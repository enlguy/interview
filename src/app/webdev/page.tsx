"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="subject" className="text-black text-lg">
                How would you describe the role of a Web Developer? What are the
                most important aspects of the job and why?
              </label>
              <Textarea
                name="subject"
                id="subject"
                required
                className="text-black text-lg mt-10"
                placeholder="Enter your response here"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-black text-lg">
                Please enter your email to receive your feedback
              </label>
              <Textarea
                name="email"
                id="email"
                required
                className="text-black text-lg mt-10"
                placeholder="jacob@google.com"
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              className="bg-blue-300 flex float-right mx-5 my-2"
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
