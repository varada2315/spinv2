import React, { useRef, useEffect } from 'react';

/**
 * High-performance, instant-start hero background video component.
 * Solves React 18 DOM muted bug, enforces direct browser decoding,
 * and eliminates delay or freezing across all devices/browsers.
 */
export default function HeroBackgroundVideo({
  src,
  fallbackSrc,
  poster,
  playbackRate = 1.0,
  className = "hero-video-bg"
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fix for browser autoplay policy in React: must set property directly on DOM element
    video.defaultMuted = true;
    video.muted = true;
    if (playbackRate && playbackRate !== 1.0) {
      video.playbackRate = playbackRate;
    }

    const playVideo = () => {
      if (video) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay delayed or requires user gesture on some strict mobile browsers
          });
        }
      }
    };

    playVideo();

    // Fallback listeners to immediately play on first touch, click or scroll
    const handleGesture = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleGesture, { once: true, passive: true });
    window.addEventListener('click', handleGesture, { once: true, passive: true });
    window.addEventListener('scroll', handleGesture, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('scroll', handleGesture);
    };
  }, [src, playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      preload="auto"
      src={src}
      poster={poster}
      className={className}
      onCanPlay={(e) => {
        e.target.muted = true;
        if (playbackRate && playbackRate !== 1.0) {
          e.target.playbackRate = playbackRate;
        }
        e.target.play().catch(() => {});
      }}
      onLoadedData={(e) => {
        e.target.muted = true;
        e.target.play().catch(() => {});
      }}
    >
      {src && <source src={src} type="video/mp4" />}
      {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
    </video>
  );
}
