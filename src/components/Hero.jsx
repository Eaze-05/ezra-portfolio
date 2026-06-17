import profilePic from "../assets/images/ezra-profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>

          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ezra Tirivayi
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Computer Science Student | Software Developer | IoT Enthusiast
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Passionate about software development, IoT systems,
            artificial intelligence, cybersecurity, and emerging
            technologies. Building innovative solutions that help
            shape the future through code, creativity, and collaboration.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Let's Collaborate
            </a>

            <a
              href="#projects"
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500/10"
            >
              View Projects
            </a>
            <a
              href="/TIRIVAYI EZRA Resume.pdf"
               download
              className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500/10"
            >
               Download CV
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={profilePic}
              alt="Ezra Tirivayi"
              className="
                relative
                w-72
                h-72
                md:w-96
                md:h-96
                object-cover
                rounded-full
                border-4
                border-cyan-500
                shadow-2xl
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;