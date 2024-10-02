import { Link } from "react-router-dom";

const Services = () => {
  const LinkVideo = "#";
  const LinkEmail = "#";
    return (
      <>
        <section className="services">
          <div className="my-[1em]">
            <h2 className="font-black text-[1.17em] font-helvetica">Update</h2>
            <p className="">
              ✨ Read the{" "}
              <Link to="/launch" className="text-blue-600 underline">
                launch blog post
              </Link>{" "}
              | Watch the{" "}
              <a href={LinkVideo} className="text-blue-600 underline">
                launch video
              </a>{" "}
              ✨
            </p>

            <p className="my-[1em]">
              29 May 2024 -
              <Link to="/new" className="text-blue-600 underline">
                Introducing Nutrify 1.2: Calorie and Macronutrient Goals,
                Breakdowns and 57 New Foods
              </Link>
            </p>
          </div>
          <div>
            <h2 className="font-black text-[1.17em] font-helvetica">Pricing</h2>
            <p>Nutrify is free to use with premium features available for:</p>
            <p>$3.99USD/month</p>
            <p>$24.99USD/year (save ~50%)</p>
          </div>
          <div className="my-[1em]">
            <h2 className="font-black text-[1.17em] font-helvetica">Contact</h2>
            <p>
              <a href={LinkEmail} className="text-blue-600 underline">
                support@nutrify.app
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-black text-[1.17em] font-helvetica">Legal</h2>
            <p>
              <Link to="/terms" className="text-blue-600 underline">
                Terms of Use
              </Link>{" "}
              &{" "}
              <Link
                to="/terms#privacy-policy"
                className="text-blue-600 underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </section>
      </>
    );
};

export default Services;
