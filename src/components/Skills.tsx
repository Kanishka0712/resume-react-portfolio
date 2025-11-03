import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue", "Bootstrap", "Tailwind CSS", "Shadcn UI"],
      color: "from-primary to-secondary",
    },
    {
      category: "Backend Development",
      skills: ["Java (Spring Boot)", "Node.js", "Express"],
      color: "from-secondary to-accent",
    },
    {
      category: "Database",
      skills: ["SQL", "RDBMS", "MongoDB"],
      color: "from-accent to-primary",
    },
    {
      category: "Computer Science Fundamentals",
      skills: ["Data Structures & Algorithms", "OOP"],
      color: "from-primary/80 to-secondary/80",
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "AWS"],
      color: "from-secondary/80 to-accent/80",
    },
    {
      category: "Professional Skills",
      skills: ["Communication", "Teaching", "Team Collaboration", "Problem-Solving", "Quick Learner", "Adaptable"],
      color: "from-accent/80 to-primary/80",
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="card-glass rounded-xl p-6 hover:bg-card/60 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-muted/50 text-foreground text-sm border border-border/50 hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
