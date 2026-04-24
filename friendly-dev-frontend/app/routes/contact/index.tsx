import type { Route } from "./+types";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email format";
  }
  if (!subject) errors.subject = "Subject is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) return { errors };

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form submitted succesfully", data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 rounded bg-orange-200">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Me
      </h2>
      {actionData?.message ? (
        <p className="mb-6 p-4 bg-green-700 text-green-200 text-center rounded-lg border border-green-500 shadow">
          {actionData.message}
        </p>
      ) : null}
      <Form method="post" className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm-font-medium text-orange-800">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-orange-700 rounded-lg bg-orange-200 text-orange-900"
          />
          {errors.name && (
            <p className="text-red-400 tetx-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm-font-medium text-orange-800">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-orange-700 rounded-lg bg-orange-200 text-orange-900"
          />
          {errors.email && (
            <p className="text-red-400 tetx-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm-font-medium text-orange-800">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-orange-700 rounded-lg bg-orange-200 text-orange-900"
          />
          {errors.subject && (
            <p className="text-red-400 tetx-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm-font-medium text-orange-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-orange-700 rounded-lg bg-orange-200 text-orange-900"
          />
          {errors.message && (
            <p className="text-red-400 tetx-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button className="w-full cursor-pointer bg-orange-400 hover:bg-orange-700 text-white py-2 rounded-lg bgorange-800">
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;
