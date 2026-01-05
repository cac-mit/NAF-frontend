import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function InternalFestival() {
  return (
    <div className="min-h-screen bg-[#F9F1E8]">
      {/* Header */}
      <nav className="bg-[#3A176C] border-b-6 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E91E63] border-4 border-black font-black text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            BACK TO HOME
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#E91E63] border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
            style={{ textShadow: '6px 6px 0px #000' }}
          >
            INTERNAL FESTIVAL
          </motion.h1>
          <div className="inline-block px-12 py-6 bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-2xl font-black text-black">
              FOR NTU STUDENTS & COMMUNITY
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12">
            <h2 className="text-4xl font-black text-[#E91E63] mb-6">About Internal Festival</h2>
            <p className="text-xl mb-8 leading-relaxed">
              The Internal Festival is designed exclusively for the NTU community, 
              featuring performances, exhibitions, and workshops that celebrate the 
              creative talents within our campus.
            </p>
            
            <h3 className="text-3xl font-black text-[#3A176C] mb-4">Event Details Coming Soon</h3>
            <p className="text-lg text-gray-700">
              Stay tuned for more information about dates, venues, and how to participate!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
