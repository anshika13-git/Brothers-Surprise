'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Birthday memories images
  const images = [
    '/images/WhatsApp Image 2025-12-24 at 5.13.39 PM (1).jpeg',
    '/images/WhatsApp Image 2025-12-24 at 5.13.39 PM (2).jpeg',
    '/images/WhatsApp Image 2025-12-24 at 5.13.39 PM.jpeg',
    '/images/WhatsApp Image 2025-12-24 at 5.13.40 PM (1).jpeg',
    '/images/WhatsApp Image 2025-12-24 at 5.13.40 PM.jpeg',
    '/images/WhatsApp Image 2025-12-24 at 5.13.43 PM.jpeg',
  ];

  // Audio files - add your birthday music here
  // For now, leaving empty - add files to public/audio/ and update this array
  const audioFiles: string[] = [];

  // Calculate age
  const birthYear = 2005;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const isBirthday = new Date().getMonth() === 11 && new Date().getDate() === 25; // December 25

  const sections = [
    {
      title: "🎂 Happy Birthday! 🎂",
      content: `Today you're turning ${age}! Born on December 25, 2005`,
      color: "from-red-500 to-pink-600",
    },
    {
      title: "🎄 Christmas Baby! 🎄",
      content: "You're the best Christmas gift we could ever ask for!",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "🎉 You're Amazing! 🎉",
      content: "Another year older, another year more awesome!",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "🎈 Special Day! 🎈",
      content: "December 25th - Your birthday AND Christmas! Double celebration!",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "🎁 Here's To You! 🎁",
      content: "Wishing you the happiest birthday and an amazing year ahead!",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  useEffect(() => {
    // Auto-advance sections
    const timer = setInterval(() => {
      setCurrentSection((prev: number) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sections.length]);

  const handleAudioToggle = () => {
    if (audioFiles.length === 0) return;
    const audio = document.getElementById('background-audio') as HTMLAudioElement;
    if (audio) {
      if (audioPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {
          // Handle audio play error silently
        });
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  return (
    <main className="min-h-screen w-full overflow-hidden relative">
      {/* Background Audio */}
      {audioFiles.length > 0 && (
        <audio id="background-audio" loop>
          <source src={audioFiles[0]} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      {/* Birthday Header Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white py-3 px-4 text-center shadow-lg">
        <p className="text-lg md:text-2xl font-bold animate-pulse">
          🎂 Happy {age}th Birthday! 🎄 Born: December 25, 2005 🎂
        </p>
      </div>

      {/* Floating Confetti */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {['🎉', '🎊', '🎈', '⭐', '✨', '💫'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Full Page Sections */}
      <div className="relative h-screen w-full pt-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSection === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className={`h-full w-full bg-gradient-to-br ${section.color} flex items-center justify-center`}>
              <div className="text-center px-8 animate-fade-in">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
                  {section.title}
                </h1>
                <p className="text-2xl md:text-4xl text-white/90 drop-shadow-lg">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Gallery Section */}
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white animate-fade-in">
            Birthday Memories Through The Years 📷
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 relative">
                  {imageErrors.has(index) ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <p className="text-4xl mb-4">📸</p>
                        <p className="text-lg">Memory {index + 1}</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={img}
                      alt={`Birthday memory ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() => {
                        setImageErrors((prev) => new Set(prev).add(index));
                      }}
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Memory {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="min-h-screen bg-gradient-to-b from-black via-red-900 to-black flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="text-8xl md:text-9xl mb-8 animate-float">🎂</div>
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-2xl">
            Happy {age}th Birthday!
          </h2>
          <p className="text-3xl md:text-5xl text-white/90 mb-4 drop-shadow-lg">
            December 25, 2005
          </p>
          <p className="text-2xl md:text-4xl text-white/80 mb-12 drop-shadow-lg">
            Thanks for being the best brother ever!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-6xl mb-8">
            <span className="animate-float" style={{ animationDelay: '0s' }}>🎂</span>
            <span className="animate-float" style={{ animationDelay: '0.3s' }}>🎄</span>
            <span className="animate-float" style={{ animationDelay: '0.6s' }}>🎈</span>
            <span className="animate-float" style={{ animationDelay: '0.9s' }}>🎁</span>
            <span className="animate-float" style={{ animationDelay: '1.2s' }}>⭐</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>🎊</span>
            <span className="animate-float" style={{ animationDelay: '1.8s' }}>💫</span>
            <span className="animate-float" style={{ animationDelay: '2.1s' }}>❤️</span>
          </div>
          <p className="text-xl md:text-2xl text-white/70 italic">
            Wishing you a year filled with joy, laughter, and amazing adventures!
          </p>
        </div>
      </section>

      {/* Audio Control Button - Only show if audio files exist */}
      {audioFiles.length > 0 && (
        <button
          onClick={handleAudioToggle}
          className="fixed bottom-8 right-8 z-50 bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-all duration-300 animate-pulse-glow"
          aria-label="Toggle audio"
        >
          {audioPlaying ? (
            <span className="text-3xl">🔊</span>
          ) : (
            <span className="text-3xl">🔇</span>
          )}
        </button>
      )}

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-white w-8 animate-pulse-glow'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
        <div className="text-white text-2xl">👇</div>
      </div>
    </main>
  );
}

