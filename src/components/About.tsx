import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expertise in both frontend and backend technologies",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaboration and communication skills",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Aspiring Web Application Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a 2025 ECE graduate with a strong passion for designing, building, 
                and optimizing web-based solutions. My journey in software development 
                has equipped me with comprehensive skills in modern web technologies, 
                from creating responsive frontends to building robust backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm eager to begin my career in a collaborative environment where I can 
                contribute to creating impactful web applications, while continuously 
                learning and growing with evolving technologies. Beyond coding, I'm a 
                gold medalist in Taekwondo and actively train students across multiple schools.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card-glass rounded-xl p-6 hover:bg-card/60 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
