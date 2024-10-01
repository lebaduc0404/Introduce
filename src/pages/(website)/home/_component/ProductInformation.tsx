import { useEffect, useRef, useState } from "react";

const ProductInformation = () => {
  const img = [
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/01-nutrify-camera-preview-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/02-nutrify-photo-taken-of-pineapple-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
  ];

  const LinkDownload = "abc123";

  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

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

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 210, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -210, behavior: "smooth" });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
    }

    checkScrollPosition();

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);
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
          {!atStart && (
            <button
              onClick={handleBack}
              className="left-0 absolute top-[50%] p-[10px] cursor-pointer bg-gray-500 text-white transform -translate-y-1/2 z-10"
            >
              &lt;
            </button>
          )}
          {!atEnd && (
            <button
              onClick={handleNext}
              className="right-0 absolute top-[50%] p-[10px] cursor-pointer bg-gray-500 text-white transform -translate-y-1/2 z-10"
            >
              &gt;
            </button>
          )}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                className="w-auto max-w-full h-auto max-h-full"
                src={img[currentIndex]}
                alt=""
              />
              <button
                className="absolute left-2 text-black text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
                onClick={handleBack1}
              >
                &#10094;
              </button>
              <button
                className="absolute right-2 text-black text-3xl w-[38px] h-[38px] flex items-center justify-center border-2 border-white rounded-full"
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
