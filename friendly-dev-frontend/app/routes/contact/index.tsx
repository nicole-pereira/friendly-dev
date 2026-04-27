import type { Route } from "./+types";

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 rounded bg-orange-200">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Me
      </h2>
      <form action="https://formspree.io/f/mgorbpqa" method='post' className="space-y-6">
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
        </div>
        <button className="w-full cursor-pointer bg-orange-400 hover:bg-orange-700 text-white py-2 rounded-lg bgorange-800">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
