import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts/");
      console.log(response);
      console.log(response.data);

      setPost([...response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  // if(!post) return null
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th>createdAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>

        <tbody>
          {post.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Create a New Post</button>
    </div>
  );
};

export default Home;
