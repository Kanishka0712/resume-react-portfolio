import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.E. Electronics and Communication Engineering",
      institution: "KGISL Institute of Technology",
      period: "Jun 2021 - May 2025",
      grade: "8 CGPA",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Dawn Matric Higher Secondary School",
      period: "Jun 2020 - Apr 2021",
      grade: "94.33%",
      icon: Award,
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Sri Vijay Vidyalaya Matric Higher Secondary School",
      period: "Jun 2018 - Apr 2019",
      grade: "94.8%",
      icon: Award,
    },
  ];

  const certifications = [
    "JAVA Fullstack - KodNest Software Training Center",
    "Industrial IoT on Google Cloud Platform - Coursera",
  ];

  const achievements = [
    "Gold medalist in Taekwondo, Anna University - 2022",
    "Conducting Taekwondo training sessions across 12+ schools in and around Dharmapuri",
    "Served as a Java Trainer at Hashcode Technologies, conducting sessions for over 50 students",
  ];

  return (
    <section id="education" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="card-glass rounded-xl p-6 hover:bg-card/60 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                    <edu.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-primary font-medium">{edu.grade}</span>
                    </div>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="card-glass rounded-xl p-6 hover:bg-card/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-foreground">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">Achievements</h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                className="card-glass rounded-xl p-6 hover:bg-card/60 transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
