"use client";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyyrzddl");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black text-lg">
        Explain a situation where a patient or family member was unhappy with
        your care. How was the situation handled?
        <Textarea className="mt-4" placeholder="Enter your response here..." />
        <div className="text-black text-lg mt-10">
          Share a time you disagreed with a decision made by a provider. How did
          you respond, and what was the result?
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
          How do you manage stress in the workplace?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message2"
            name="message2"
          />
        </div>
        <div className="text-black text-lg mt-10">
          Describe a situation when you had to work with a difficult coworker.
          What was the problem, and how did you resolve it?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message3"
            name="message3"
          />
        </div>
        <div className="text-black text-lg mt-10">
          What do you do when you don’t know an answer to a patient’s question
          or how to address a situation?
          <Textarea
            className="mt-4"
            placeholder="Enter your response here..."
            id="message4"
            name="message4"
          />
        </div>
        <div className="text-black text-lg mt-10">
          Describe a circumstance where you were asked to disclose personal,
          private information by a patient&aposs loved one. How did you respond?
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
