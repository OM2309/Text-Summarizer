import { logo } from "../assets";

const Hero = () => {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex items-center justify-between w-full mb-10 p-3">
          <img src={logo} alt="logo" className="w-28 object-contain" />
          <button
            type="button"
            onClick={() => window.open("https://github.com/OM2309")}
            className="black_btn bg-black text-white"
          >
            Github
          </button>
        </nav>
        <h1 className="head_text">
          Summrize Articles with <br className="max-md:hidden" />{" "}
          <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>

        <h2 className="desc">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>
      </header>
    </>
  );
};

export default Hero;
