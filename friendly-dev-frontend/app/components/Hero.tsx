import { Link } from "react-router";

type HeroProps = {
  name?: string;
  text?: string;
};

const Hero: React.FC<HeroProps> = ({
  name = "[NAME]",
  text = " I build friendly web experiences and help others become confident, modern developers.",
}) => {
  return (
    <header className="text-center py-20 px-4 bg-orange-200 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hey, I'm {name}!!</h2>
      <p className="text-lg text-orange-400 max-w-2xl mx-auto mb-6">{text}</p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-orange-500 text-orange-400 px-6 py-2 rounded hover:bg-orange-600 hover:text-white transition">
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
