"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./download.css";

export default function DownloadPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const screenshots = [
    "/app/screenshot/home.webp",
    "/app/screenshot/settings.webp",
    "/app/screenshot/debug.webp",
    "/app/screenshot/firmware-update.webp",
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, screenshots.length]);

  const getSlideClass = (index: number) => {
    if (index === currentIndex) return "active";
    if (index === (currentIndex - 1 + screenshots.length) % screenshots.length)
      return "prev";
    if (index === (currentIndex + 1) % screenshots.length) return "next";
    if (index < currentIndex) return "hidden-prev";
    return "hidden-next";
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen download-page">
      {/* Background Decorations */}
      <div className="bg-decoration">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <Image
              src="/logo.webp"
              alt="Synrise"
              width={40}
              height={40}
              className="logo-img"
            />
          </div>
          <nav className="nav">
            <Link href="/" className="nav-link">
              企业官网
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {/* Left Column - App Info */}
          <div className="left-column">
            {/* App Icon */}
            <div className="app-icon-wrapper">
              <div className="app-icon">
                <Image
                  src="/app/app-icon.webp"
                  alt="Synrise App"
                  width={160}
                  height={160}
                />
              </div>
            </div>

            {/* App Title */}
            <h1 className="app-title">Synrise App</h1>

            {/* Short Description */}
            <div className="description">
              <p>
                Synrise App 是 Synrise
                智能假肢的官方配套应用。通过蓝牙连接，您可以轻松调节假肢参数、进行固件升级、查看使用数据等，让智能假肢的使用更加便捷高效。
              </p>
            </div>

            {/* Download Buttons */}
            <div className="download-section">
              <div className="download-buttons">
                <button
                  className="download-btn primary"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="btn-text">
                    <span className="btn-label">Download on the</span>
                    <span className="btn-store">App Store</span>
                  </div>
                </button>
                <button
                  className="download-btn primary"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="btn-text">
                    <span className="btn-label">GET IT ON</span>
                    <span className="btn-store">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Screenshots */}
          <div className="right-column">
            <div
              className="screenshots-carousel"
              ref={carouselRef}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <button
                className="carousel-nav carousel-nav-prev"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={2} />
              </button>
              <div className="carousel-container">
                <div className="carousel-track">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${getSlideClass(index)}`}
                      onClick={handleNext}
                    >
                      <Image
                        src={screenshot}
                        alt={`App截图 ${index + 1}`}
                        width={340}
                        height={680}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="carousel-nav carousel-nav-next"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6" strokeWidth={2} />
              </button>
              <div className="carousel-dots">
                {screenshots.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="#" className="footer-link">
                隐私政策
              </Link>
              <span className="dot">•</span>
              <Link href="#" className="footer-link">
                用户协议
              </Link>
              <span className="dot">•</span>
              <Link href="#" className="footer-link">
                帮助中心
              </Link>
            </div>
            <div className="footer-copyright">
              © 2025 Synrise. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* Coming Soon Modal */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>即将上线</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Synrise App 即将上线，敬请期待！</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
