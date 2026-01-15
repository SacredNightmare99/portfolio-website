import ScrollSection from "../utils/ScrollSection";

const ContactSection = () => {
  return (
    <ScrollSection>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

        <form className="w-full max-w-xl bg-neutral-900 rounded-xl p-6 shadow-lg">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wide mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="
              w-full
              bg-red-600 hover:bg-red-700
              text-white font-semibold
              py-3 rounded
              transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </ScrollSection>
  );
};

export default ContactSection;

