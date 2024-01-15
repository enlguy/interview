"use client";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqenbbd");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black text-lg">
        Talk me through the steps you would take when designing an application
        to reduce security risks.
        <Textarea className="mt-4" placeholder="Enter your response here..." />
        <div className="text-black text-lg mt-10">
          Tell me how you would migrate an app across operating systems.
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="text-black text-lg mt-10">
          Give me an example of a time you had to work toward a tight deadline.
          How did you ensure the success of the project?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message2"
            name="message2"
          />
        </div>
        <div className="text-black text-lg mt-10">
          Think about the last time you received negative feedback during a code
          review? How did you react?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message3"
            name="message3"
          />
        </div>
        <div className="text-black text-lg mt-10">
          What would you do if you discovered that a feature you designed had
          made the application run more slowly?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message4"
            name="message4"
          />
        </div>
        <div className="text-black text-lg mt-10">
          What are the main differences between web and mobile applications?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message5"
            name="message5"
          />
        </div>
        <div className="text-black text-lg mt-10">
          Please offer any feedback you have for the site
          <Textarea
            className="mt-4"
            placeholder="Feedback..."
            id="message6"
            name="message6"
          />
        </div>
        <div className="text-black text-lg mt-10">
          Please provide your email to receive your score
          <Textarea
            className="mt-4"
            placeholder="sample@sample.com"
            id="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <Button
          className="bg-blue-300 flex float-right mx-5 my-2"
          variant="outline"
          disabled={state.submitting}
        >
          Submit
        </Button>
      </div>
      <ValidationError errors={state.errors} />
    </form>
  );
}
