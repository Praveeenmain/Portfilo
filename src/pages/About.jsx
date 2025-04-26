
import { Link } from 'react-router-dom';
import { 
  Code, 
  BrainCircuit, 
  BookOpen, 
  Award, 
  Calendar,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Twitter
} from 'lucide-react';
import TimelineItem from '../components/TimelineItem';
import SkillsList from '../components/SkillsList';
import { skillsData } from '../data/skillsData';

const About = () => {
  const skills = skillsData.map(skill => ({
    ...skill,
    icon: <Code className={`h-5 w-5 ${skill.bgColor.split(' ')[1]}`} />
  }));
  
  const categories = ['All', 'Frontend', 'Backend', 'AI', 'Database', 'Tools'];
  
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
          
          <div className="space-y-4 text-gray-600">
            <p>
              I'm Praveen Kumar Kasiralla, a dynamic Full Stack Developer with experience at Mobishaala, 
              specializing in machine learning and API integration. I have a proven track record of enhancing 
              educational platforms through innovative solutions and responsive design.
            </p>
            <p>
              My passion lies at the intersection of web development and machine learning, creating applications 
              that leverage AI to solve real-world problems. I'm adept at managing time effectively while 
              delivering high-quality projects that meet user needs.
            </p>
            <p>
              Recently, I completed 9 projects in just 16 days, showcasing my dedication, quick learning abilities, 
              and passion for building useful applications. I'm skilled in both front-end technologies and database 
              management, allowing me to create comprehensive solutions from concept to deployment.
            </p>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href="https://github.com/praveenkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={18} className="mr-2" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/praveenkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
            <a 
              href="https://youtube.com/@praveenkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Youtube size={18} className="mr-2" />
              YouTube
            </a>
            <a 
              href="https://instagram.com/praveenkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Instagram size={18} className="mr-2" />
              Instagram
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 h-full">
            <img 
              src="/lovable-uploads/4d95e0de-e385-4537-bd3a-57ae923566b8.png"
              alt="Praveen Kumar" 
              className="w-full h-64 object-cover"
            />
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Praveen Kumar Kasiralla</h2>
              <p className="text-gray-600 font-medium text-sm mb-4">Full Stack Developer & ML Engineer</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="font-bold mr-2">Location:</span>
                  <span>Tirupati, India</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-bold mr-2">Email:</span>
                  <a href="mailto:Praveenpandu3039@gmail.com" className="text-blue-600 hover:underline">
                    Praveenpandu3039@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-bold mr-2">Phone:</span>
                  <span>9390576312</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link 
                  to="/contact"
                  className="block w-full py-2 px-4 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Skills</h2>
        <SkillsList skills={skills} />
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
        
        <div className="relative pl-8">
          <TimelineItem 
            year="Expected in 2025"
            title="Bachelor of Science in Computer Science"
            subtitle="Sathyabama University, Chennai"
            description="Pursuing my degree with focus on computer science fundamentals, algorithms, and software development."
          />
          
          <TimelineItem 
            year="2021"
            title="Intermediate"
            subtitle="Narayana Inter College, Tirupati"
            description="Completed intermediate education with focus on mathematics and computer science."
          />
          
          <TimelineItem 
            year="2019"
            title="Board of Secondary Education"
            subtitle="RedcherriesSchool, Tirupati"
            description="Completed secondary education with distinction."
          />
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
        
        <div className="relative pl-8">
          <TimelineItem 
            year="06/2024 - 09/2024"
            title="Full Stack Developer"
            subtitle="Mobishaala"
            description="Worked on AI projects to transform education by making book-based learning more personalized and effective. Contributed to the mission of helping a billion students learn better by tailoring educational experiences to individual needs."
          />
        </div>
      </section>
      
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h2>
        
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-yellow-50">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">9 Projects in 16 Days</h3>
              <p className="text-gray-600">
                Successfully completed 9 full-stack and ML projects in just 16 days, demonstrating exceptional
                time management and rapid development skills.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-blue-50">
              <BrainCircuit className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">Machine Learning Expertise</h3>
              <p className="text-gray-600">
                Developed multiple ML models for practical applications, showcasing my ability to implement
                AI solutions for real-world problems.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-purple-50">
              <Code className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">Full-Stack Mastery</h3>
              <p className="text-gray-600">
                Built complex, responsive applications using modern tech stacks that integrate frontend, 
                backend, and database technologies seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
