/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Camera, 
  CheckCircle2, 
  Anchor, 
  Map, 
  UserCircle, 
  MonitorPlay,
  ChevronRight,
  Instagram,
  Youtube,
  Linkedin,
  Play,
  Globe,
  Smartphone,
  Box,
  PenTool,
  X
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <div className="aurora-blob aurora-blob-1"></div>
      <div className="aurora-blob aurora-blob-2"></div>
      <div className="aurora-blob aurora-blob-3"></div>
      <div className="aurora-blob aurora-blob-4"></div>
      <div className="aurora-blob aurora-blob-5"></div>
      <div className="aurora-blob aurora-blob-6"></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <AuroraBackground />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StorySection />
        <PortfolioSection />
        <CreatorsSection />
        <PricingSection />
        <AddOnsSection />
        <FooterSection />
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-tight text-white italic">
          YMCA<span className="text-[#D4AF37] not-italic">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-widest text-[#C0C0C0] font-medium font-display">
          <a href="#story" className="hover:text-white transition-colors relative group">
            Our Story
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors relative group">
            Portfolio
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </a>
          <a href="#creators" className="hover:text-white transition-colors relative group">
            Creators
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </a>
          <a href="#services" className="hover:text-white transition-colors relative group">
            Services
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </a>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050A14] transition-all duration-300 uppercase tracking-wider text-xs font-bold rounded-full">
          Get Quote
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative min-h-[75vh] flex items-end justify-start pb-20 pt-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 h-[120%] -top-[10%] overflow-hidden"
        style={{ y }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1178560225?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Subtle Overlay Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between items-start gap-12 w-full"
        >
          <div className="max-w-2xl shrink-0">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-0">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="block font-medium text-white/50 text-xl md:text-2xl mb-2"
              >
                The Art of
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="block"
              >
                Yacht Media
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="block text-[#D4AF37]"
              >
                Excellence.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:max-w-md w-full md:pb-2"
          >
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
              Transforming luxury vessels into high-conversion digital assets. 
              Specializing in <span className="text-white font-medium">measurable performance</span> for owners, brokers, and shipyards.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [expandingProject, setExpandingProject] = useState<string | null>(null);

  const handleOpenModal = (project: typeof projects[0], playVideo = false) => {
    setSelectedProject(project);
    setIsVideoPlaying(playVideo);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsVideoPlaying(false);
  };

  const handleProjectClick = (project: typeof projects[0], playVideo = false) => {
    if (playVideo) {
      handleOpenModal(project, true);
      return;
    }
    
    if (expandingProject !== project.name) {
      setExpandingProject(project.name);
      setTimeout(() => {
        handleOpenModal(project, false);
        setExpandingProject(null);
      }, 1500);
    }
  };

  const projects = [
    {
      name: "M/Y AURELIA | 85M",
      specs: "8K RED RAW • FPV Fly-through • Dolby Atmos",
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      gallery: [
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "A comprehensive 7-day charter campaign across the Mediterranean. We captured the essence of luxury living aboard the 85m Aurelia, delivering a hero film, 15 social shorts, and a full photography suite.",
      client: "Burgess Yachts",
      duration: "7 Days",
      servicesProvided: ["Hero Film Production", "Social Media Shorts", "Photography Suite", "Drone Cinematography"]
    },
    {
      name: "S/Y BLACK PEARL | 106M",
      specs: "Cinematic Documentary • 10-bit HDR • Drone Fleet",
      image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      gallery: [
        "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518306641595-555fb7261f4d?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "A cinematic documentary exploring the engineering marvel of the 106m Black Pearl. Utilizing our drone fleet, we captured breathtaking aerials and intimate onboard moments in 10-bit HDR.",
      client: "Oceanco",
      duration: "14 Days",
      servicesProvided: ["Cinematic Documentary", "Aerial Drone Fleet", "10-bit HDR Grading", "Sound Design"]
    },
    {
      name: "M/Y SERENITY | 72M",
      specs: "Charter Campaign • Social Reels • ProRes 422 HQ",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      gallery: [
        "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1473862215182-a4f200c9598c?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "High-energy social media campaign designed to boost charter bookings. We delivered a suite of vertical reels and a web-optimized hero video, all shot in stunning ProRes 422 HQ.",
      client: "Camper & Nicholsons",
      duration: "5 Days",
      servicesProvided: ["Vertical Reels Creation", "Web-Optimized Hero Video", "ProRes 422 HQ Delivery", "Social Media Strategy"]
    },
    {
      name: "PROJECT X | 110M",
      specs: "Shipyard Confidential • VR Tour • 16-bit Color",
      image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      gallery: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "Confidential shipyard documentation and immersive VR tour creation. We utilized 16-bit color depth to accurately represent the bespoke interior finishes of this 110m masterpiece.",
      client: "Lürssen Yachts",
      duration: "30 Days",
      servicesProvided: ["Confidential Documentation", "Immersive VR Tour", "16-bit Color Grading", "Interior Photography"]
    },
    {
      name: "M/Y ECLIPSE | 162M",
      specs: "Multi-cam Production • 4K HDR • Night Cinematography",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      gallery: [
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "A high-stakes multi-camera production capturing the grandeur of one of the world's largest private yachts. We specialized in night cinematography to showcase the vessel's iconic lighting design.",
      client: "Private Owner",
      duration: "10 Days",
      servicesProvided: ["Multi-cam Production", "Night Cinematography", "4K HDR Grading", "Lighting Documentation"]
    },
    {
      name: "S/Y MALTESE FALCON | 88M",
      specs: "Regatta Coverage • High-speed FPV • 360° Immersive",
      image: "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      gallery: [
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518306641595-555fb7261f4d?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop"
      ],
      description: "Dynamic regatta coverage utilizing high-speed FPV drones to capture the raw power of the Maltese Falcon under full sail. We also delivered a 360° immersive experience for the yacht's virtual showroom.",
      client: "Perini Navi",
      duration: "4 Days",
      servicesProvided: ["Regatta Cinematography", "FPV Drone Racing", "360° Video Production", "Live Stream Support"]
    }
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-24"
        >
          <motion.div variants={fadeUpItem} className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full mb-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">Selected Works</span>
          </motion.div>
          <motion.h2 variants={fadeUpItem} className="font-display font-semibold tracking-tighter text-6xl md:text-7xl mb-6">Portfolio</motion.h2>
          <motion.p variants={fadeUpItem} className="text-[#C0C0C0] uppercase tracking-[0.3em] text-xs font-medium max-w-lg mx-auto leading-relaxed">A curated collection of our most prestigious maritime media productions.</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {projects.map((project, index) => {
            const isExpanding = expandingProject === project.name;
            
            return (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-700"
                onClick={() => handleProjectClick(project)}
              >
                <div className="absolute inset-0 bg-[#030508]/60 group-hover:bg-[#030508]/30 transition-colors duration-700 z-10" />
                <img 
                  src={project.image} 
                  alt={project.name}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transform transition-transform duration-[2s] ease-out ${isExpanding ? 'scale-110 blur-sm' : 'scale-105 group-hover:scale-110'}`}
                  referrerPolicy="no-referrer"
                />
                
                {/* Sophisticated Overlay */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-[#030508] via-[#030508]/20 to-transparent">
                  <div className="flex justify-between items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{project.client}</span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 transition-all duration-300">
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </div>
                  </div>

                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase mb-2">{project.specs}</p>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-3 tracking-tight text-white">{project.name}</h3>
                    <div className="h-[1px] w-8 bg-[#D4AF37] group-hover:w-full transition-all duration-1000" />
                  </div>
                </div>

                {/* Default View Info */}
                <div className="absolute bottom-6 left-6 z-20 group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-500">
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">{project.name}</h3>
                  <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.2em] uppercase mt-1 opacity-80">{project.client}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="mt-16 text-center">
           <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-full">
             View Full Archive
           </a>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={handleCloseModal}
          >
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#030508]/80" 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl bg-[#0a0a16] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-3/5 h-[50vh] md:h-full overflow-y-auto custom-scrollbar bg-black flex flex-col">
                <div className="relative w-full aspect-video shrink-0 group">
                  {isVideoPlaying ? (
                    <video 
                      src={selectedProject.videoUrl} 
                      autoPlay 
                      controls 
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <>
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.name}
                        loading="lazy"
                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                        onClick={() => setIsVideoPlaying(true)}
                      >
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300">
                          <Play className="w-8 h-8 text-white group-hover:text-black ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="p-4 md:p-8 grid grid-cols-2 gap-4 md:gap-6">
                    {selectedProject.gallery.map((img, idx) => (
                      <div key={idx} className={`relative rounded-2xl overflow-hidden group/gallery ${idx === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                        <div className="absolute inset-0 bg-black/20 group-hover/gallery:bg-transparent transition-colors duration-500 z-10" />
                        <img 
                          src={img} 
                          alt={`${selectedProject.name} gallery ${idx + 1}`} 
                          loading="lazy"
                          className="w-full h-full object-cover transform group-hover/gallery:scale-110 transition-transform duration-1000 ease-out" 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto"
              >
                <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">{selectedProject.specs}</p>
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">{selectedProject.name}</h3>
                <p className="text-[#C0C0C0] font-light leading-relaxed mb-8 text-sm md:text-base">
                  {selectedProject.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#C0C0C0]/50 mb-2">Client</p>
                    <p className="text-sm font-medium text-white">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#C0C0C0]/50 mb-2">Duration</p>
                    <p className="text-sm font-medium text-white">{selectedProject.duration}</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-[10px] uppercase tracking-widest text-[#C0C0C0]/50 mb-4">Services Provided</p>
                  <ul className="space-y-2">
                    {selectedProject.servicesProvided.map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#C0C0C0]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mr-3 mt-0.5 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-10 w-full py-4 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-full">
                  Request Similar Project
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.h2 variants={fadeUpItem} className="font-display font-semibold tracking-tight text-4xl md:text-5xl mb-6 text-white">Born from the sea</motion.h2>
            <motion.p variants={fadeUpItem} className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8">Our Mission & History</motion.p>
            <motion.div variants={fadeUpItem} className="space-y-6 text-[#C0C0C0] font-light leading-relaxed">
              <p className="text-lg text-white font-medium">
                We are a team of passionate sailors and travelers, committed to deliver impeccable storytelling and visual content.
              </p>
              <p>
                Founded on the decks of ocean-crossing vessels, YMCA (Yacht Media Creators Association) was born out of a profound respect for the maritime world. We noticed a gap between the breathtaking reality of yachting and how it was portrayed digitally.
              </p>
              <p>
                Our history is woven with salt and celluloid. From our early days shooting regattas on handheld cameras to orchestrating multi-million dollar charter campaigns with cinema-grade RED cameras and heavy-lift drones, our core ethos has remained unchanged: authenticity, luxury, and cinematic perfection.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeUpItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay z-10" />
            <img 
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop" 
              alt="Sailing the ocean" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {[
            {
              title: "Uncompromising Quality",
              desc: "We utilize only the highest-end cinema gear, ensuring every frame meets Hollywood standards.",
              icon: <Camera className="w-5 h-5 text-[#D4AF37]" />
            },
            {
              title: "Maritime DNA",
              desc: "We don't just shoot boats; we understand them. Our team's sailing background ensures we capture the true essence of yachting.",
              icon: <Anchor className="w-5 h-5 text-[#D4AF37]" />
            },
            {
              title: "Global Reach",
              desc: "From the Mediterranean to the Caribbean, our passports are as stamped as our hard drives are full.",
              icon: <Globe className="w-5 h-5 text-[#D4AF37]" />
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              whileHover={{ y: -5 }}
              className="glass-panel p-4 rounded-xl flex items-start gap-4 transition-all duration-300 hover:bg-white/5 hover:border-[#D4AF37]/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
            >
              <div className="p-2.5 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 shrink-0 mt-0.5">
                {value.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1 text-white">{value.title}</h3>
                <p className="text-[#C0C0C0] text-xs leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CreatorsSection() {
  const team = [
    {
      name: "Adam",
      role: "Lead Cinematographer",
      description: "Master of light and composition. Specializes in RED 8K workflows and underwater cinematography.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Adrian",
      role: "Aerial DOP & FPV Specialist",
      description: "Pioneering dynamic fly-throughs. Certified heavy-lift drone pilot with a cinematic eye.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Adam",
      role: "Creative Director",
      description: "Architect of the YMCA aesthetic. Oversees post-production, color grading, and brand narrative.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Karolina",
      role: "Executive Producer",
      description: "The logistical mastermind. Orchestrates global campaigns and ensures flawless client experiences.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="creators" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeUpItem} className="font-display font-semibold tracking-tight text-4xl md:text-5xl mb-4">The creators</motion.h2>
          <motion.p variants={fadeUpItem} className="text-[#C0C0C0] uppercase tracking-widest text-sm font-medium mb-4">Minds Behind the Lens</motion.p>
          <motion.p variants={fadeUpItem} className="text-[#D4AF37] text-sm italic font-light max-w-2xl mx-auto">We collaborate only with curated professionals to ensure the highest standard of maritime storytelling.</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              className="glass-panel rounded-2xl overflow-hidden group glass-panel-hover"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#030508]/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 relative z-20 bg-[#030508]/90 backdrop-blur-xl border-t border-white/5 group-hover:bg-[#030508]/95 transition-colors duration-500">
                <h3 className="font-display text-3xl font-bold mb-1 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-500">{member.name}</h3>
                <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 opacity-80">{member.role}</p>
                <p className="text-[#C0C0C0] text-sm font-light leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



function PricingSection() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers = [
    {
      name: "ESSENTIAL",
      subtitle: "Launch Pack",
      price: "€2,000 – €5,000",
      focus: "Quick market entry.",
      features: [
        "1-day onboard production (Sony FX3 / Ronin RS3)",
        "4K 10-bit 4:2:2 Delivery",
        "Standard Cinematic Drone (DJI Mavic 3 Pro)",
        "HDR Interior/Exterior Photo (Rec.709)",
        "60-90s Hero Video (Web Optimized)",
        "3-5 Vertical Reels (9:16 H.265)",
        "14-day Social Plan",
        "Basic Color Grading",
        "Royalty-Free Music Licensing",
        "1 Revision Round",
        "Delivery within 14 days"
      ]
    },
    {
      name: "PROFESSIONAL",
      subtitle: "Charter Growth Pack",
      price: "€6,000 – €15,000",
      focus: "Lifestyle & Emotion.",
      popular: true,
      features: [
        "2-3 days production (RED Komodo-X 6K)",
        "FPV Drone Fly-throughs (Custom Cinewhoop)",
        "Lifestyle shooting with models & lighting grid",
        "2-3 Cinematic Films (DaVinci Resolve Graded)",
        "10-20 Short-form videos (Multi-platform)",
        "5-10 page Apple-glass style Brochure (PDF/Web)",
        "30-day Content Calendar & Analytics",
        "Advanced Sound Design & Foley",
        "Custom Motion Graphics & Titles",
        "Dedicated Account Manager",
        "2 Revision Rounds",
        "Raw Footage Handoff (Proxy)"
      ]
    },
    {
      name: "SIGNATURE",
      subtitle: "Brand Domination Pack",
      price: "€20,000 – €60,000+",
      focus: "Complete Market Authority.",
      features: [
        "4-7 days Multi-location (RED V-Raptor 8K VV)",
        "Full Creative Direction & Storyboarding",
        "Underwater (Gates Housing) & Heavy-lift FPV",
        "100+ Editorial Photos (Medium Format)",
        "3-5 Cinematic Masterpieces (Dolby Atmos Mix)",
        "YMCA.AI Integration (Real-time tracking)",
        "Paid Ads Strategy (Meta/Google/YouTube)",
        "Original Music Composition",
        "Unlimited Revisions",
        "Same-day Social Media Edits",
        "Full Raw Footage Handoff (8K)",
        "Dedicated 24/7 Production Team",
        "Global Travel Included"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeUpItem} className="font-display font-semibold tracking-tight text-4xl md:text-5xl mb-4">Detailed service tiers</motion.h2>
          <motion.p variants={fadeUpItem} className="text-[#C0C0C0] uppercase tracking-widest text-sm font-medium">The Core Offer</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
            >
              <div
                onClick={() => setSelectedTier(tier.name)}
                className={`glass-panel rounded-2xl p-8 relative h-full flex flex-col cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  selectedTier === tier.name
                    ? 'border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.3)] bg-[#030508]/80 scale-105 z-10'
                    : tier.popular 
                      ? 'lg:-translate-y-4 border-[#D4AF37]/40 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-[#030508]/60 hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:scale-[1.02]' 
                      : 'hover:border-[#D4AF37]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:scale-[1.02]'
                }`}
              >
                {selectedTier === tier.name ? (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-[#030508] text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full flex items-center gap-1 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <CheckCircle2 className="w-3 h-3" /> Selected
                  </div>
                ) : tier.popular ? (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-[#030508] text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                ) : null}
                
                <div className="mb-8 border-b border-white/10 pb-8 w-full text-left">
                  <p className="text-[#C0C0C0] text-xs font-bold uppercase tracking-widest mb-2">Tier {index + 1} — {tier.subtitle}</p>
                  <h3 className="font-display font-bold text-4xl mb-4 text-white">{tier.name}</h3>
                  <div className="text-2xl font-light text-[#D4AF37] mb-4">{tier.price}</div>
                  <p className="text-sm text-[#C0C0C0] italic">Focus: {tier.focus}</p>
                </div>

                <ul className="space-y-4 mb-8 w-full text-left flex-grow">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-[#C0C0C0]">
                      <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 transition-colors duration-300 ${selectedTier === tier.name ? 'text-[#D4AF37]' : 'text-[#D4AF37] opacity-80'}`} />
                      <span className="leading-relaxed font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 uppercase tracking-widest text-xs font-bold rounded-full transition-all duration-500 mt-auto ${
                  selectedTier === tier.name
                    ? 'bg-white text-[#030508] shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : tier.popular 
                      ? 'bg-[#D4AF37] text-[#030508] hover:bg-white hover:text-[#030508]' 
                      : 'border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}>
                  {selectedTier === tier.name ? 'Selected' : 'Select Tier'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tailor Made Packages Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16"
        >
          <motion.div variants={fadeUpItem} className="glass-panel rounded-3xl p-8 md:p-12 border-[#D4AF37]/20 bg-gradient-to-br from-[#030508]/90 to-[#050A14]/90 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4AF37]/10 transition-colors duration-700" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="text-left max-w-2xl">
                <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">Bespoke Solutions</span>
                </div>
                <h3 className="font-display font-semibold text-4xl md:text-5xl mb-6 text-white tracking-tight">Tailor made packages</h3>
                <p className="text-[#C0C0C0] text-lg font-light leading-relaxed mb-8">
                  Every yacht has a unique soul, and every owner has a specific vision. Our standard tiers are just the beginning. We offer fully customized production packages designed specifically for your vessel's requirements, destination, and marketing goals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Custom Shipyard Documentaries",
                    "Multi-Destination Global Tours",
                    "Bespoke VR/AR Marketing Suites",
                    "Confidential Private Sales Media",
                    "Regatta & Event Coverage",
                    "Long-term Brand Ambassadorship"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="shrink-0 w-full md:w-auto flex flex-col items-center">
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative group/director cursor-pointer">
                  <div className="absolute inset-0 bg-[#030508]/10 group-hover/director:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                    alt="Director"
                    className="w-full h-full object-cover transform scale-110 group-hover/director:scale-100 transition-transform duration-700 grayscale group-hover/director:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-10 py-5 bg-[#D4AF37] text-[#030508] hover:bg-white transition-all duration-500 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  Consult Our Director
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AddOnsSection() {
  const [selectedAddon, setSelectedAddon] = useState<any | null>(null);
  const [fontIndex, setFontIndex] = useState(0);

  const customFonts = [
    "'Plus Jakarta Sans', sans-serif",
    "'Inter', sans-serif",
    "'Manrope', sans-serif",
    "'Urbanist', sans-serif",
    "'Outfit', sans-serif",
    "'Montserrat', sans-serif",
    "'Work Sans', sans-serif",
    "'Quicksand', sans-serif",
    "'Poppins', sans-serif",
    "'Space Grotesk', sans-serif"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % customFonts.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const addons = [
    {
      icon: <Anchor className="w-8 h-8" />,
      title: "Underwater Cinematography",
      description: "Gates Housings & Scuba Certified Operators",
      details: "Capture the hidden beauty beneath the surface. Our certified scuba operators use industry-leading Gates underwater housings to deliver crystal-clear, cinematic footage of your yacht's hull, water toys, and marine life interactions.",
      techSpecs: ["RED V-Raptor in Gates Pro Action Housing", "4K/8K RAW Underwater Recording", "PADI Certified Cinematographers", "Advanced Color Correction for Water Depth"],
      portfolioLink: "#"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Destination Campaigns",
      description: "Global Logistics (Sardinia, Bahamas, etc.)",
      details: "Showcase your vessel in the world's most exclusive destinations. We handle all global logistics, permits, and travel to capture your yacht against breathtaking backdrops, from the Mediterranean to the Caribbean.",
      techSpecs: ["End-to-end production logistics", "International drone and filming permits", "Local fixer networks in major yachting hubs", "Multi-day narrative campaigns"],
      portfolioLink: "#"
    },
    {
      icon: <UserCircle className="w-8 h-8" />,
      title: "Personal Branding",
      description: "Captain & Crew Storytelling / Interviews",
      details: "Humanize your charter experience. We produce high-end documentary-style interviews and storytelling pieces focusing on the captain, chef, and crew, highlighting the exceptional service guests can expect.",
      techSpecs: ["Multi-cam interview setups", "Professional lavalier and boom audio", "Cinematic lighting design", "Narrative-driven editing"],
      portfolioLink: "#"
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Tech Suite",
      description: "VR/AR Yacht Experiences & 4K Live Streaming",
      details: "Push the boundaries of digital interaction. We offer cutting-edge Virtual Reality (VR) and Augmented Reality (AR) experiences, alongside secure 4K live streaming for remote broker walkthroughs or owner updates.",
      techSpecs: ["Custom VR/AR application development", "Secure, low-latency 4K streaming", "Interactive 3D model integration", "Cross-platform compatibility"],
      portfolioLink: "#"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Dedicated Yacht Website",
      description: "Custom-coded, ultra-premium web presence for charter & sales",
      details: "A digital flagship for your vessel. We design and develop bespoke, high-performance websites that serve as the ultimate sales or charter brochure, integrating seamlessly with our cinematic media.",
      techSpecs: ["Next.js / React modern tech stack", "Lightning-fast global CDN delivery", "Interactive deck plans and media galleries", "SEO and conversion optimization"],
      portfolioLink: "#"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Dedicated Yacht App",
      description: "Bespoke mobile onboarding, itineraries & digital concierge",
      details: "Elevate the guest experience before they even step aboard. Our custom white-label mobile app provides digital itineraries, crew profiles, menu selections, and a digital concierge service.",
      techSpecs: ["iOS and Android native applications", "Real-time itinerary updates", "Secure guest preference forms", "Offline mode for remote cruising"],
      portfolioLink: "#"
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "3D Virtual Tours",
      description: "Immersive 3D walkthroughs and digital twin creation for remote viewing",
      details: "Create a perfect digital twin of your yacht. Our 3D virtual tours allow prospective buyers or charter guests to explore every deck and cabin remotely, with high-resolution 360-degree imagery and accurate spatial mapping.",
      techSpecs: ["Matterport Pro3 / Leica BLK360 scanning", "4K HDR 360° panoramas", "Interactive floor plans", "VR headset compatible"],
      portfolioLink: "#"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Brokerage Design Suite",
      description: "Premium graphic design for yacht materials, including broker one-pagers",
      details: "Elevate your marketing collateral with our premium design suite. We create bespoke brochures, broker one-pagers, and digital presentations that match the quality of our visual media, ensuring a cohesive and luxurious brand image.",
      techSpecs: ["Custom typography and layout design", "Print-ready PDF and digital formats", "Interactive digital brochures", "Brand identity alignment"],
      portfolioLink: "#"
    }
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedAddon) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAddon]);

  return (
    <section id="addons" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeUpItem} className="font-display font-semibold tracking-tight text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3">
            <span>The</span>
            <span className="relative w-[320px] h-[50px] md:h-[60px] inline-block">
              {customFonts.map((font, index) => (
                <span
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-150 ${index === fontIndex ? 'opacity-100' : 'opacity-0'}`}
                  style={{ fontFamily: font }}
                >
                  customization
                </span>
              ))}
            </span>
            <span>hub</span>
          </motion.h2>
          <motion.p variants={fadeUpItem} className="text-[#C0C0C0] uppercase tracking-widest text-sm font-medium">Premium Add-Ons</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
            >
              <div 
                onClick={() => setSelectedAddon(addon)}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group glass-panel-hover cursor-pointer h-full"
              >
                <div className="mb-6 text-[#C0C0C0] group-hover:text-[#D4AF37] transition-colors duration-500 transform group-hover:scale-110">
                  {addon.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors duration-500">{addon.title}</h3>
                <p className="text-sm text-[#C0C0C0] font-light mb-4">{addon.description}</p>
                <div className="mt-auto pt-4 opacity-30 group-hover:opacity-100 transition-all duration-500 flex items-center text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold">
                  <span>Details</span>
                  <ChevronRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedAddon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedAddon(null)}
          >
            <div className="absolute inset-0 bg-[#030508]/90 backdrop-blur-xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a16] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAddon(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar max-h-[80vh]">
                <div className="mb-6 text-[#D4AF37]">
                  {selectedAddon.icon}
                </div>
                <h3 className="font-display text-3xl font-bold mb-4 text-white">{selectedAddon.title}</h3>
                <p className="text-[#C0C0C0] font-light leading-relaxed mb-8">
                  {selectedAddon.details}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Technical Specifications</h4>
                  <ul className="space-y-3">
                    {selectedAddon.techSpecs.map((spec: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#C0C0C0] text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mr-3 mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={selectedAddon.portfolioLink}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#030508] transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-full w-full sm:w-auto"
                >
                  View Portfolio <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FooterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const availableSkills = [
    "Aerial", "FPV", "Post-Production", "Copywriting", 
    "Photography", "Videography", "Direction", "Color Grading", "Sound Design"
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setTimeout(() => setIsSubmitted(false), 500);
    }, 3000);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {/* Ready to Elevate Your Fleet */}
          <motion.div 
            variants={fadeUpItem}
            className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="text-center mb-10 relative z-10">
              <h2 className="font-display font-semibold tracking-tight text-4xl mb-4 text-white">Ready to elevate your fleet?</h2>
              <p className="text-[#C0C0C0] font-light">Request a custom quote for your vessel.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C0C0C0] ml-1">Yacht Name / Length</label>
                  <input 
                    type="text" 
                    placeholder="e.g., M/Y Serenity, 50m" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C0C0C0] ml-1">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option value="" className="bg-[#0A192F]">Select a tier...</option>
                    <option value="essential" className="bg-[#0A192F]">Tier 1 - Essential</option>
                    <option value="professional" className="bg-[#0A192F]">Tier 2 - Professional</option>
                    <option value="signature" className="bg-[#0A192F]">Tier 3 - Signature</option>
                    <option value="custom" className="bg-[#0A192F]">Custom Project</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C0C0C0] ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="contact@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <button type="submit" className="w-full py-4 bg-[#D4AF37] text-[#030508] uppercase tracking-widest text-sm font-bold rounded-full hover:bg-white transition-colors flex items-center justify-center group">
                Submit Request
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Join the Association */}
          <motion.div
            variants={fadeUpItem}
            className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <Camera className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
              <h2 className="font-display font-semibold tracking-tight text-4xl mb-4 text-white">Join the association</h2>
              <p className="text-[#C0C0C0] font-light leading-relaxed mb-10 max-w-md mx-auto">
                Are you a visionary cinematographer, drone pilot, or photographer with a passion for the sea? We are always looking for top-tier talent to join our curated network.
              </p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-10 py-4 bg-white/5 border border-white/20 text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#030508] transition-all duration-300 uppercase tracking-widest text-sm font-bold rounded-full"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="font-display font-bold text-xl tracking-widest mb-6 md:mb-0">
            YMCA<span className="text-[#D4AF37]">.</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="text-center mt-12 text-xs text-[#C0C0C0]/50 font-medium">
          &copy; {new Date().getFullYear()} YMCA Yacht Marketing & Content Agency. All rights reserved.
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="absolute inset-0 bg-[#030508]/90 backdrop-blur-xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a16] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
                    <h3 className="font-display text-3xl font-bold mb-4 text-white">Application Received</h3>
                    <p className="text-[#C0C0C0] font-light leading-relaxed">Thank you for your interest in joining YMCA. Our team will review your portfolio and get back to you soon.</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-display text-3xl font-bold mb-2 text-white">Creator Application</h3>
                    <p className="text-[#C0C0C0] text-sm mb-8">Join our curated network of maritime media professionals.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0]/70 mb-2">Full Name</label>
                          <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0]/70 mb-2">Email Address</label>
                          <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="john@example.com" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0]/70 mb-3">Primary Skills</label>
                        <div className="flex flex-wrap gap-2">
                          {availableSkills.map(skill => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => toggleSkill(skill)}
                              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                                selectedSkills.includes(skill)
                                  ? 'bg-[#D4AF37] text-[#030508] border-[#D4AF37]'
                                  : 'bg-white/5 text-[#C0C0C0] border-white/10 hover:border-[#D4AF37]/50 hover:text-white'
                              }`}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                        {selectedSkills.length === 0 && (
                          <input type="text" required className="opacity-0 h-0 w-0 absolute" />
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0]/70 mb-2">Portfolio / Showreel URL</label>
                        <input required type="url" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="https://vimeo.com/..." />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0]/70 mb-2">Primary Equipment</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="e.g., RED Komodo, DJI Mavic 3 Pro, Sony FX3" />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0]/70 mb-2">Maritime Experience</label>
                        <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" placeholder="Have you worked on yachts before? Are you comfortable at sea?"></textarea>
                      </div>

                      <button type="submit" className="w-full py-4 bg-[#D4AF37] text-[#030508] hover:bg-white transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-lg mt-4">
                        Submit Application
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
