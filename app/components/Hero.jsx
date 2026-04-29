import Image from "next/image";

export default function Hero() {

  return (
<section
  id="hero"
  className="
    relative z-0 
    flex flex-col-reverse md:flex-row items-center justify-between 
    text-black scroll-mt-24
    mt-18 sm:mt-12 md:mt-16 
    scroll-mt-24 
    px-4 sm:px-6 md:px-8 
    py-0 sm:py-0 md:py-0 
    bg-blue-50 
    rounded-xl 
    shadow-sm 
    border-b border-gray-200
  "
>



<div className="md:w-1/2">
        <h1 className="text-center text-5xl font-semibold sm:text-left text-black">
          Next-Gen 
          <span className="text-blue-500 font-semibold"> Expertise</span>
          <br /> For Your
          <span className="text-blue-500 font-semibold"> Enterprise</span>
        </h1>
        <br />
        <p className="space-y-3 font-circular text-2xl max-w-full mb-6">
          Cultivate high-performance teams through expert learning.
        </p>

        {/* ✅ Bullet points inside Hero */}
        <ul className="space-y-3 text-4xl mb-6 font-semibold">
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="w-6 h-6 text-green-400" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span className="text-lg">Tailored Solutions</span>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="w-6 h-6 text-green-400" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span className="text-lg">Industry Insights</span>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="w-6 h-6 text-green-400" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span className="text-lg">Expert Guidance</span>
          </li>
        </ul>

        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Enquire Now
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-15 flex justify-center">
        <Image
           src="/prof.png"
           alt="Professional with laptop"
           width={500}
           height={500}
           className="rounded-lg object-cover"
         />
      </div>
    </section>
  );
}
      