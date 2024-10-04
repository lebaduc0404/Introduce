import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "@/config/axios";
import { IPosts } from "@/common/types/IPosts";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPosts | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      if (id) {
        try {
          const response = await instance.get<IPosts>(`/posts/${id}`);
          setPost(response.data);
        } catch (error) {
          console.error("Error fetching post detail:", error);
        }
      }
    };

    fetchPostDetail();
  }, [id]);

  if (!post)
    return (
      <h2 className="font-black text-[1.17em] font-helvetica text-center">Detail Blog</h2>
    );
  return (
    <div>
      <h2 className="font-black text-[1.3em] mb-3 font-helvetica text-center">
        Detail Blog
      </h2>
      <h3 className="font-extrabold text-[1.2em] mb-2 font-helvetica">
        {post.title}
      </h3>
      <h3 className="font-bold text-[1em] font-helvetica">Short Content</h3>
      {(Array.isArray(post.shortContent)
        ? post.shortContent
        : [post.shortContent]
      ).map((item, index) => (
        <span key={index}>
          <div className="ml-[1.3em] mb-[0.6em]">{item}</div>
        </span>
      ))}
      <h3 className="font-bold text-[1em] mt-3 font-helvetica">Long Content</h3>
      {(Array.isArray(post.longContent)
        ? post.longContent
        : [post.longContent]
      ).map((item, index) => (
        <span key={index}>
          <div className="ml-[1.3em] mb-[0.6em]">{item}</div>
        </span>
      ))}
      <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Detail;
