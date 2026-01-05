import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function ExternalFestival() {
  return (
    <div className="min-h-screen bg-[#F9F1E8]">
      {/* Header */}
      <nav className="bg-[#3A176C] border-b-6 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#48CBC7] border-4 border-black font-black text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            BACK TO HOME
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#48CBC7] border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-6xl md:text-8xl font-black text-black mb-6"
            style={{ textShadow: '6px 6px 0px #fff' }}
          >
            EXTERNAL FESTIVAL
          </motion.h1>
          <div className="inline-block px-12 py-6 bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-2xl font-black text-black">
              OPEN TO THE PUBLIC
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12">
            <h2 className="text-4xl font-black text-[#48CBC7] mb-6">About External Festival</h2>
            <p className="text-xl mb-8 leading-relaxed">
              The External Festival opens our doors to the wider community, 
              showcasing NTU's vibrant arts scene to the public through performances, 
              exhibitions, and interactive experiences.
            </p>
            
            <h3 className="text-3xl font-black text-[#3A176C] mb-4">Event Details Coming Soon</h3>
            <p className="text-lg text-gray-700">
              Stay tuned for more information about dates, venues, and ticketing!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
