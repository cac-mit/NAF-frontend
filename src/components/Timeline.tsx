import { Calendar, Megaphone, Store, Sparkles, PartyPopper } from "lucide-react";
import { motion } from "motion/react";

interface TimelineEvent {
  title: string;
  subtitle: string;
  date: string;
  color: string;
  icon: any;
}

const events: TimelineEvent[] = [
  {
    title: "Publicity Event 2",
    subtitle: "Spread the Word",
    date: "27-29 October",
    color: "#E91E63",
    icon: Megaphone,
  },
  {
    title: "Internal Festival",
    subtitle: "Craft Market",
    date: "19 Jan - 13 Feb",
    color: "#3A176C",
    icon: Store,
  },
  {
    title: "External Festival",
    subtitle: "Bazaar",
    date: "7-8 or 14-15 Feb",
    color: "#FDC47F",
    icon: Sparkles,
  },
  {
    title: "NAF Festival",
    subtitle: "Main Event",
    date: "TBC (After Feb)",
    color: "#48CBC7",
    icon: PartyPopper,
  },
];

export function Timeline() {
  return (
    <div className="relative">
      {/* Thick Chunky Timeline Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-8 md:left-12 top-0 bottom-0 w-2 bg-black origin-top"
      />

      <div className="space-y-8">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                bounce: 0.5,
              }}
              viewport={{ once: true }}
              className="relative flex items-start gap-6 md:gap-8"
            >
              {/* Chunky Timeline Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative flex-shrink-0 z-10"
              >
                <div
                  className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: event.color }}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
              </motion.div>

              {/* Y2K Event Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1 bg-white border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-2">
                      {event.title.toUpperCase()}
                    </h3>
                    <p className="text-lg font-bold" style={{ color: event.color }}>
                      {event.subtitle}
                    </p>
                  </div>
                  
                  {/* Chunky Date Badge */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="inline-flex items-center gap-2 px-5 py-3 border-4 border-black font-black whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    style={{ backgroundColor: event.color }}
                  >
                    <Calendar className="w-5 h-5 text-white" />
                    <span className="text-white text-sm">{event.date}</span>
                  </motion.div>
                </div>

                {/* Chunky Progress Bar */}
                <div className="mt-4 h-4 bg-gray-200 border-2 border-black overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(index + 1) * 25}%` }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full border-r-2 border-black"
                    style={{ backgroundColor: event.color }}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Y2K Completion Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 180 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#E91E63] via-[#3A176C] to-[#48CBC7] border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
        >
          <Sparkles className="w-12 h-12 text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
}