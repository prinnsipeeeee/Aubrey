import { useState, useEffect, useRef } from 'react';
import Letter from './components/Letter';
import PhotoCarousel from './components/PhotoCarousel';
import Confession from './components/Confession';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const CORRECT_PASSWORD = '091004'; 

  useEffect(() => {
    if (isLoggedIn && audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch((err) => {
        console.log('Autoplay blocked, waiting for user interaction');
      });
    }
  }, [isLoggedIn, volume]);

  const handleLogin = (e) => {
    e.preventDefault();
    const cleanedPassword = password.replace(/[\/-]/g, '');
    
    if (cleanedPassword === CORRECT_PASSWORD) {
      setIsLoggedIn(true);
      setError('');
      setPassword('');
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = volume;
          audioRef.current.play().catch((err) => {
            console.log('Music play failed:', err);
          });
        }
      }, 100);
    } else {
      setError('Wrong birthday! 😔');
      setPassword('');
    }
  };

  const nextSection = () => {
    if (currentSection < 2) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-100 via-violet-50 to-purple-100 flex items-center justify-center px-4">
        <div className="hidden sm:block">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full backdrop-blur-md bg-opacity-95 border-3 border-purple-200">
            <div className="text-center mb-8">
              <h1 className="text-6xl mb-4">💜</h1>
              <h2 className="text-3xl font-bold text-purple-600 mb-2">Secret Message</h2>
              <p className="text-gray-600">Enter your man's birthday to open</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="MM/DD/YYYY"
                  className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 transition-colors text-center tracking-widest text-lg"
                  autoFocus
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Hint: September! 🎂
                </p>
              </div>

              {error && (
                <div className="text-purple-600 text-sm text-center font-semibold bg-purple-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-600 to-violet-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
              >
                Open 💜
              </button>
            </form>
          </div>
        </div>

        <div className="sm:hidden text-center">
          <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg max-w-sm">
            <p className="text-xl text-gray-700 font-semibold">
              📱 Please open on tablet or laptop
            </p>
            <p className="text-gray-600 mt-2">This gift is best viewed on a bigger screen</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-violet-50 overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        src="/mysong.mp3"
      />

      <div className="hidden sm:block">
        {/* Volume Control */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-white bg-opacity-90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-purple-200">
          <span className="text-lg">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (audioRef.current) audioRef.current.volume = parseFloat(e.target.value);
            }}
            className="w-24 cursor-pointer accent-purple-600"
          />
          <span className="text-xs text-gray-600 min-w-8">{Math.round(volume * 100)}%</span>
        </div>

        {/* Section Container - COMPACT */}
        <div className="min-h-screen flex flex-col items-center justify-center p-2 md:p-3 lg:p-4">
          <div className="w-full max-w-4xl">
            {/* Section Indicator */}
            <div className="flex justify-center gap-3 mb-4 md:mb-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`rounded-full transition-all ${
                    index === currentSection
                      ? 'bg-purple-600 w-8 h-3 md:w-10'
                      : 'bg-purple-300 w-3 h-3 hover:bg-purple-400'
                  }`}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>

            {/* Content Sections - FIXED HEIGHT */}
            <div className="relative h-125 md:h-137.5 lg:h-150">
              {currentSection === 0 && <Letter />}
              {currentSection === 1 && <PhotoCarousel />}
              {currentSection === 2 && <Confession />}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-4 md:mt-6 gap-3">
              <button
                onClick={prevSection}
                disabled={currentSection === 0}
                className="px-3 md:px-5 py-2 md:py-2 bg-white border-2 border-purple-300 text-purple-600 font-bold rounded-lg hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xs md:text-sm"
              >
                ← Previous
              </button>

              <span className="text-gray-600 font-semibold text-xs md:text-sm">
                {currentSection + 1} / 3
              </span>

              <button
                onClick={nextSection}
                disabled={currentSection === 2}
                className="px-3 md:px-5 py-2 md:py-2 bg-linear-to-r from-purple-600 to-violet-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xs md:text-sm"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fallback */}
      <div className="sm:hidden min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-700 font-bold">📱</p>
          <p className="text-xl text-gray-700 font-semibold mt-4">
            Please open on tablet or laptop
          </p>
          <p className="text-gray-600 mt-2">This gift works best on a bigger screen 💻</p>
        </div>
      </div>
    </div>
  );
}