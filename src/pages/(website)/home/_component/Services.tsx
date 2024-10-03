import { Link } from "react-router-dom";
// import { LinkVideo } from "../../Img_Link";

const Services = () => {
  const LinkEmail = "#";
    return (
      <>
        <section className="services">
          <div className="my-[1em]">
            <h2 className="font-black text-[1.17em] font-helvetica">Update</h2>
            <p className="">
              ✨ Read the{" "}
              <Link
                to="/"
                className="text-blue-600 underline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                launch blog post
              </Link>{" "}
              | Watch the{" "}
              <Link
                to="/"
                className="text-blue-600 underline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                launch video
              </Link>{" "}
              ✨
            </p>

            <p className="my-[1em]">
              29 May 2024 -
              <Link
                to="/"
                className="text-blue-600 underline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Introducing Nutrify 1.2: Calorie and Macronutrient Goals,
                Breakdowns and 57 New Foods
              </Link>
            </p>
          </div>
          <div>
            <h2 className="font-black text-[1.17em] font-helvetica">Pricing</h2>
            <p>Free with all existing features.</p>
          </div>
          <div className="my-[1em]">
            <h2 className="font-black text-[1.17em] font-helvetica">Contact</h2>
            <p>
              <Link to={LinkEmail} className="text-blue-600 underline">
                support@karyalokal-studio.com
              </Link>
            </p>
          </div>
          <div>
            <h2 className="font-black text-[1.17em] font-helvetica">Legal</h2>
            <p>
              <Link
                to="/"
                className="text-blue-600 underline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Terms of Use
              </Link>{" "}
              &{" "}
              <Link
                to="/"
                className="text-blue-600 underline"
                onClick={() => window.scrollTo({ top: 0 })}
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
