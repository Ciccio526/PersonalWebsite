const Hero = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Modern Web Development
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Step-by-step guide to building beautiful web experiences
            </p>
            <div className="flex gap-4">
                <a href="#contact" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition-colors text-white">
                    Get Started
                </a>
                <a href="#projects" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors text-white">
                    View Source
                </a>
            </div>
        </div>
    );
};

export default Hero;