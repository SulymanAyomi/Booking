import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { blue } from "@mui/material/colors";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [alart, setAlart] = useState({
    msg: "This is a success alert — check it out!",
    color: "success",
    severity: "success",
  });
  const [showAlart, setShowAlart] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "bookingapp");
    console.log(file);
    try {
      setLoading(true);
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/sulymanayomi/image/upload",
        data
      );
      console.log(uploadRes);
      const { url } = uploadRes.data;
      console.log(file);
      const newUser = {
        ...info,
        img: url,
      };

      const res = await axios.post("/register", newUser);

      setShowAlart(true);
      setAlart({
        msg: res.data,
      });
      setLoading(false);

      console.log(res);
    } catch (err) {
      console.log(err);
      setAlart({
        msg: err.response.data.error.message,
        color: "error",
        severity: "error",
      });
      setShowAlart(true);
      setLoading(false);
    }
  };

  console.log(info);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        {showAlart && (
          <Alert severity={alart.severity} color={alart.color}>
            {alart.msg}
          </Alert>
        )}
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <div style={{ position: "relative" }}>
                {loading && (
                  <CircularProgress
                    size={30}
                    sx={{
                      color: "white",
                      position: "absolute",
                      top: 14,
                      right: 11,
                      zIndex: 1,
                    }}
                  />
                )}
                <button disabled={loading} onClick={handleClick}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
