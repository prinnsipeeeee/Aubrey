import { useState, useEffect } from 'react';

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      id: 1,
      src: '8.jpg',
      caption: 'Our first moment together'
    },
    {
      id: 2,
      src: '1.jpg',
      caption: 'You make me smile'
    },
    {
      id: 3,
      src: '2.jpg',
      caption: 'Forever and always'
    },
    {
      id: 4,
      src: '3.jpg',
      caption: 'With all my love'
    },
    {
      id: 5,
      src: '5.jpg',
      caption: 'I love you, Jo!'
    },
    {
      id: 6,
      src: '6.jpg',
      caption: 'My wife!'
    },
    {
      id: 7,
      src: '7.jpg',
      caption: 'Pangako ko sayo na mahalin ka araw-araw'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full px-2 py-2">
      <div className="w-full max-w-2xl">
        {/* Flower decoration top */}
        <div className="text-center text-2xl md:text-3xl mb-2 mt-2">💐</div>

        {/* Photo Display */}
        <div className="relative">
          <div className="relative w-full aspect-4/3 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-3 border-purple-200 bg-white">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {/* Photo overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2 md:p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs md:text-sm font-semibold text-center">
                {photos[currentIndex].caption}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-10 md:left-13.75 top-1/2 -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 bg-white/90 hover:bg-white text-purple-600 text-lg md:text-xl rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-md border-2 border-purple-300"
          >
            ❮
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-10 md:right-13.75 top-1/2 -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 bg-white/90 hover:bg-white text-purple-600 text-lg md:text-xl rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-md border-2 border-purple-300"
          >
            ❯
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-1.5 mt-2 md:mt-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-purple-600 w-5 md:w-6 h-2 rounded-lg'
                    : 'bg-purple-300 w-2 h-2 hover:bg-purple-400'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>

          {/* Photo Counter */}
          <div className="text-center text-gray-600 text-xs md:text-sm font-semibold mt-1.5">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>

        {/* Gallery Info */}
        <div className="text-center mt-2 md:mt-3">
          <h2 className="text-lg md:text-xl font-bold text-purple-600 mb-0.5">📸 Our Memories</h2>
          <p className="text-gray-600 text-xs md:text-sm">Our favorite moments together</p>
        </div>
      </div>
    </div>
  );
}