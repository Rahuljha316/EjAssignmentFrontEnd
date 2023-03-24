import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FETCH_POST_URL } from "../config";
import { Link } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(FETCH_POST_URL + id);
      console.log(response.data);

      setContent(response.data.content);
      setTitle(response.data.title);
    } catch (error) {
      console.error(error);
    }
  };

  const SaveButtonClick = async () => {
    const payload = { title, content };
    try {
      const response = await axios.put(FETCH_POST_URL + id, payload);
      console.log(response.data);
      window.alert("post is updated");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{id}</td>
            <td>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => SaveButtonClick()}>Save</button>
      <Link to="/">
        <button className="btn btn-secondary mx-2">Discard</button>
      </Link>
    </div>
  );
};

export default EditPost;
