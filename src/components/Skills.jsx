function Skills() {

  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Flask",
    "Laravel",
    "MySQL",
    "Firebase",
    "Git",
    "GitHub",
    "Arduino"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 p-6 rounded-xl border border-cyan-500/20 text-center hover:border-cyan-400 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;