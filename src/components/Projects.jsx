function Projects() {

  const projects = [
    {
      title: "Smart Inventory Management System",
      description:
        "A web-based inventory management platform that helps businesses manage products, stock levels, and operations efficiently.",
      tech: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/itseaze",
    },

    {
      title: "IoT Temperature Monitoring System",
      description:
        "An Arduino-based monitoring system that tracks temperature in real time and displays results using LEDs and LCD screens.",
      tech: ["Arduino", "Sensors", "Embedded Systems"],
      github: "https://github.com/itseaze",
    },

    {
      title: "IoT Smart Security System",
      description:
        "A smart monitoring solution using sensors and automation to improve environmental and property security.",
      tech: ["Arduino", "IoT", "Sensors"],
      github: "https://github.com/itseaze",
    },

    {
      title: "Disaster Hazard Monitoring System",
      description:
        "An intelligent hazard detection concept designed to monitor environmental conditions and provide early warnings.",
      tech: ["IoT", "Monitoring", "Embedded Systems"],
      github: "https://github.com/itseaze",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Projects demonstrating my skills in software development,
          IoT systems, automation, and emerging technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-gray-900
                border
                border-cyan-500/20
                rounded-2xl
                p-8
                hover:border-cyan-400
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="
                      bg-cyan-500/10
                      text-cyan-400
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-5
                  py-2
                  rounded-lg
                  font-semibold
                "
              >
                View Repository
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;