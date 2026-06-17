import { FaCode, FaGraduationCap, FaCertificate, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6">
          About Me
        </h2>

        <p className="text-gray-400 text-center max-w-4xl mx-auto mb-16">
          My name is Ezra Tirivayi, a second-year Computer Science student at
          the University of Zimbabwe. I am passionate about software
          development, IoT systems, cybersecurity, artificial intelligence,
          networking, and emerging technologies. My goal is to transform ideas
          into impactful solutions that contribute to the future of technology.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <FaGraduationCap className="text-cyan-400 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Education</h3>
            <p className="text-gray-400">
              BSc Honours in Computer Science
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <FaCode className="text-cyan-400 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Programming</h3>
            <p className="text-gray-400">
              Python, Java, JavaScript, HTML, CSS
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <FaCertificate className="text-cyan-400 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Certification</h3>
            <p className="text-gray-400">
              Harvard CS50 Certified
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20">
            <FaLaptopCode className="text-cyan-400 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Projects</h3>
            <p className="text-gray-400">
              Web Apps, IoT Systems & Automation
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;