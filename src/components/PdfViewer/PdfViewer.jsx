import React,{useState, useEffect} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../PdfViewer/Yash_Chinmay_Gandhi_CV.pdf"
import Navbar from "../navbar/Navbar";
import "./PdfViewer.css"



const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
    console.log("file loaded")
  }

  useEffect(() => { pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;});


  return (
  <div className="container">
    <Navbar/>
    <div className="pdf-container">
    {resume && (
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
      <Page 
      renderTextLayer={false}
      renderAnnotationLayer={false}
      customTextRenderer={false} 
      pageNumber={pageNumber}/>
      
    </Document>
    )}
    </div>
    
  </div>
  )
}

export default PdfViewer