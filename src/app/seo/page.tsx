"use client";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("moqgvnnz");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black text-lg">
        What are the most important Google ranking factors?
        <Textarea className="mt-4" placeholder="Enter your response here..." />
        <div className="text-black text-lg mt-10">
          How would you analyze your competitors&apos backlinks?
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
          Why are link audits important?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message2"
            name="message2"
          />
        </div>
        <div className="text-black text-lg mt-10">
          What are some of the more recent Google algorithm changes and what are
          the implications?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message3"
            name="message3"
          />
        </div>
        <div className="text-black text-lg mt-10">
          How would you manage a link audit?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message4"
            name="message4"
          />
        </div>
        <div className="text-black text-lg mt-10">
          What are some link building strategies?
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
