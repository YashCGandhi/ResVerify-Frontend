import React from 'react'
import Navbar from '../navbar/Navbar'
import { Box } from '@mui/material'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from "../../assets/Yash_Chinmay_Gandhi_CV.pdf"
import "./UploadResume.css"
const UploadResume = () => {
  
  return (
  <>
  <Box flexDirection={"row"}>  
    <Navbar/>
    
    {/* <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
      <Box height={"100vh"} >

        <object data={resume} type="application/pdf" width="100%" height="100%" className='resume-holder'>
        </object>
      </Box>
      
  </Box>
  </>
  )
}

export default UploadResume