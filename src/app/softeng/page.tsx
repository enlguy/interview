"use client";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mzbnbjvz");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black text-lg">
        How would you describe the role of a Web Developer? What are the most
        important aspects of the job and why?
        <Textarea className="mt-4" placeholder="Enter your response here..." />
        <div className="text-black text-lg mt-10">
          Describe a goal you recently set and how you achieved it.
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
          How would project managers and fellow web developers you&aposve worked
          with describe you?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message2"
            name="message2"
          />
          <ValidationError
            prefix="Message2"
            field="message2"
            errors={state.errors}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        {/* <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
  */}
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <Textarea
          name="email"
          id="email"
          required
          className="text-black text-lg mt-10"
          placeholder="jacob@google.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
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
