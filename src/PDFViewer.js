import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Atur worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;

export default function PDFViewer({ file, darkMode }) {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let pageWidth = Math.min(600, windowWidth - 32);
  if (windowWidth < 700) pageWidth = windowWidth - 16;

  const downloadBtnStyle = {
    background: darkMode ? "#232323" : "#fff",
    color: darkMode ? "#fff" : "#232323",
    border: "1.5px solid #bbb",
    borderRadius: 8,
    padding: "8px 18px",
    fontWeight: 600,
    fontSize: "1rem",
    marginRight: 12,
    marginTop: 18,
    marginBottom: 18,
    cursor: "pointer",
    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
    transition: "background 0.2s, color 0.2s, border 0.2s",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <div
      className="pdf-viewer-outer"
      style={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 90,
        boxSizing: "border-box",
        background: darkMode ? "#2C2B28" : "#fff"
      }}
    >
      <div style={{
        width: "100%",
        maxWidth: pageWidth,
        display: "flex",
        justifyContent: "center",
        marginBottom: 8
      }}>
        <a
          href={file}
          download
          style={downloadBtnStyle}
        >
          Download PDF
        </a>
      </div>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading="Loading PDF…"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={pageWidth}
          />
        ))}
      </Document>
    </div>
  );
}