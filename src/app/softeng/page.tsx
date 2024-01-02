import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="text-black text-lg">
        How would you describe the role of a Web Developer? What are the most
        important aspects of the job and why?
        <Textarea className="mt-4" placeholder="Enter your response here..." />
        <div className="text-black text-lg mt-10">
          Describe a goal you recently set and how you achieved it.
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
          />
        </div>
        <div className="text-black text-lg mt-10">
          How would project managers and fellow web developers you've worked
          with describe you?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
          />
        </div>
        <Button
          className="bg-blue-300 flex float-right mx-5 my-2"
          variant="outline"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default page;
