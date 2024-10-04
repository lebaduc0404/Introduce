import { useParams } from "react-router-dom";
import {data} from "@/pages/(website)/post/Data"

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const post = data.find((item) => item.id.toString() === id);

  // Check if post data is not available
  if (!post) {
    return (
      <h2 className="font-black text-[1.17em] font-helvetica text-center">
        Post not found.
      </h2>
    );
  }

  return (
    <div>
      <h2 className="font-black text-[1.3em] mb-3 font-helvetica text-center">
        Detail Blog
      </h2>
      <h3 className="font-extrabold text-[1.2em] mb-2 font-helvetica">
        {post.title}
      </h3>

      <h3 className="font-bold text-[1em] font-helvetica">Short Content</h3>
      <div className="ml-[1.3em] mb-[0.6em]">{post.shortContent}</div>

      <h3 className="font-bold text-[1em] mt-3 font-helvetica">Long Content</h3>
      {post.longContent.map((item, index) => (
        <div key={index} className="ml-[1.3em] mb-[0.6em]">
          {item}
        </div>
      ))}
      <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Detail;