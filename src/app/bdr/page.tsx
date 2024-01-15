"use client";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkndnlar");

  const Header = () => {
    const router = useRouter();

    if (state.succeeded) {
      return <p>Thanks for your submission!</p>;
    }

    return (
      <form onSubmit={handleSubmit}>
        <header className="mr-5">
          {router.pathname !== "/" && (
            <button onClick={() => router.back()}>Back</button>
          )}
        </header>
        <div className="text-black text-lg">
          How do you improve your sales skills?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
          />
          <div className="text-black text-lg mt-10">
            Describe your best achievement in B2B sales.
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
            What drives you to succeed in sales?
            <Textarea
              className="mt-4"
              placeholder="Enter your response here..."
              id="message2"
              name="message2"
            />
          </div>
          <div className="text-black text-lg mt-10">
            Is learning important in B2B sales? Why?
            <Textarea
              className="mt-4"
              placeholder="Enter your response here..."
              id="message3"
              name="message3"
            />
          </div>
          <div className="text-black text-lg mt-10">
            How would you persuade someone to complete a project using your
            strategies?
            <Textarea
              className="mt-4"
              placeholder="Enter your response here..."
              id="message4"
              name="message4"
            />
          </div>
          <div className="text-black text-lg mt-10">
            Please offer any feedback you have for the site
            <Textarea
              className="mt-4"
              placeholder="Feedback..."
              id="message5"
              name="message5"
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
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
  };
}
