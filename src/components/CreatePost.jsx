import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FETCH_POST_URL } from "../config";



const CreatePost = () => {
  //   const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCreatePostButton = async () => {
    const payload = { title, content };

    try {
      const response = await axios.post(FETCH_POST_URL, payload);

      console.log(response.data);
      window.alert("new post is created");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleCreatePostButton()}>Create Post</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default CreatePost;
