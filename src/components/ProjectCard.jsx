

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, githubUrl }) => {
    return (
        <div className="max-w-md mx-auto">
            <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-sky-500 transition-colors">
                <div className="h-48 bg-slate-700 flex items-center justify-center">
                    <Package className="w-16 h-16 text-slate-500" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">Example Project</h3>
                    <p className="text-slate-300 mb-4">A brief description of your amazing project and its key features.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {['React', 'Tailwind', 'Node.js'].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-sm font-medium transition-colors text-white">
                            Live Demo
                        </button>
                        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors text-white">
                            View Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;