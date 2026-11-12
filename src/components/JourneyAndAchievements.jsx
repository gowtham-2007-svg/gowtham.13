import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, GraduationCap, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import DotPattern from './DotPattern';

const JourneyAndAchievements = () => {
  const versionJourney = [
    {
      version: "v1.1",
      title: "Discover",
      subtitle: "Discover more than just popular places.",
      highlights: [
        "Explore hidden and unexplored places.",
        "Discover unique local destinations.",
        "Find hidden gems around your location.",
        "Discover live local food offers.",
        "Explore live business offers.",
        "Stay updated with live local events and activities."
      ],
      motto: "Discover Hidden Places. Find Local Gems. Catch Live Offers & Events.",
      status: "Completed"
    },
    {
      version: "v1.2",
      title: "AI-Powered Weekend Planning",
      subtitle: "Your personal AI agent for weekend planning.",
      highlights: [
        "Plan your weekends using an AI agent.",
        "Generate personalized weekend itineraries.",
        "Plan according to your budget.",
        "Get recommendations based on your interests.",
        "Choose destinations based on your location.",
        "Plan according to your available time.",
        "Discover relevant places and experiences through one intelligent planning experience."
      ],
      motto: "Your Budget. Your Interests. Your Weekend. Planned by AI.",
      status: "90% Completed"
    },
    {
      version: "v1.3",
      title: "Platform Expansion & Local Business Collaboration",
      subtitle: "Focusing on expanding the platform across Bengaluru, Mangaluru, Mysuru, and Manipal, while currently prioritising development and improvements in Mangaluru.",
      highlights: [
        "Multi-City Expansion: Developing the weekend-planning experience for all four locations (Bengaluru, Mangaluru, Mysuru, and Manipal).",
        "Local Business Collaboration: Building partnerships with local restaurants, food outlets, retail stores, and other businesses.",
        "Business Offers Integration: Allowing partner businesses to share their discounts, deals, and special offers directly on Weekend Explore.",
        "Digital Business Visibility: Helping local businesses reach more potential customers through the platform.",
        "Enhanced AI Weekend Planner: Improving personalised weekend recommendations based on users' budgets, interests, locations, and available time.",
        "Improved User Experience: Enhancing platform functionality, performance, and mobile accessibility."
      ],
      motto: "Vision: Transform Weekend Explore into a connected platform that brings people, weekend experiences, and local businesses together.",
      status: "Currently Building"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-neutral-50/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Weekend Explore Product Journey */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Our Product Journey</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-2">
              Weekend Explore Timeline
            </h2>

            {/* Journey Philosophy & Roadmap Banner */}
            <div className="mb-10 p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-extrabold tracking-widest uppercase text-violet-600">
                    Discover &bull; Plan &bull; Explore
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mt-1 italic">
                    &ldquo;Every Weekend Has a Story. Let's Explore Yours&rdquo;
                  </h3>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-violet-100/70 text-violet-800 font-bold text-[10px] uppercase tracking-wider">
                  Evolution
                </span>
              </div>

              {/* 3 Step Evolution Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-100">
                <div className="p-3.5 rounded-2xl bg-emerald-50/40 border border-emerald-100/70">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                      1
                    </span>
                    <span className="font-bold text-neutral-900 text-xs">v1.1 – Discover</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-medium pl-8">Hidden gems & offers</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-50/40 border border-indigo-100/70">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                      2
                    </span>
                    <span className="font-bold text-neutral-900 text-xs">v1.2 – Plan With AI</span>
                  </div>
                  <p className="text-[11px] text-indigo-700 font-medium pl-8">AI Agent Itineraries</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-100/70 border border-neutral-200/70">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                      3
                    </span>
                    <span className="font-bold text-neutral-900 text-xs">v1.3 – Expansion</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-medium pl-8">Multi-city & Local Partners</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-neutral-200/80 space-y-10 ml-2">
              {versionJourney.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline bullet */}
                  <span className="absolute -left-[31px] md:-left-[39px] top-7 w-4 h-4 rounded-full bg-white border-2 border-neutral-900 shadow-sm flex items-center justify-center">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      item.status === 'Currently Building'
                        ? 'bg-violet-600 animate-ping'
                        : item.status === '90% Completed'
                        ? 'bg-indigo-600 animate-pulse'
                        : 'bg-emerald-600'
                    }`}></span>
                  </span>

                  {/* High-Readability Card Container */}
                  <div className="p-6 md:p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow duration-200">
                    
                    {/* Header Row: Version Badge + Title + Status */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-neutral-100">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded-lg bg-neutral-900 text-white font-mono text-xs font-bold tracking-wide">
                          {item.version}
                        </span>
                        <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <div>
                        {item.status === 'Completed' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider text-emerald-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Completed
                          </span>
                        )}
                        {item.status === '90% Completed' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-xs font-bold uppercase tracking-wider text-indigo-700">
                            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                            90% Completed
                          </span>
                        )}
                        {item.status === 'Currently Building' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200/60 text-xs font-bold uppercase tracking-wider text-violet-700">
                            <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></span>
                            Currently Building
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subtitle / Description */}
                    <p className="text-base font-semibold text-neutral-800 mb-4 leading-snug">
                      {item.subtitle}
                    </p>

                    {/* Feature Highlights */}
                    <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100 mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                        Key Features & Capabilities
                      </p>
                      <ul className="space-y-2.5">
                        {item.highlights.map((point, pIdx) => {
                          const hasColon = point.includes(': ');
                          if (hasColon) {
                            const [label, ...rest] = point.split(': ');
                            return (
                              <li key={pIdx} className="flex items-start gap-2.5 text-sm text-neutral-700 font-normal leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 shrink-0"></span>
                                <span>
                                  <strong className="font-semibold text-neutral-900">{label}:</strong> {rest.join(': ')}
                                </span>
                              </li>
                            );
                          }
                          return (
                            <li key={pIdx} className="flex items-start gap-2.5 text-sm text-neutral-700 font-normal leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Motto Footer */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs md:text-sm font-semibold text-violet-950 italic">
                      <Sparkles className="w-4 h-4 text-violet-600 shrink-0" />
                      <span>&ldquo;{item.motto}&rdquo;</span>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Education & Hackathon details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Education Card */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Education</span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white border border-neutral-100/80 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Academic Profile</span>
                    <h3 className="text-base font-bold text-neutral-900 mt-1 mb-1 leading-snug">
                      Computer Science and Engineering – Artificial Intelligence and Machine Learning (CSE-AIML)
                    </h3>
                    <p className="text-sm font-semibold text-neutral-700 mb-1">
                      2nd Year Engineering Student
                    </p>
                    <p className="text-xs text-neutral-500 font-medium">
                      NIAT &bull; Yenepoya University &bull; Mangaluru, Karnataka
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hackathons Detail Card */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Hackathon Experience</span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white border border-neutral-100/80 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Learning & Development</span>
                    <h3 className="text-base font-bold text-neutral-900 mt-1 mb-2">
                      2 Hackathons Participated
                    </h3>
                    <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                      Participated in 2 hackathons, focused on learning, rapid problem-solving, and gaining real-world development experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneyAndAchievements;
