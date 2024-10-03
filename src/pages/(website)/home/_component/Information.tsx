import { Link } from "react-router-dom";
import { LinkDownload, Logo, LogoDownload } from "../../Img_Link";

const Information = () => {
  return (
    <>
      <section className="max-w-[1000px] w-[100%]">
        <div className="text-center">
          <div>
            <img
              className="max-w-[200px] w-[100%] mx-auto block"
              src={Logo}
              alt="Lỗi ảnh"
            />
          </div>
          <div className="">
            <h2 className="text-[1.8em] font-helvetica font-black my-[0.83em]">
              Food Tracker - Calorie Scanner
            </h2>
            <h2 className="text-[1.3em] font-helvetica text-left font-black my-[0.83em]">
              SHORT DESCRIPTION
            </h2>
            <div className="my-[1em] block">
              <div className="text-left my-[0.83em]">
                <p>
                  <b>5+ Key Features of Food Tracker - Calorie Scanner:</b>
                </p>
                <p>
                  ✅ Personalized plans tailored to your objectives and optimal
                  weight.
                </p>
                <p>
                  ✅ Instant food scanning for precise nutrition and calorie
                  insights.
                </p>
                ✅ Track weight fluctuations, maintain a detailed diary and
                access motivating statistics.
                <p>
                  ✅ Effortlessly monitor calories, food intake and vital
                  statistics with alerts for excessive consumption.
                </p>
                <p>
                  ✅ Stay hydrated with water intake tracking and timely
                  reminders.
                </p>
                <p>
                  ✅ Track weight fluctuations, maintain a detailed diary and
                  access motivating statistics.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  🎯<b>Set Personal Goals with Precision</b>
                </p>
                <p>
                  This app creates personalized plans tailored to your needs and
                  objectives, supporting you in achieving your ideal weight or
                  muscle-building goals.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  🥦<b>Nutritional Empowerment at Your Fingertips</b>
                </p>
                <p>
                  Unlock the power of food scanning for detailed calorie and
                  nutrition breakdowns. Fulfill your daily requirements with
                  ease and precision.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  📊<b>Track Calories, Food Diary and Statistics</b>
                </p>
                <p>
                  Document your calorie journey, food preferences and visual
                  records. Receive timely alerts for exceeding daily limits,
                  propelling you towards success.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  💧<b>Monitor Water Intake</b>
                </p>
                <p>
                  Maintain optimal hydration levels effortlessly. Track your
                  water intake, receive reminders and revel in the freshness
                  that comes with meeting your hydration goals
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  🏋🏻‍♂️<b>Track Weight, Weight Diary and Statistics</b>
                </p>
                <p>
                  Record weight changes, maintain a dedicated diary and delve
                  into insightful statistics. Let our app be your constant
                  companion in achieving and sustaining your goals.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  <b>Food Tracker - Calorie Counter Ideal for:</b>
                </p>
                <p>👉Individuals aiming to gain weight</p>
                <p>👉Those looking to lose weight</p>
                <p>👉Fitness enthusiasts seeking muscle growth</p>
                <p>
                  👉Health-conscious individuals prioritizing wholesome eating
                  habits
                </p>
                <p className="text-left my-[0.83em] text-[18px] bg-yellow-100 font-bold p-2">
                  Download Food Tracker - Calorie Scanner today. Choose your
                  plan, stay consistent, and achieve your ideal goal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-[54px]">
            <div className="max-w-[200px] w-[auto] h-[54px]">
              <Link to={LinkDownload} className="">
                <img
                  className="max-w-[200px] w-[auto] mx-auto block h-[54px]"
                  src={LogoDownload}
                  alt="Ảnh lỗi"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
