import { cinctamore_ceo } from "../../../assets/assets";

const CeoSection = () => {
  return (
    <section className="relative block w-full h-screen bg-blue-400 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6">
        
        {/* Left Section (Text Content) */}
        <div className="text-white md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold uppercase">CINCTAMORE</h1>
          <h2 className="text-lg font-semibold">Our Name</h2>
          <p className="text-sm text-gray-200">
            Cinctamore - a combined word of <strong> "cincta" </strong> (surrounded, enclosed) 
            and <strong>"amore"</strong> (love) means "surrounded by love."
          </p>
          <p className="text-sm text-gray-300">
            Our name reflects our belief that the greatest of what is possible can only be 
            achieved when what we do as a team is surrounded with love. 
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-4 hover:bg-blue-700">
            MORE ABOUT US
          </button>
        </div>

        {/* Right Section (Image + Quote Box) */}
        <div className="relative md:w-1/2 mt-6 md:mt-0 hidden sm:block">
          {/* Person Image */}
          <img 
            src={cinctamore_ceo}
            alt="CEO" 
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
          
          {/* Quote Box */}
          <div className="absolute bottom-6 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-md w-56">
            <p className="italic text-sm">
              "It is enshrined in our motto to be the global pattern of good work 
              and our slogan that 'there is always a way' to solving all challenges."
            </p>
            <p className="font-bold mt-2">Nana Bonsu Adia-Sai</p>
            <p className="text-sm">CEO</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CeoSection;
