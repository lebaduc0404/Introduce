import React, { useEffect, useRef, useState } from "react";

import Slide0 from "../../image/Slide-0.png";
import Slide1 from "../../image/Slide-1.png";
import Slide2 from "../../image/Slide-2.png";
import Slide3 from "../../image/Slide-3.png";
import Slide4 from "../../image/Slide-4.png";
import Slide5 from "../../image/Slide-5.png";
import Slide6 from "../../image/Slide-6.png";
import Slide7 from "../../image/Slide-7.png";
import Slide8 from "../../image/Slide-8.png";

const img = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
];

const ProductInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Transition state

  let startX = 0;
  let isDragging = false;

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext1 = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex === img.length - 1 ? 0 : prevIndex + 1) % img.length
    );
    setIsTransitioning(false);
  };

  const handleBack1 = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
    setIsTransitioning(false);
  };

  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX =
      e.type === "touchstart"
        ? (e as React.TouchEvent).changedTouches[0].clientX
        : (e as React.MouseEvent).clientX;
    isDragging = true;
  };

  const handleEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    isDragging = false;

    const endX =
      e.type === "touchend"
        ? (e as React.TouchEvent).changedTouches[0].clientX
        : (e as React.MouseEvent).clientX;

    if (startX - endX > 50) {
      handleNext1();
    } else if (endX - startX > 50) {
      handleBack1();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext1();
      } else if (e.key === "ArrowLeft") {
        handleBack1();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleThumbnails = Math.min(10, img.length);
   const getVisibleThumbnails = () => {
     if (window.innerWidth > 900 || img.length <= 5) {
       return img;
     } else {
       const half = Math.floor(visibleThumbnails / 2);
       const start = Math.max(currentIndex - half, 0);
       const end = Math.min(currentIndex + half, img.length - 1);
      //  return img.slice(start, end + 1);
       return img.slice(start, end + 1).slice(0, 5);
     }
   };

  return (
    <>
      <section className="">
        <div className="w-[100%] max-w-[1503px] mx-auto relative overflow-hidden px-10 mt-[20px]">
          <div className="w-[100%] max-w-[1000px] h-auto flex-shrink-0 flex-grow-0 flex-auto flex gap-[10px] overflow-x-auto scroll-smooth no-scrollbar">
            {img.map((img, index) => (
              <a
                href={img}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(index);
                }}
                className="w-[100%] max-w-[200px] h-auto flex-shrink-0 flex-grow-0 flex-auto flex gap-[10px] overflow-x-auto scroll-smooth no-scrollbar"
              >
                <img
                  className="w-[100%] max-w-[200px] mx-auto block"
                  src={img}
                  alt="Image error"
                />
              </a>
            ))}
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
              onTouchStart={handleStart}
              onTouchEnd={handleEnd}
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
            >
              <button
                className="absolute top-1 right-2 text-white text-4xl w-[30px] h-[30px] flex items-center justify-center rounded-full z-50"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="flex flex-col items-center">
                <img
                  className={`w-auto max-w-full h-auto max-h-[610px] relative transition-transform duration-300 ease-in-out transform ${
                    isTransitioning
                      ? "scale-95 opacity-75"
                      : "scale-100 opacity-100"
                  }`}
                  src={img[currentIndex]}
                  alt="Modal view"
                />
                <div className="flex w-[720px] gap-[12px] mt-5 justify-center overflow-hidden relative flex-shrink-0">
                  {getVisibleThumbnails().map((thumbnail, index) => (
                    <div
                      key={index}
                      className="max-w-[69px] w-[100%] max-h-[100px] h-[100%]"
                    >
                      <img
                        ref={(el) => (thumbnailRefs.current[index] = el)}
                        src={thumbnail}
                        alt=""
                        className={`max-w-[69px] w-[100%] max-h-[100px] h-[100%] cursor-pointer transition-all duration-300 ${
                          thumbnail === img[currentIndex]
                            ? "border-4 border-white opacity-100"
                            : "opacity-50"
                        }`}
                        onClick={() =>
                          handleThumbnailClick(img.indexOf(thumbnail))
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="absolute left-2 text-white text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
                onClick={handleBack1}
              >
                <div className="mb-[3.3px] mr-[3.3px]">&#10094;</div>
              </button>
              <button
                className="absolute right-2 text-white text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
                onClick={handleNext1}
              >
                <div className="mb-[3.3px] ml-[3.3px]">&#10095;</div>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductInformation;
