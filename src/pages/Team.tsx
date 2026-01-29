import { motion } from "framer-motion";
import { Linkedin, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const teamMembers = [
  {
    name: "Renaldi B. Widakdo",
    role: "Senior Developer & Direktur Utama",
    bio: "Tech lead dan software architect dengan pengalaman membangun sistem enterprise, fintech, healthcare, dan solusi mission-critical.",
    highlight: true,
    social: {
      linkedin: "#",
      email: "renaldi@mytech.co.id",
    },
  },
  {
    name: "Jonathan Hartono",
    role: "Chief Technology Officer",
    bio: "Bertanggung jawab atas strategi teknologi, system architecture, dan engineering excellence.",
    social: {
      linkedin: "#",
      email: "jonathan@mytech.co.id",
    },
  },
  {
    name: "Daniel Prasetyo",
    role: "Chief Operations Officer",
    bio: "Mengelola operasional perusahaan dan memastikan delivery proyek berjalan optimal dan efisien.",
    social: {
      linkedin: "#",
      email: "daniel@mytech.co.id",
    },
  },
  {
    name: "Samuel Kristanto",
    role: "Head of Software Engineering",
    bio: "Memimpin tim developer dan memastikan kualitas, scalability, serta best practices dalam software development.",
    social: {
      linkedin: "#",
      email: "samuel@mytech.co.id",
    },
  },
  {
    name: "Christopher Adrian",
    role: "Head of Product & UX",
    bio: "Mengelola product strategy, UX research, dan desain pengalaman pengguna kelas enterprise.",
    social: {
      linkedin: "#",
      email: "christopher@mytech.co.id",
    },
  },
  {
    name: "Matthew Santoso",
    role: "Cloud & DevOps Lead",
    bio: "Spesialis cloud infrastructure, DevOps automation, high-availability systems, dan security best practices.",
    social: {
      linkedin: "#",
      email: "matthew@mytech.co.id",
    },
  },
];

const Team = () => {
  return (
    <Layout>
      <PageTransition>

        {/* HERO */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
              >
                Tim MYTECH
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
              >
                Tim Profesional di Balik MYTECH Indonesia
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Tim MYTECH terdiri dari software engineers, system architects, 
                cloud specialists, dan product leaders yang berpengalaman membangun 
                solusi digital untuk perusahaan enterprise dan startup teknologi.
              </motion.p>

            </div>
          </div>
        </section>

        {/* TEAM GRID */}
        <section className="py-20">
          <div className="container mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all border 
                    ${member.highlight ? "border-accent ring-1 ring-accent/20" : "border-border"}
                  `}
                >

                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <User className="w-10 h-10 text-accent" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-accent font-medium text-sm mb-3">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-5">
                    {member.bio}
                  </p>

                  {/* Social */}
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>

                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* JOIN CTA */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Bergabung dengan Tim MYTECH
              </h2>

              <p className="text-muted-foreground mb-8">
                Kami membuka peluang bagi talenta berbakat di bidang software engineering, 
                cloud infrastructure, AI, product development, dan enterprise systems.
              </p>

              <Button asChild size="lg">
                <Link to="/contact">Lihat Kesempatan Karier</Link>
              </Button>
            </motion.div>

          </div>
        </section>

      </PageTransition>
    </Layout>
  );
};

export default Team;
