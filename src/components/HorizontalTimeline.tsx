import { motion } from "motion/react";
import { Calendar, Megaphone, Users, Globe } from "lucide-react";

interface TimelineEvent {
  name: string;
  date: string;
  actualDate: Date; // For comparison
  icon: any;
  color: string;
}

const events: TimelineEvent[] = [
  {
    name: "Publicity Event",
    date: "Jan 2026",
    actualDate: new Date("2026-01-15"), // Mid-January 2026
    icon: Megaphone,
    color: "#FDC47F"
  },
  {
    name: "Internal Festival",
    date: "Feb 2026",
    actualDate: new Date("2026-02-15"), // Mid-February 2026
    icon: Users,
    color: "#E91E63"
  },
  {
    name: "External Festival",
    date: "Aug 2026",
    actualDate: new Date("2026-08-15"), // Mid-August 2026
    icon: Globe,
    color: "#48CBC7"
  }
];

// Function to find the next upcoming event
const getUpcomingEventIndex = (): number => {
  const today = new Date();
  
  // Find the first event that is after today's date
  const upcomingIndex = events.findIndex(event => event.actualDate > today);
  
  // If all events have passed, return -1 (no upcoming event)
  // If we find an upcoming event, return its index
  return upcomingIndex !== -1 ? upcomingIndex : -1;
};

export function HorizontalTimeline() {
  // Dynamically determine which event is upcoming based on today's date
  const upcomingEventIndex = getUpcomingEventIndex();

  return (
    <div className="w-full py-12">
      {/* Timeline Line */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-black -translate-y-1/2 hidden md:block"></div>
        
        {/* Events */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 relative z-10">
          {events.map((event, index) => {
            const isUpcoming = index === upcomingEventIndex;
            const Icon = event.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, y: 50 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: isUpcoming ? 1.1 : 1.05 }}
                className="flex flex-col items-center"
              >
                {/* Icon Container */}
                <motion.div
                  animate={isUpcoming ? { scale: [1, 1.1, 1] } : {}}
                  transition={isUpcoming ? { repeat: Infinity, duration: 2 } : {}}
                  className={`relative ${
                    isUpcoming ? 'w-32 h-32' : 'w-24 h-24'
                  } border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mb-4 transition-all`}
                  style={{ backgroundColor: event.color }}
                >
                  <Icon className={`${isUpcoming ? 'w-16 h-16' : 'w-12 h-12'} text-black`} />
                  
                  {/* Upcoming Badge */}
                  {isUpcoming && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-4 -right-4 px-3 py-1 bg-[#3A176C] border-4 border-black"
                    >
                      <span className="text-xs font-black text-white">NEXT!</span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Event Info */}
                <div className="text-center">
                  <div 
                    className={`px-6 py-3 border-4 border-black mb-2 ${
                      isUpcoming ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : ''
                    }`}
                    style={{ backgroundColor: event.color }}
                  >
                    <h3 className={`${
                      isUpcoming ? 'text-xl' : 'text-lg'
                    } font-black text-black uppercase`}>
                      {event.name}
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-[#3A176C]">{event.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}