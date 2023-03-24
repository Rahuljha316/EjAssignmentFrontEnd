import { useEffect, useState } from "react";
import axios from "axios";
import { FETCH_POST_URL } from "../config";
import { Link } from "react-router-dom";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const response = await axios.get(FETCH_POST_URL);
      console.log(response);
      console.log(response.data);

      setPost([...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteButtonClick = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(FETCH_POST_URL + id);
      console.log(response);
      window.confirm("post is deleted");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  // if(!post) return null
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
            <th>Action</th>
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
              <td>
                <Link to={"/viewpost/" + item.id}>
                  <button className="btn btn-info">View</button>
                </Link>
                <Link to={"/editpost/" + item.id}>
                  <button className="btn btn-warning mx-2">Edit</button>
                </Link>

                <button className="btn btn-danger" onClick={() => handleDeleteButtonClick(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/createpost">
        <button className="btn btn-secondary">Create a New Post</button>
      </Link>
    </div>
  );
};

export default Home;
