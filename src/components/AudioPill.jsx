import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

export default function AudioPill({ compact = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/humming-01.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay may be blocked by browser policy
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={togglePlay}
      className={`group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs transition-all duration-200 border ${
        isPlaying
          ? 'bg-[#FDB913]/15 text-[#FDB913] border-[#FDB913]/40 shadow-sm shadow-[#FDB913]/20'
          : 'text-neutral-400 hover:text-neutral-200 border-white/10 hover:border-white/20 hover:bg-white/5'
      }`}
      title={isPlaying ? 'Pause Ambient Nasheed' : 'Play Ambient Nasheed'}
      aria-label="Toggle background audio"
    >
      {isPlaying ? (
        <div className="flex items-center gap-0.5 h-3">
          <span className="w-0.5 h-3 bg-[#FDB913] rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-0.5 h-2 bg-[#FDB913] rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-0.5 h-3.5 bg-[#FDB913] rounded-full animate-bounce [animation-delay:-0.45s]" />
          <span className="w-0.5 h-1.5 bg-[#FDB913] rounded-full animate-bounce" />
        </div>
      ) : (
        <Music className="w-3.5 h-3.5" />
      )}

      {!compact && (
        <span className="hidden xl:inline text-[11px] font-medium tracking-wide">
          {isPlaying ? 'Nasheed' : 'Ambient'}
        </span>
      )}

      {isPlaying && (
        <span
          onClick={toggleMute}
          className="ml-0.5 p-0.5 rounded hover:bg-[#FDB913]/20 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3 h-3 text-red-400" /> : <Volume2 className="w-3 h-3" />}
        </span>
      )}
    </button>
  );
}
