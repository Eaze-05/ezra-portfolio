import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Let's Collaborate
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Interested in collaborating, discussing ideas,
          internships, freelance opportunities, or technology projects?
          Let's connect.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-gray-900 border border-cyan-500/20 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <span>
                  tirivayiezra@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-cyan-400 text-xl" />
                <a
                  href="https://wa.me/263782922567"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Me
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-xl" />
                <a
                  href="https://github.com/itseaze"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-xl" />
                <a
                  href="https://www.linkedin.com/in/ezra-tirivayi-ab4421373"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-gray-900 border border-cyan-500/20 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Send a Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-black border border-gray-700"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-black border border-gray-700"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;