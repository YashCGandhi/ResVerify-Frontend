import React, { createRef, useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./Home.css"

const Home = () => {

  const [resume, setResume] = useState(null)
  const fileInput = createRef();

  const onSubmit = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.set("resume", fileInput.current.files[0]);

    if (fileInput.current.files[0] != null){
      try{
        const response = await fetch('/resume',{
          method:"POST",
          body:formData
        });
        
        const parsedResponse = await response.json();
        if (response.ok){
          setResume(fileInput.current.files[0].name)
          // alert("file uploaded")
        } else{
          console.error("some error occured.")
        }
      }catch(e){
        console.error(e.message)
      }
    }else{
      alert("Upload a file")
    }

  }

  return (
    <div className='home-page'>
    <Navbar/>
    {/* <form onSubmit={onSubmit}>
        <input type='file' name="resume" ref={fileInput}/>
        <input type="submit" value="Submit"/>
    </form> */}
    
     <div className="file-upload">
      <form onSubmit={onSubmit}>
        <div className="file-upload-wrap">
          <input className="file-upload-input" type='file' name="resume" ref={fileInput}/>
          <div className='drag-text'>
            {resume  !== null ? <h3> {resume}</h3> : <h3> Drag and Drop a file </h3>}
          </div>
        </div>
          <input className="file-upload-btn" type="submit" value="Upload"/>
      </form>
    </div>
    {/* <button onClick={}>Next</button> */}
    </div>
  )
}

export default Home