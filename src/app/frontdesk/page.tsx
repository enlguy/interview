"use client";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xleqdwwo");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black text-lg">
        How do you prioritze tasks?
        <Textarea className="mt-4" placeholder="Enter your response here..." />
        <div className="text-black text-lg mt-10">
          How do you respond to an angry guest?
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
          Tell me about a time when you went above and beyond for a customer.
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message2"
            name="message2"
          />
        </div>
        <div className="text-black text-lg mt-10">
          Tell me about a time you, personally, received bad customer service,
          and what was bad about it.
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message3"
            name="message3"
          />
        </div>
        <div className="text-black text-lg mt-10">
          What do you do if you don&apost know the answer to a guest question?S
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message4"
            name="message4"
          />
        </div>
        <div className="text-black text-lg mt-10">
          What are some ways we can retain guests, to get them coming back?
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
