import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_POST_URL } from "../config";
import { Link } from "react-router-dom";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(FETCH_POST_URL + id);
      console.log(response.data);

      setPost(response.data);
    } catch (error) {
      console.error(error);
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
            <th>createdAt</th>
            <th>UpdatedAt</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>

        <tbody>
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.createdAt}</td>
            <td>{post.updatedAt}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button className="btn btn-secondary">Home</button>
      </Link>
    </div>
  );
};

export default ViewPost;
