import { Link } from "react-router-dom";

const Feedback = () => {
    return (
      <>
        <h3 className="text-[1.17em] my-[1em] font-bold">
          Questions, suggestions and feedback
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Have any questions about this update, suggestions for future updates
          or ideas for what foods we should add next?
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Feel free to reach out to us at support@nutrify.app (Daniel or Josh
          will reply)!
        </p>
        <ul className="list-disc my-[1em] pl-10">
          <li>
            <a href="#" className="text-blue-600 underline">
              Download Nutrify on the App Store
            </a>
          </li>
          <li>
            <Link to="/" className="text-blue-600 underline">
              Nutrify Homepage
            </Link>
          </li>
          <li>
            @nutrifyfoodapp on
            <a href="#" className="text-blue-600 underline">
              Instagram/TikTok/X
            </a>
          </li>
        </ul>
        {/* ----------------------- */}
        <h3 className="text-[1.17em] my-[1em] font-bold">Credit roll</h3>
        <ul className="list-disc my-[1em] pl-10">
          <li>
            Nutrition data is curated and FoodVision AI computer vision models
            are trained by Daniel Bourke.
          </li>
          <li>All iOS interfaces are designed and built by Joshua Bourke.</li>
          <li>
            Food image data is collected and labelled by Joseph Drury, Samuel
            Bourke and Daniel Bourke
          </li>
          <li>Food icons are designed and created by Grace Lee.</li>
        </ul>
      </>
    );
};
export default Feedback;
