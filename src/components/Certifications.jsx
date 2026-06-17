function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Certifications
        </h2>

        <div className="bg-gray-900 border border-cyan-500/20 rounded-2xl p-8 text-center">

          <h3 className="text-2xl font-bold mb-4">
            Harvard CS50
          </h3>

          <p className="text-gray-400 mb-8">
            CS50: Introduction to Computer Science
          </p>

          <a
            href="https://cs50.harvard.edu/certificates/0f6e8991-c7c2-46d5-a80b-fd7756f84b98"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
          >
            View Certificate
          </a>

        </div>

      </div>
    </section>
  );
}

export default Certifications;