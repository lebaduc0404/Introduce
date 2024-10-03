import { Link } from "react-router-dom";
// import { LinkVideo } from "../../Img_Link";

const Services = () => {
  const LinkEmail = "#";
  return (
    <>
      <section className="services">
        <div className="my-[1em]">
          <h2 className="font-black text-[1.17em] font-helvetica">Blog</h2>
          <p className="">Coming soon...</p>
        </div>
        <div>
          <h2 className="font-black text-[1.17em] font-helvetica">Pricing</h2>
          <p>FREE FOREVER</p>
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
