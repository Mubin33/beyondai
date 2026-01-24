'use client'
import React, { useState, useRef } from 'react';
import { BookOpen, Home } from 'lucide-react';

export default function RealisticBookReader() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');

  // Sample book data
  const book = {
    title: "আমার প্রিয় বই",
    author: "লেখক নাম",
    pages: [
      { 
        left: { title: "প্রচ্ছদ", content: "এই বইটি একটি আদর্শ উদাহরণ। আপনি এখানে যেকোনো কন্টেন্ট যোগ করতে পারবেন।" },
        right: { title: "প্রথম অধ্যায়", content: "একটি সুন্দর সকাল ছিল। পাখিরা গাইছিল আর ফুলেরা ফুটেছিল। এমন সময়ে একটি অসাধারণ ঘটনা ঘটল যা সবাইকে অবাক করে দিল। গল্পটি শুরু হয় এখান থেকে..." }
      },
      { 
        left: { title: "দ্বিতীয় অধ্যায়", content: "সেই অদ্ভুত দিনটির কথা মনে পড়ে। আকাশ ছিল নীল, মেঘেরা ভেসে বেড়াচ্ছিল আর বাতাস বইছিল মৃদু মন্দ। প্রকৃতির এই অপরূপ সৌন্দর্য দেখে মন ভরে যাচ্ছিল।" },
        right: { title: "তৃতীয় অধ্যায়", content: "গ্রামের পথ ধরে হাঁটতে হাঁটতে পৌঁছে গেলাম নদীর ধারে। নদীর জল স্বচ্ছ, তাতে সূর্যের আলো পড়ে ঝিকমিক করছে। একটি নৌকা ভেসে যাচ্ছে ধীরে ধীরে।" }
      },
      { 
        left: { title: "চতুর্থ অধ্যায়", content: "বাজারে গিয়ে দেখি অনেক মানুষ। সবাই ব্যস্ত নিজের কাজে। দোকানদাররা তাদের পণ্য বিক্রি করছে, ক্রেতারা দর কষাকষি করছে। এক জীবন্ত পরিবেশ।" },
        right: { title: "পঞ্চম অধ্যায়", content: "সন্ধ্যা হয়ে এল। পশ্চিম আকাশে সূর্য অস্ত যাচ্ছে লাল আভায়। পাখিরা ফিরে যাচ্ছে নিজেদের বাসায়। প্রকৃতি যেন প্রস্তুত হচ্ছে রাতের জন্য।" }
      },
      { 
        left: { title: "ষষ্ঠ অধ্যায়", content: "রাতের আঁধার নেমে এল। চাঁদ উঠেছে আকাশে, তারারা জ্বলছে টিমটিম করে। দূর থেকে ভেসে আসছে ঝিঁঝি পোকার ডাক। শান্ত, নিরিবিলি এক রাত।" },
        right: { title: "সপ্তম অধ্যায়", content: "সকাল হলো আবার। নতুন একটি দিন শুরু হলো। নতুন স্বপ্ন, নতুন আশা নিয়ে। জীবন এভাবেই চলতে থাকে, একটির পর একটি দিন।" }
      },
      { 
        left: { title: "অষ্টম অধ্যায়", content: "মনে পড়ে শৈশবের দিনগুলো। খেলাধুলা, পড়াশোনা, বন্ধুবান্ধব - সব কিছু ছিল এত সহজ। সময় কত দ্রুত চলে যায়, কেউ বুঝতেই পারে না।" },
        right: { title: "সমাপনী", content: "এই বইয়ের শেষে এসে একটি কথাই বলতে চাই - জীবনটা সুন্দর। প্রতিটি মুহূর্ত উপভোগ করুন। ধন্যবাদ পড়ার জন্য। আশা করি আবার দেখা হবে।" }
      }
    ]
  };

  const totalPages = book.pages.length;

  const flipToNext = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const flipToPrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10" />
            {book.title}
          </h1>
          <p className="text-gray-300">লেখক: {book.author}</p>
          <p className="text-gray-400 text-sm mt-2">পেজের যেকোনো দিকে ক্লিক করে পাতা উল্টান</p>
        </div>

        {/* Book Container */}
        <div className="relative perspective-container">
          <div className="book-wrapper">
            {/* Book Shadow */}
            <div className="absolute inset-0 bg-black/30 blur-2xl transform translate-y-8"></div>
            
            {/* The Book */}
            <div className="book relative">
              {/* Left Page */}
              <div 
                className="page left-page"
                onClick={flipToPrev}
                style={{ cursor: currentPage > 0 ? 'pointer' : 'default' }}
              >
                <div className="page-content">
                  <div className="page-number">পাতা {currentPage * 2 + 1}</div>
                  <h2 className="text-2xl font-bold mb-4 text-amber-800">
                    {book.pages[currentPage].left.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {book.pages[currentPage].left.content}
                  </p>
                  {currentPage > 0 && (
                    <div className="absolute bottom-4 left-4 text-amber-600 text-sm font-semibold">
                      ← আগের পাতা
                    </div>
                  )}
                </div>
              </div>

              {/* Right Page with Flip Effect */}
              <div 
                className={`page right-page ${isFlipping ? (flipDirection === 'next' ? 'flipping-next' : 'flipping-prev') : ''}`}
                onClick={flipToNext}
                style={{ cursor: currentPage < totalPages - 1 ? 'pointer' : 'default' }}
              >
                <div className="page-content">
                  <div className="page-number">পাতা {currentPage * 2 + 2}</div>
                  <h2 className="text-2xl font-bold mb-4 text-amber-800">
                    {book.pages[currentPage].right.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {book.pages[currentPage].right.content}
                  </p>
                  {currentPage < totalPages - 1 && (
                    <div className="absolute bottom-4 right-4 text-amber-600 text-sm font-semibold">
                      পরের পাতা →
                    </div>
                  )}
                </div>
                
                {/* Back of the flipping page */}
                {isFlipping && flipDirection === 'next' && currentPage < totalPages - 1 && (
                  <div className="page-back">
                    <div className="page-content">
                      <div className="page-number">পাতা {(currentPage + 1) * 2 + 1}</div>
                      <h2 className="text-2xl font-bold mb-4 text-amber-800">
                        {book.pages[currentPage + 1].left.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {book.pages[currentPage + 1].left.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Spine */}
              <div className="book-spine"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isFlipping && i !== currentPage) {
                    setIsFlipping(true);
                    setFlipDirection(i > currentPage ? 'next' : 'prev');
                    setTimeout(() => {
                      setCurrentPage(i);
                      setIsFlipping(false);
                    }, 600);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentPage
                    ? 'bg-amber-400 w-8'
                    : 'bg-gray-500 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
          <span className="text-white text-sm">
            {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 2000px;
        }

        .book-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 600px;
        }

        .book {
          width: 900px;
          height: 600px;
          display: flex;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }

        .book:hover {
          transform: translateY(-5px);
        }

        .page {
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, #fefefe 0%, #f9f9f9 100%);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          position: relative;
          transition: all 0.3s ease;
        }

        .left-page {
          border-radius: 10px 0 0 10px;
          box-shadow: inset -5px 0 10px rgba(0, 0, 0, 0.1);
        }

        .right-page {
          border-radius: 0 10px 10px 0;
          box-shadow: inset 5px 0 10px rgba(0, 0, 0, 0.1);
          transform-origin: left center;
          transform-style: preserve-3d;
          position: relative;
        }

        .right-page:hover {
          box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
        }

        .flipping-next {
          animation: flipNext 0.6s ease-in-out forwards;
        }

        .flipping-prev {
          animation: flipPrev 0.6s ease-in-out forwards;
        }

        @keyframes flipNext {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }

        @keyframes flipPrev {
          0% {
            transform: rotateY(-180deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        .page-back {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(to left, #fefefe 0%, #f9f9f9 100%);
          transform: rotateY(180deg);
          backface-visibility: hidden;
          border-radius: 0 10px 10px 0;
        }

        .page-content {
          padding: 60px 40px;
          height: 100%;
          overflow: auto;
          backface-visibility: hidden;
        }

        .page-number {
          position: absolute;
          bottom: 30px;
          font-size: 12px;
          color: #999;
        }

        .left-page .page-number {
          left: 40px;
        }

        .right-page .page-number {
          right: 40px;
        }

        .book-spine {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 10px;
          background: linear-gradient(to right, #ccc, #999, #ccc);
          transform: translateX(-50%);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        @media (max-width: 1024px) {
          .book {
            width: 700px;
            height: 500px;
          }
          .page-content {
            padding: 40px 30px;
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .book {
            width: 500px;
            height: 400px;
          }
          .page-content {
            padding: 30px 20px;
            font-size: 13px;
          }
          .page-content h2 {
            font-size: 18px;
          }
        }

        @media (max-width: 640px) {
          .book {
            width: 90vw;
            height: 60vh;
          }
          .page-content {
            padding: 20px 15px;
            font-size: 12px;
          }
          .page-content h2 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}