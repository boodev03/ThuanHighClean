import { VideoSection } from "@/types/Service";
import { useState, useRef } from "react";

interface IProps {
  videoContent: VideoSection;
}

export default function Video({ videoContent }: IProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-6">
      {/* Header - Giữ nguyên như cũ */}
      <div className="text-center mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-4 sm:mb-6 lg:mb-8">
          {videoContent.title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          {videoContent.description}
        </p>
      </div>

      {/* Video Player - Thiết kế mới đẹp hơn */}
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          {/* Decorative Background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-red-500/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

          {/* Video Container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-300">
            <div
              className="relative w-full cursor-pointer"
              style={{ paddingBottom: "56.25%" }}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
              onClick={handlePlayPause}
            >
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controlsList="nodownload"
                preload="metadata"
                poster={videoContent.thumbnailUrl}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src={videoContent.videoUrl} type="video/mp4" />
                <source
                  src={videoContent.videoUrl.replace(".mp4", ".webm")}
                  type="video/webm"
                />
                <source src={videoContent.videoUrl} type="video/quicktime" />
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>

              {/* Play Button Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  showControls && !isPlaying ? "opacity-100" : "opacity-0"
                } bg-gradient-to-t from-black/40 via-transparent to-black/20`}
              >
                <button
                  className="group/btn relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-2xl transform transition-all duration-300 hover:scale-110 hover:bg-orange-600 hover:shadow-orange-600/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause();
                  }}
                >
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-full bg-orange-600/30 animate-ping opacity-75"></span>

                  {/* Play Icon */}
                  <svg
                    className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-orange-600 group-hover/btn:text-white transition-colors duration-300 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Pause Overlay */}
              {isPlaying && showControls && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <button
                    className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayPause();
                    }}
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Custom Controls Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent transition-all duration-300 ${
                  showControls
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayPause();
                    }}
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    {isPlaying ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  <span className="text-white text-xs sm:text-sm font-medium min-w-[40px]">
                    {formatTime(currentTime)}
                  </span>

                  <div
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      onMouseDown={(e) => e.stopPropagation()}
                      className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-orange-600 hover:accent-orange-500"
                      style={{
                        background: `linear-gradient(to right, #ea580c 0%, #ea580c ${
                          (currentTime / duration) * 100
                        }%, rgba(255,255,255,0.3) ${
                          (currentTime / duration) * 100
                        }%, rgba(255,255,255,0.3) 100%)`,
                      }}
                    />
                  </div>

                  <span className="text-white text-xs sm:text-sm font-medium min-w-[40px]">
                    {formatTime(duration)}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (videoRef.current) {
                        videoRef.current.requestFullscreen();
                      }
                    }}
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Info - Giữ nguyên như cũ */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            Video HD chất lượng cao
          </div>
        </div>
      </div>
    </section>
  );
}
