
export const projectsData = [
  {
    id: 1,
    title: "Note Classifier",
    description: "An ML-powered application that automatically categorizes short notes into relevant categories like Work, Health, Reminder, Shopping, and more using text classification techniques.",
    longDescription: "Note Classifier is a full-stack machine learning application that automatically categorizes short notes or reminders into relevant categories like Work, Health, Reminder, Shopping, Idea, etc. It's built with a React frontend, a Node.js backend, and a Python-based ML model. The application uses sophisticated text classification algorithms to analyze the content of notes and assign them appropriate tags, making organization effortless for users. This project showcases my expertise in combining web development with practical machine learning applications.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "ML",
    technologies: ["ReactJS", "Node.js", "Python", "ML"],
    github: "https://github.com/praveenkumar/note-classifier",
    demo: "https://notes-classiferfrontend.vercel.app/",
    video: "https://www.youtube.com/watch?v=example1",
    highlights: [
      "Implemented text preprocessing with NLTK and scikit-learn",
      "Designed a responsive React UI with real-time classification",
      "Achieved 92% classification accuracy on test data"
    ]
  },
  {
    id: 2,
    title: "Resume Analyzer",
    description: "Leverages Google's LLM to analyze uploaded resumes, extract skills, and compare them with job requirements for better matching.",
    longDescription: "The Resume Analyzer is an innovative tool that uses Google's Large Language Model to analyze uploaded resumes, extract important skills, and compare them with specified job roles. Built with Node.js, Python, and ReactJS, this application provides real-time smart skill analysis to help job seekers understand how well their resume matches specific job requirements. The project employs advanced NLP techniques to parse resume content intelligently, considering context and relevance rather than just keyword matching.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    category: "LLM",
    technologies: ["Node.js", "Python", "ReactJS", "Google LLM"],
    github: "https://github.com/praveenkumar/resume-analyzer",
    demo: "https://resume-analyzer.vercel.app/",
    video: "https://www.youtube.com/watch?v=example2",
    highlights: [
      "Integrated Google's LLM API for contextual analysis",
      "Built a drag-and-drop interface for resume uploading",
      "Implemented PDF parsing and text extraction"
    ]
  },
  {
    id: 3,
    title: "Emoji + Text Emotion Detector",
    description: "An application that predicts emotions from both emojis and user text using custom machine learning models.",
    longDescription: "The Emoji + Text Emotion Detector is a versatile application that analyzes and predicts emotions from both emojis and user text. Built using ReactJS for the frontend, Node.js for the backend, and Python for the custom machine learning model, this project demonstrates my ability to work with complex NLP tasks. The application can identify a wide range of emotions including happiness, sadness, anger, surprise, fear, and more, making it useful for sentiment analysis in social media monitoring, customer feedback analysis, or even just for fun.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    category: "ML",
    technologies: ["ReactJS", "Node.js", "Python", "NLP"],
    github: "https://github.com/praveenkumar/emotion-detector",
    demo: "https://emoji-emotion-detector.vercel.app/",
    video: "https://www.youtube.com/watch?v=example3",
    highlights: [
      "Trained custom model on 100,000+ labeled emoji and text samples",
      "Implemented real-time emotion prediction with confidence scores",
      "Supports analysis of mixed emoji and text content"
    ]
  },
  {
    id: 4,
    title: "Color Palette Generator",
    description: "Upload images to extract dominant colors using KMeans clustering algorithm, perfect for designers and artists.",
    longDescription: "The Color Palette Generator is an intelligent tool that allows users to upload any image and extract the top dominant colors using the KMeans clustering algorithm. Built with React for the frontend, Node.js for the backend, and Python for the image processing capabilities, this application is perfect for designers, artists, and anyone working with color schemes. The tool not only identifies the most prominent colors but also creates harmonious palettes based on color theory, which can be directly exported to design tools or saved for future reference.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "Image Processing",
    technologies: ["React", "Node", "Python", "KMeans"],
    github: "https://github.com/praveenkumar/color-palette-generator",
    demo: "https://color-palette-generator.vercel.app/",
    video: "https://www.youtube.com/watch?v=example4",
    highlights: [
      "Implemented KMeans clustering for color extraction",
      "Created copy-to-clipboard functionality for hex codes",
      "Added color palette suggestions based on design principles"
    ]
  },
  {
    id: 5,
    title: "Text Summarizer + Sentiment Analyzer",
    description: "Takes YouTube video links, extracts transcripts, provides concise summaries, and performs sentiment analysis.",
    longDescription: "The Text Summarizer + Sentiment Analyzer is a powerful tool that takes YouTube links as input, extracts the video transcript, generates a concise summary of the content, and performs comprehensive sentiment analysis. Built with React for the frontend, Node.js for the API layer, and Python for the NLP capabilities, this application supports multiple languages, making it accessible to a global audience. This project showcases my ability to integrate multiple APIs and work with complex text processing tasks to deliver useful insights from video content.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    category: "NLP",
    technologies: ["React", "Node", "Python", "NLP"],
    github: "https://github.com/praveenkumar/youtube-summarizer",
    demo: "https://youtube-summarizer.vercel.app/",
    video: "https://www.youtube.com/watch?v=example5",
    highlights: [
      "Integrated YouTube API for transcript extraction",
      "Implemented extractive and abstractive summarization",
      "Added support for 15+ languages with automatic detection"
    ]
  },
  {
    id: 6,
    title: "Typing Pattern Authentication",
    description: "Secure authentication system that identifies users based on their unique keystroke dynamics like typing speed and rhythm.",
    longDescription: "Typing Pattern Authentication is an innovative security system that authenticates users based on their keystroke dynamics, including typing speed, rhythm, and patterns. Built with React for the frontend interface, Node.js for the authentication API, and Python for the behavioral biometric algorithms, this project demonstrates my expertise in security, machine learning, and full-stack development. This system provides an additional layer of security beyond traditional passwords, as typing patterns are unique to individuals and difficult to replicate, even if credentials are compromised.",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80",
    category: "Security",
    technologies: ["React", "Node", "Python", "ML"],
    github: "https://github.com/praveenkumar/typing-auth",
    demo: "https://typing-pattern-auth.vercel.app/",
    video: "https://www.youtube.com/watch?v=example6",
    highlights: [
      "Developed custom ML models to recognize typing patterns",
      "Implemented adaptive learning to account for user pattern changes",
      "Achieved 97% authentication accuracy with low false rejection"
    ]
  },
  {
    id: 7,
    title: "Gemini API – Q&A / MCQ Generator",
    description: "Takes any input context and automatically generates quiz questions and multiple-choice answers using Gemini API.",
    longDescription: "The Gemini API – Q&A / MCQ Generator is a powerful educational tool that takes any input context and automatically generates relevant quiz questions and multiple-choice answers. Built purely as a frontend application using ReactJS and Google's Gemini API, this project demonstrates my ability to work with cutting-edge AI technologies to create practical applications. The tool is especially useful for content creators, educators, and learners who want to quickly generate quizzes from existing content, saving hours of manual work while ensuring high-quality, contextually appropriate questions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    category: "AI",
    technologies: ["ReactJS", "Gemini API"],
    github: "https://github.com/praveenkumar/mcq-generator",
    demo: "https://gemini-mcq-generator.vercel.app/",
    video: "https://www.youtube.com/watch?v=example7",
    highlights: [
      "Implemented context-aware question generation",
      "Created difficulty level settings for questions",
      "Added export functionality to various formats (PDF, Word, Canvas)"
    ]
  },
  {
    id: 8,
    title: "Pinecone + Google LLM Resume Matcher",
    description: "Stores resumes in Pinecone's vector database and uses similarity matching with Google's LLM to rank candidate matches.",
    longDescription: "Pinecone + Google LLM Resume Matcher is a sophisticated recruitment tool that stores resumes in Pinecone's vector database and leverages vector similarity matching combined with Google's Large Language Model to rank candidate matches for job positions. Built with Node.js and Python, with Pinecone as the vector database, this application demonstrates my expertise in working with vector databases and LLMs for practical business applications. The system goes beyond keyword matching by understanding the semantic meaning of skills and experiences, resulting in more accurate and relevant candidate recommendations.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    category: "AI",
    technologies: ["Node.js", "Python", "Pinecone", "Google LLM"],
    github: "https://github.com/praveenkumar/resume-matcher",
    demo: "https://resume-matcher-llm.vercel.app/",
    video: "https://www.youtube.com/watch?v=example8",
    highlights: [
      "Implemented vector embeddings for semantic search",
      "Created custom scoring algorithm combining vector similarity and LLM analysis",
      "Developed batch processing for handling large resume collections"
    ]
  },
  {
    id: 9,
    title: "AI Blog Website",
    description: "Full-featured blog platform with sentiment analysis using Hugging Face, including social features like likes, comments, and sharing.",
    longDescription: "AI Blog Website is a comprehensive blogging platform that incorporates sentiment analysis using Hugging Face's models to provide insights into content emotions and reader reactions. Built as a full-stack application with React for the frontend, Node.js for the backend, and Python for AI capabilities, this platform includes all essential social features such as likes, comments, and sharing options. Users can post blogs with images and videos, while the platform automatically analyzes the sentiment of both the content and user comments, providing valuable feedback to content creators about how their work is being perceived.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    category: "Full Stack",
    technologies: ["React", "Node", "Python", "Hugging Face"],
    github: "https://github.com/praveenkumar/ai-blog",
    demo: "https://ai-blog-platform.vercel.app/",
    video: "https://www.youtube.com/watch?v=example9",
    highlights: [
      "Integrated Hugging Face Transformers for sentiment analysis",
      "Implemented real-time commenting and notification system",
      "Created content recommendation engine based on user preferences"
    ]
  },
  {
    id: 10,
    title: "Evobuz",
    description: "A full-stack event booking and e-commerce platform with features for vendors and customers, including admin dashboard and payment processing.",
    longDescription: "Evobuz is a comprehensive full-stack event booking and e-commerce platform built with React.js, Node.js, MongoDB, and Firebase. The platform serves both vendors and customers - allowing vendors to sell products and manage events, while customers can seamlessly book events and make purchases. The robust system includes an admin dashboard for managing users, vendors, and transactions, integrates Twilio for notifications, Razorpay for secure payments, and Email.js for automated emails. This project demonstrates my expertise in full-stack development, third-party integrations, and building scalable architecture.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/praveenkumar/evobuz",
    demo: "https://evobuz.vercel.app/",
    video: "https://www.youtube.com/watch?v=example10",
    highlights: [
      "Implemented role-based access control system",
      "Integrated multiple payment gateways for different regions",
      "Created real-time inventory management system"
    ]
  }
];
