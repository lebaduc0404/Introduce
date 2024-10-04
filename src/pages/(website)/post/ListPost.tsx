import { IPosts } from "@/common/types/IPosts";
import instance from "@/config/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListPost = () => {
  const [data, setData] = useState<IPosts[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [postsPerPage] = useState(10); // Số bài viết mỗi trang
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await instance.get<IPosts[]>("/posts");
      const Data = response.data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setData(Data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Tính toán các bài viết hiển thị cho trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const handleRowClick = (id: number | string) => {
    navigate(`/post/${id}`);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / postsPerPage); // Tổng số trang

  return (
    <div>
      <h2 className="font-black text-[1.3em] mb-3 font-helvetica text-center">
        List Blog
      </h2>
      <table className="table h-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((item, index) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{indexOfFirstPost + index + 1}</td>
              <td>{item.title}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 ${
              currentPage === index + 1 ? "bg-gray-300" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListPost;
