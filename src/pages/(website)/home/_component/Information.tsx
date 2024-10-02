import { Link } from "react-router-dom";
import LogoDownload from "../../image/Download.png";
import LogoShared from "../../image/Logo.png";
import { LinkDownload } from "../../introducing/Link";
export const Logo = LogoShared;

const Information = () => {
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
              src={Logo}
              alt="Lỗi ảnh"
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
          <Link to={LinkDownload}>
            <img
              className="max-w-[200px] w-[auto] mx-auto block h-[54px]"
              src={LogoDownload}
              alt="Ảnh lỗi"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Information;
