import { Card } from "./components/ui/card";
import { HeroCarousel } from "./components/HeroCarousel";
import { HorizontalTimeline } from "./components/HorizontalTimeline";
import { Palette, Users, Target, Instagram, Send, Music, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const navLinks = [
    { name: "Events", href: "#events" },
    { name: "Workshops", href: "#workshops" },
    { name: "Exhibitions", href: "#exhibitions" },
    { name: "Buy Tickets", href: "#tickets" },
    { name: "Merchandise", href: "#merchandise" },
  ];

  return (
    <div className="min-h-screen bg-[#F9F1E8]">
      {/* Navigation Header */}
      <nav className="bg-[#3A176C] border-b-6 border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/icons/nafPurpleLogo.png"
                alt="NAF"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 hover:bg-[#48CBC7] border-2 border-black font-black text-white hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  {link.name.toUpperCase()}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="w-12 h-12 bg-[#48CBC7] border-4 border-black flex items-center justify-center">
                <div className="space-y-1.5">
                  <div className="w-6 h-1 bg-black"></div>
                  <div className="w-6 h-1 bg-black"></div>
                  <div className="w-6 h-1 bg-black"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Us Section - Y2K Blocks */}
      <section className="py-20 px-6 bg-[#F9F1E8] relative overflow-hidden">
        {/* Background Dots */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, #3A176C 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.6 }}
              className="inline-block mb-6 px-12 py-4 bg-[#E91E63] border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h2 className="text-5xl md:text-6xl font-black text-white">
                ABOUT US
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Who Are We Block */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#48CBC7] border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#3A176C]" />
                </div>
                <h3 className="text-3xl font-black text-white">WHO ARE WE?</h3>
              </div>
              <p className="text-black font-semibold leading-relaxed">
                NTU Arts Festival is a fully student-run arts festival that aims to provide a platform for interdisciplinary creative expression, collaboration and connection across six segments: Publicity Drive, Exhibitions, Contests, Concerts, Workshops, and Arts Market.
              </p>
            </motion.div>

            {/* Vision Block */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#FDC47F] border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#3A176C]" />
                </div>
                <h3 className="text-3xl font-black text-white">VISION</h3>
              </div>
              <p className="text-black font-semibold leading-relaxed">
                To be the largest student-run arts festival that serves as a catalyst for artistic and cultural exploration, expression and connection within and beyond the NTU community.
              </p>
            </motion.div>
          </div>

          {/* Mission Block */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-[#E91E63] border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center">
                <Palette className="w-8 h-8 text-[#3A176C]" />
              </div>
              <h3 className="text-3xl font-black text-white">MISSION</h3>
            </div>
            <p className="text-white font-semibold leading-relaxed mb-6">
              NTU Arts Festival aims to promote the engagement, understanding and appreciation of the arts within the NTU community and bring the NTU's art scene to a larger audience in the wider local arts scene:
            </p>
            <div className="space-y-4">
              {[
                { text: "Provide opportunities for NTU students and alumni to develop and present artistic work", color: "#48CBC7" },
                { text: "Foster cross-disciplinary collaborations across art forms and faculties that promotes vibrancy", color: "#FDC47F" },
                { text: "Connect NTU with internal and external communities through inclusive programming", color: "#3A176C" },
                { text: "Promote understanding and appreciation for the arts", color: "#48CBC7" },
                { text: "Serve as an accessible platform for students to explore their interests and find new passion in different artistic fields", color: "#FDC47F" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-6 h-6 flex-shrink-0 mt-1 border-2 border-white"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-white font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Events Section - Internal vs External */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black mb-12 text-center text-[#3A176C]"
            style={{
              textShadow: '3px 3px 0px #48CBC7'
            }}
          >
            OUR EVENTS
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-0 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {/* Internal Festival - Left Half */}
            <motion.a
              href="/pages/InternalFestival.tsx"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#E91E63] p-16 flex flex-col items-center justify-center cursor-pointer group border-r-4 md:border-r-8 border-black"
            >
              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-black text-white mb-6 group-hover:scale-110 transition-transform">
                  INTERNAL FESTIVAL
                </h3>
                <p className="text-xl font-bold text-white/90 mb-8">
                  For NTU Students & Community
                </p>
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <span className="text-xl font-black text-black">LEARN MORE</span>
                  <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* External Festival - Right Half */}
            <motion.a
              href="/pages/ExternalFestival.tsx"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#48CBC7] p-16 flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-black text-black mb-6 group-hover:scale-110 transition-transform">
                  EXTERNAL FESTIVAL
                </h3>
                <p className="text-xl font-bold text-black/80 mb-8">
                  Open to the Public
                </p>
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <span className="text-xl font-black text-black">LEARN MORE</span>
                  <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-[#F9F1E8] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            #3A176C 20px,
            #3A176C 22px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            #3A176C 20px,
            #3A176C 22px
          )`
        }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Timeline Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-block mb-4 px-8 py-3 bg-gradient-to-r from-[#E91E63] via-[#3A176C] to-[#48CBC7] border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white border-2 border-black"></div>
                <div className="w-4 h-4 bg-[#FDC47F] border-2 border-black rounded-full"></div>
                <div className="w-4 h-4 bg-white border-2 border-black"></div>
              </div>
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-black text-[#3A176C] mb-4"
              style={{ textShadow: '4px 4px 0px #48CBC7' }}
            >
              EVENT TIMELINE
            </h2>
            <div className="inline-block px-8 py-3 bg-[#FDC47F] border-4 border-black">
              <p className="text-3xl font-black text-black">2025-2026</p>
            </div>
          </div>

          <HorizontalTimeline />
        </div>
      </section>

      {/* Contact Section - Y2K Style */}
      <section className="py-12 px-0 bg-[#3A176C] relative overflow-hidden">
        <div className="relative z-10">
          {/* Logo Banner - Flush Left */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-start h-32 md:h-40">
              <img
                src="/icons/nafLongLogoPurple.png"
                alt="NTU Arts Festival"
                className="h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Contact Info - Compact */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-[#48CBC7] mb-4 text-center">
              STAY UPDATED:
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/ntuartsfestival/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-all border-2 border-white/30"
              >
                <Instagram className="w-5 h-5 text-[#48CBC7]" />
                <span className="text-white font-bold text-sm">@NTUARTSFESTIVAL</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/NTUArtsFestival"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-all border-2 border-white/30"
              >
                <Send className="w-5 h-5 text-[#48CBC7]" />
                <span className="text-white font-bold text-sm">@NTUARTSFESTIVAL</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.tiktok.com/@ntuartsfestival?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-all border-2 border-white/30"
              >
                <Music className="w-5 h-5 text-[#48CBC7]" />
                <span className="text-white font-bold text-sm">@NTUARTSFESTIVAL</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linktr.ee/cacnaf?fbclid=PAZXh0bgNhZW0CMTEAAafoVpgT7WVT4msJMPcmMEyuuWBVNfCWk-YMxNmJun_iGIpt468wPOPv9xRbTQ_aem_-j_6GbJkfJdKhy-VUngvhQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-all border-2 border-white/30"
              >
                <span className="text-[#48CBC7] text-lg">🔗</span>
                <span className="text-white font-bold text-sm">LINKTREE</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Chunky Y2K */}
      <footer className="bg-black text-white py-12 px-6 border-t-8 border-[#E91E63]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#E91E63] via-[#3A176C] to-[#48CBC7] border-4 border-white">
            <p className="font-black text-white text-lg">
              © 2025 NTU ARTS FESTIVAL ★ STUDENT-RUN ★ CREATIVE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}