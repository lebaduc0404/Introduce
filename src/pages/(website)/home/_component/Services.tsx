import { Link, useNavigate } from "react-router-dom";
import { LinkSupport } from "../../Img_Link";
import { useEffect, useState } from "react";
import instance from "@/config/axios";
import { IPosts } from "@/common/types/IPosts";

const Services = () => {
  const [data, setData] = useState<IPosts[]>([]);
  const navigate = useNavigate();

  const API = async () => {
    try {
      const response = await instance.get<IPosts[]>("/posts");
      // Sắp xếp bài viết theo createdAt giảm dần và lấy 3 bài viết đầu tiên
      const sortedData = response.data
        .sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .slice(0, 3);

      setData(sortedData); // Cập nhật state với 3 bài viết gần nhất
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    API();
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
              {data.map((item, index) => (
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
