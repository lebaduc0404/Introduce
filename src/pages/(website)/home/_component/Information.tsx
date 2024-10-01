const Information = () => {
  const LinkDownload = "";
  const text = [
    "📸 Identify 470+ foods with your camera.",
    "📊 Track whole food calories and nutrition.",
    "🏆 Set food-specifc and category-specific goals.",
    "📔 Create a visual food diary.",
    "📈 Get trends overtime and learn about your food habits.",
    "🔎 Discover new foods on your way to completing the Nutridex.",
  ];
  return (
    <>
      <section>
        <div className="text-center">
          <div>
            <img
              className="max-w-[200px] w-[100%] mx-auto block"
              src="https://nutrify.app/nutrify-app-logo-with-text.png"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-[1.5em] font-helvetica font-black my-[0.83em]">
              🥑 Whole food nutrition and calorie tracker.
            </h2>
            <div className="my-[1em] block">
              {text.map((item, index) => (
                <p key={index} className="">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <a href={LinkDownload}>
            <img
              className="max-w-[200px] w-[auto] mx-auto block h-[54px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZDy2VARzMAh1et9p-Jffbtvsi1z7HZkLQyFMF2AGih3uQA4js7e15kN7SypixzIc6PU&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Information;
