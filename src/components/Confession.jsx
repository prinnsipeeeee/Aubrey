import { useState, useRef } from 'react';

export default function Confession() {
  const [answered, setAnswered] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [particles, setParticles] = useState([]);
  const audioRef = useRef(null);

  const handleYes = () => {
    setAnswered(true);
    setYesClicked(true);
    playSound();
    createFireworks();
  };

  const handleNo = () => {
    const button = document.getElementById('noBtn');
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const createFireworks = () => {
    const newParticles = [];
    const particleCount = 60;
    const symbols = ['🌸', '🌷', '🌹', '💜', '💐', '✨'];

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 5 + Math.random() * 8;

      newParticles.push({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
        delay: Math.random() * 0.1,
      });
    }

    setParticles(newParticles);

    setTimeout(() => {
      setParticles([]);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-full px-2 md:px-3 py-2 relative overflow-hidden">
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
      />

      {/* Fireworks/Bouquet Effect */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none text-2xl md:text-3xl font-bold animate-firework"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            '--vx': `${particle.vx}`,
            '--vy': `${particle.vy}`,
            animation: `firework 2.5s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.symbol}
        </div>
      ))}

      {!answered ? (
        <div className="bg-linear-to-br from-purple-50 to-violet-50 border-3 border-purple-300 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 max-w-sm md:max-w-md text-center shadow-2xl animate-fade-in relative z-10">
          {/* Flower Bouquets Top */}
          <div className="flex justify-between mb-2 md:mb-3 text-3xl md:text-4xl">
            <span className="animate-bounce">💐</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💜</span>
            <span className="animate-bounce">💐</span>
          </div>

          {/* Animated question mark */}
          <div className="text-5xl md:text-6xl mb-1 md:mb-2 animate-bounce">❓</div>

          {/* Main question */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2 md:mb-3 leading-tight">
            Will you be my girlfriend?
          </h1>

          {/* Decorative flowers */}
          <div className="flex justify-center gap-2 md:gap-3 mb-2 md:mb-3 text-xl md:text-2xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌷</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</span>
          </div>

          {/* Subtitle - Sincere */}
          <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4 font-semibold leading-relaxed">
            I would be the happiest person if you said yes 🥺
          </p>

          {/* Buttons */}
          <div className="flex gap-2 md:gap-3 justify-center mb-2 flex-wrap">
            <button
              onClick={handleYes}
              className="px-4 md:px-6 py-2 md:py-2.5 bg-linear-to-r from-purple-600 to-violet-600 text-white font-bold text-xs md:text-sm rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:-translate-y-1 uppercase tracking-wider"
            >
              💜 YES! 💜
            </button>
            <button
              id="noBtn"
              onClick={handleNo}
              className="px-4 md:px-6 py-2 md:py-2.5 bg-gray-200 text-gray-700 font-bold text-xs md:text-sm rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg uppercase tracking-wider"
            >
              No 😭
            </button>
          </div>

          <p className="text-xs text-gray-600 italic">
            (The "No" button is just for fun 😉)
          </p>

          {/* Bottom flowers */}
          <div className="flex justify-center gap-2 md:gap-3 mt-2 md:mt-3 text-lg md:text-2xl">
            <span>🌹</span>
            <span>💐</span>
            <span>🌹</span>
          </div>
        </div>
      ) : yesClicked ? (
        <div className="relative w-full max-w-sm md:max-w-md z-10">
          <div className="bg-linear-to-br from-purple-100 to-violet-100 border-4 border-purple-400 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-7 text-center shadow-2xl animate-fade-in relative">
            {/* Flower bouquets */}
            <div className="flex justify-between mb-1 md:mb-2 text-3xl md:text-4xl">
              <span className="animate-bounce">💐</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💐</span>
            </div>

            {/* Success icon */}
            <div className="text-5xl md:text-6xl mb-1 md:mb-2 animate-bounce">🎉</div>

            {/* Success title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-purple-600 mb-2 md:mb-3 leading-tight">
              YES! I'm the happiest! 💜
            </h1>

            {/* Success text - Sincere */}
            <div className="space-y-1 md:space-y-2 mb-2 md:mb-3 text-gray-700 font-semibold text-xs md:text-sm leading-relaxed">
              <p>
                You just made me the luckiest person in the world!
              </p>
              <p>
                Let's create more beautiful memories together. 
                I love you so much! 🥰
              </p>
            </div>

            {/* Celebratory flowers */}
            <div className="flex justify-center gap-2 md:gap-3 mb-2 md:mb-3 text-4xl md:text-5xl">
              <span className="animate-pulse">🌸</span>
              <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🌷</span>
              <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🌹</span>
            </div>

            {/* Purple hearts */}
            <div className="flex justify-center gap-2 md:gap-3 mb-3 text-3xl md:text-4xl">
              <span className="animate-pulse">💜</span>
              <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💜</span>
              <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💜</span>
            </div>

            {/* Bouquet shower from top */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-2 text-2xl md:text-3xl animate-fall">
              <span>💐</span>
              <span>🌸</span>
              <span>💐</span>
              <span>🌷</span>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="px-5 md:px-7 py-2 md:py-2.5 bg-linear-to-r from-purple-600 to-violet-600 text-white font-bold text-xs md:text-sm rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wider"
            >
              Replay ↻
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}