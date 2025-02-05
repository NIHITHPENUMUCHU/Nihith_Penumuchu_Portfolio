import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, FileText, Award, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  const handleViewCV = () => {
    navigate('/resume');
  };

  return (
    <section className="py-20 px-6 bg-gray-800" id="about">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with a strong foundation in web development
              and a keen interest in creating efficient, scalable applications. Currently pursuing
              my B.Tech in Computer Science at SRM-KTR University, I combine academic excellence
              with practical development experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in technology has equipped me with a diverse skill set, ranging from
              front-end technologies like React and Angular to back-end frameworks including
              Node.js and Express. I'm particularly enthusiastic about creating user-centric
              applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://leetcode.com/u/RA2111026010124/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Code className="w-5 h-5 text-emerald-400" />
                LeetCode
              </a>
              <a 
                href="https://www.codechef.com/users/nihith_07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Code2 className="w-5 h-5 text-emerald-400" />
                CodeChef
              </a>
              <a 
                href="https://www.hackerrank.com/nihithpenumuchu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Award className="w-5 h-5 text-emerald-400" />
                HackerRank
              </a>
              <button
                onClick={handleViewCV}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
              >
                <FileText className="w-5 h-5" />
                View CV
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-400/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-300">B.Tech in Computer Science</p>
                <p className="text-gray-400">SRM-KTR University (2021-2025)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-400/10 rounded-lg">
                <Code2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-gray-300">Full Stack Developer</p>
                <p className="text-gray-400">MERN Stack Specialist</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-400/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-300">Freelance Developer</p>
                <p className="text-gray-400">Web & Mobile Applications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}