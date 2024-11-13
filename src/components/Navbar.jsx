const Navbar = () => {
    return (
        <nav className="w-full bg-slate-900 border-b border-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <span className="text-xl font-bold text-white">My Name</span>
                    <div className="hidden sm:flex space-x-8">
                        <a href="#about" className="text-slate-300 hover:text-sky-400 transition-colors">About</a>
                        <a href="#projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
                        <a href="#contact" className="text-slate-300 hover:text-sky-400 transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;