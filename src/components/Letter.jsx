import { useState, useRef } from 'react';

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleOpenLetter = () => {
    setIsOpen(true);
    playSound();
  };

  if (!isOpen) {
    // Closed Envelope/Letter View
    return (
      <div className="flex justify-center items-center h-full px-4 py-6 md:py-8">
        <audio
          ref={audioRef}
          src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDGH0fPTgjMGHm7A7+OZUSIO"
        />

        <div className="w-full max-w-md">
          {/* Closed Envelope */}
          <div className="bg-linear-to-br from-yellow-50 to-amber-50 rounded-lg shadow-2xl p-8 relative overflow-hidden border-2 border-purple-200">
            {/* Envelope flap effect */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-amber-100 to-amber-50 transform -skew-y-2"></div>

            {/* Main content */}
            <div className="text-center space-y-6 pt-4">
              {/* Flower bouquets */}
              <div className="flex justify-between text-4xl md:text-5xl">
                <span>💐</span>
                <span>💜</span>
                <span>💐</span>
              </div>

              {/* Letter icon */}
              <div className="text-6xl md:text-7xl animate-bounce">💌</div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Love Letter
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 text-lg">
                A special message just for you
              </p>

              {/* Flower decorations */}
              <div className="flex justify-center gap-4 text-2xl md:text-3xl">
                <span className="animate-pulse">🌸</span>
                <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🌷</span>
                <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🌸</span>
              </div>

              {/* Open button */}
              <button
                onClick={handleOpenLetter}
                className="px-8 md:px-10 py-3 md:py-4 text-white font-bold text-base md:text-lg rounded-full bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
              >
                💜 Open Letter
              </button>

              {/* Bottom flowers */}
              <div className="flex justify-center gap-3 md:gap-4 text-3xl md:text-4xl">
                <span>🌹</span>
                <span>💐</span>
                <span>🌹</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Open Letter - Notebook/Book Spread View
  return (
    <div className="flex justify-center items-center h-full px-2 md:px-4 py-4 md:py-6">
      <audio
        ref={audioRef}
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBji+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDGH0fPTgjMGHm7A7+OZUSIO"
      />

      <div className="w-full max-w-4xl">
        {/* Notebook/Book spread container */}
        <div className="blinear-to-br from-purple-100 via-white to-purple-100 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 border-4 border-purple-300 h-120 md:h-130 lg:h-140 relative overflow-y-auto">

          {/* Left Page & Right Page Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 h-full">
            {/* Left Page */}
            <div className="blinear-to-b from-white to-amber-50 rounded-lg p-5 md:p-7 relative shadow-md border-l-4 border-purple-300 animate-fade-in">
              {/* Flower decoration */}
              <div className="absolute top-3 right-3 text-3xl md:text-4xl opacity-30">
                💐
              </div>

              {/* Left page content */}
              <div className="space-y-3 md:space-y-4">
                {/* Decorative line */}
                <div className="h-1 w-12 blinear-to-r from-purple-400 to-violet-400 rounded-full"></div>

                {/* Flower icon */}
                <div className="text-3xl md:text-4xl">🌸</div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-purple-600">
                  To My Aubrey
                </h2>

                {/* Content */}
                <div className="text-xs md:text-sm text-gray-700 leading-relaxed font-serif space-y-2">
                  <p>
                    Hi, Jo! Gusto ko lang magpasalamat sa lahat ng ginawa mo para sa akin. I truly appreciate your patience, understanding, and yung willingness mong mag-risk para sa isang taong katulad ko, and I'm genuinely grateful na nakilala kita.
                  </p>
                  <p>
                    Every moment with you feels special. From your smile to the way you laugh, everything about you makes me happy.
                  </p>
                  <p className="italic text-purple-500 font-medium text-xs md:text-sm">
                    You've become such an important part of my life...
                  </p>
                </div>

                {/* Decorative flowers */}
                <div className="flex gap-2 text-lg md:text-xl pt-2">
                  <span>🌷</span>
                  <span>🌸</span>
                  <span>🌹</span>
                </div>

                {/* Page number */}
                <div className="text-center text-gray-400 text-xs mt-3 pt-3 border-t border-purple-200">
                  Page 1
                </div>
              </div>
            </div>

            {/* Right Page */}
            <div className="bg-linear-to-b from-white to-amber-50 rounded-lg p-5 md:p-7 relative shadow-md border-r-4 border-purple-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Flower decoration */}
              <div className="absolute top-3 left-3 text-3xl md:text-4xl opacity-30">
                💐
              </div>

              {/* Right page content */}
              <div className="space-y-3 md:space-y-4">
                {/* Decorative line */}
                <div className="h-1 w-12 bg-linear-to-r from-purple-400 to-violet-400 rounded-full"></div>

                {/* Flower icon */}
                <div className="text-3xl md:text-4xl">🌷</div>

                {/* Content */}
                <div className="text-xs md:text-sm text-gray-700 leading-relaxed font-serif space-y-2">
                  <p>
                    I just want you to know na kahit anong mangyari, pipiliin kita. Naramdaman ko kung gaano ka kasincere nung sinabi mong gusto mo ako, kaya pagpasensyahan mo na ako sa mga oras na nalilito ako—mahal na kita, Jo.
                  </p>
                  <p>
                    I want to spend more time with you, create more memories, and build something beautiful together, habang sabay nating hinahayaan si Lord na maging center ng relationship natin.
                  </p>
                  <p className="text-lg md:text-xl font-bold text-purple-600 italic">
                    I love you so much, Aubrey!
                  </p>
                </div>

                {/* Signature area */}
                <div className="pt-3 border-t-2 border-purple-200 mt-4">
                  <p className="text-right font-serif text-purple-600 text-base md:text-lg">
                    Yours truly 💜
                  </p>
                </div>

                {/* Page number */}
                <div className="text-center text-gray-400 text-xs mt-3 pt-3 border-t border-purple-200">
                  Page 2
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative hearts */}
        <div className="flex justify-center gap-3 md:gap-4 mt-3 text-2xl md:text-3xl">
          <span className="animate-pulse">💜</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🌸</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💜</span>
        </div>

        {/* Close/Back button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 md:px-8 py-2 md:py-3 bg-white border-2 border-purple-300 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition-all duration-300 text-sm md:text-base"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}