import { useEffect, useRef, useState } from "react";

const ProductInformation = () => {
  const img = [
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
    "https://nutrify.app/images/images-1.2.1/00-nutrify-summary-screenshot.png",
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
              <img
                key={index}
                className="w-[100%] max-w-[200px] mx-auto block"
                src={img}
                alt=""
              />
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
        </div>
      </section>
    </>
  );
};

export default ProductInformation;
