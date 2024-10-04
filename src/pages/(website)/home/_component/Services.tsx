import { Link, useNavigate } from "react-router-dom";
import { LinkSupport } from "../../Img_Link";
import { useEffect, useState } from "react";
import { data } from "@/pages/(website)/post/Data";
import { IPosts } from "@/common/types/IPosts";

const Services = () => {
   const [sortedData, setSortedData] = useState<IPosts[]>([]);
   const navigate = useNavigate();

   useEffect(() => {
     // Sort posts by createdAt in descending order and take the first 3
     const updatedData = data
       .sort(
         (a, b) =>
           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
       )
       .slice(0, 3);

     setSortedData(updatedData);
   }, []);

   const handleRowClick = (id: number | string) => {
     navigate(`/post/${id}`);
   };
  return (
    <>
      <section className="services">
        <div className="my-[1em]">
          <h2 className="font-black text-[1.17em] font-helvetica">Blog</h2>
          <table className="table h-auto">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>CreatedAt</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item, index) => (
                <tr
                  key={item.id}
                  onClick={() => handleRowClick(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/post">
            <button className="btn btn-secondary justify-center items-center">
              More
            </button>
          </Link>
        </div>
        <div>
          <h2 className="font-black text-[1.17em] font-helvetica">Pricing</h2>
          <p>FREE FOREVER</p>
        </div>
        <div className="my-[1em]">
          <h2 className="font-black text-[1.17em] font-helvetica">Contact</h2>
          <p>
            <Link to={LinkSupport} className="text-blue-600 underline">
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
