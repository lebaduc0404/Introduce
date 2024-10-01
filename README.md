import { useEffect, useRef, useState } from "react";

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
  ];

  const LinkDownload = "abc123";

  const scrollRef = useRef<HTMLDivElement>(null);
    const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext1 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack1 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext1();
      } else if (e.key === "ArrowLeft") {
        handleBack1();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close modal if click outside the image
  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [currentIndex]);

  return (
    <>
      <section className="">
        <a href={LinkDownload}>
          <img
            className="max-w-[200px] w-[auto] mx-auto block h-[54px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZDy2VARzMAh1et9p-Jffbtvsi1z7HZkLQyFMF2AGih3uQA4js7e15kN7SypixzIc6PU&usqp=CAU"
            alt=""
          />
        </a>

        <div className="w-[100%] max-w-[1503px] mx-auto relative overflow-hidden px-10 mt-[20px]">
          <div
            ref={scrollRef}
            className="w-[100%] max-w-[1000px] h-auto flex-shrink-0 flex-grow-0 flex-auto flex gap-[10px] overflow-x-auto scroll-smooth no-scrollbar"
          >
            {img.map((img, index) => (
              <a
                key={index}
                href={img}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(index);
                }}
                className="w-[100%] max-w-[200px] h-auto flex-shrink-0 flex-grow-0 flex-auto flex gap-[10px] overflow-x-auto scroll-smooth no-scrollbar"
              >
                <img
                  key={index}
                  className="w-[100%] max-w-[200px] mx-auto block"
                  src={img}
                  alt=""
                />
              </a>
            ))}
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 modal-overlay"
              onClick={handleClickOutside}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <div className="max-w-[97.65625vw] w-[100%] relative flex flex-col items-center">
                <img
                  className="max-w-[260px] w-[100%] h-auto"
                  src={img[currentIndex]}
                  alt=""
                />
                <button
                  className="absolute left-2 mt-[19.53125vw] text-white text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
                  onClick={handleBack1}
                >
                  &#10094;
                </button>
                <button
                  className="absolute right-2 mt-[19.53125vw] text-white text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
                  onClick={handleNext1}
                >
                  &#10095;
                </button>

                <div className=" flex max-w-[97.65625vw] w-[100%] max-h-[27.100271002710027vh] h-[100%] items-center justify-center gap-[0.3255208333333333vw] mt-[2.168021680216802vh]">
                  {img.map((thumbnail, index) => (
                    <img
                      ref={(el) => (thumbnailRefs.current[index] = el)}
                      key={index}
                      src={thumbnail}
                      alt=""
                      className={`max-w-[69px] w-[100%] max-h-[100px] h-[100%] cursor-pointer transition-all duration-300 ${
                        currentIndex === index
                          ? "border-4 border-white opacity-100"
                          : "opacity-50"
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductInformation;