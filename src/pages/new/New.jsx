import React from 'react'
import { useState } from "react";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";

const New = ({ inputs, title }) => {


  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://w0.peakpx.com/wallpaper/530/887/HD-wallpaper-anime-girl-anime-beautiful-anime-girl-cartoon-cute-anime-girl-cute-girl.jpg"} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                <input type="file" onChange={e => setFile(e.target.files[0])} id='file' style={{ display: "none" }} />
              </div>


              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                )

              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New




