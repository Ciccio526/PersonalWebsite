import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';


const App = () => {
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of your first project",
            tags: ["React", "Tailwind", "Node.js"],
            //imageUrl: "/project1.jpg",
            liveUrl: "https://project1.com",
            githubUrl: "https://github.com/Ciccio526/ProjectMessyItUp"
        },
        // Add more projects as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <Navbar />
            <Hero />
            <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default App;
