import React, { useEffect, useState } from "react";

const ProductInformation = () => {
  const img = [
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/01-nutrify-camera-preview-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/02-nutrify-photo-taken-of-pineapple-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/03-nutrify-pineapple-nutrition-information.png",
    "https://nutrify.app/images/images-1.2.1/04-nutrify-set-calorie-and-macro-goal-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/05-nutrify-macronutrient-summary.png",
    "https://nutrify.app/images/images-1.2.1/06-nutrify-stats-over-time.png",
    "https://nutrify.app/images/images-1.2.1/07-nutrify-saved-food-diary.png",
    "https://nutrify.app/images/images-1.2.1/08-nutrify-nutridex-screenshot.png",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Trạng thái cho hiệu ứng chuyển động

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
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handleBack1 = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? img.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
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
                  alt=""
                />
              </a>
            ))}
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black flex justify-center items-center z-50"
              onTouchStart={handleStart}
              onTouchEnd={handleEnd}
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                  className={`w-auto max-w-full h-auto max-h-full relative transition-transform duration-300 ease-in-out transform ${
                    isTransitioning
                      ? "scale-95 opacity-75"
                      : "scale-100 opacity-100"
                  }`}
                  src={img[currentIndex]}
                  alt="modal view"
                />
              <button
                className="absolute left-2 text-white text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
                onClick={handleBack1}
              >
                &#10094;
              </button>
              <button
                className="absolute right-2 text-white text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
                onClick={handleNext1}
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductInformation;
