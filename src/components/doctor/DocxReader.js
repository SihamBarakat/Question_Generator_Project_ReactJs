import React from 'react';
import { saveAs } from 'file-saver';

function DocxReader() {
  const handleOpenFile = () => {
    const filePath = 'https://onedrive.live.com/edit.aspx?action=editnew&resid=5D6E549E80A14D51!110&ithint=file%2cdocx&action=editnew&ct=1688451513599&wdNewAndOpenCt=1688451513599&wdPreviousSession=2e8190ab-a58a-4f91-a5c7-04a50182a26e&wdOrigin=OFFICECOM-WEB.START.NEW';
    saveAs(filePath, 'my-word-file.docx');
    window.open(filePath);
  };

  return (
    <div>
      <button onClick={handleOpenFile}>Open Word file</button>
    </div>
  );
}
export default DocxReader;





/*import React, { useState } from "react";
//import PizZip from "pizzip";
//import { DOMParser } from "@xmldom/xmldom";

function str2xml(str) {
  if (str.charCodeAt(0) === 65279) {
    // BOM sequence
    str = str.substr(1);
  }
  return new DOMParser().parseFromString(str, "text/xml");
}

// Get paragraphs as javascript array
function getParagraphs(content) {
  const zip = new PizZip(content);
  const xml = str2xml(zip.files["word/document.xml"].asText());
  const paragraphsXml = xml.getElementsByTagName("w:p");
  const paragraphs = [];

  for (let i = 0, len = paragraphsXml.length; i < len; i++) {
    let fullText = "";
    const textsXml = paragraphsXml[i].getElementsByTagName("w:t");
    for (let j = 0, len2 = textsXml.length; j < len2; j++) {
      const textXml = textsXml[j];
      if (textXml.childNodes) {
        fullText += textXml.childNodes[0].nodeValue;
      }
    }
    if (fullText) {
      paragraphs.push(fullText);
    }
  }
  return paragraphs;
}

const DocxReader = () => {
  const [paragraphs, setParagraphs] = useState([]);

  const onFileUpload = (event) => {
    const reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = (e) => {
      const content = e.target.result;
      const paragraphs = getParagraphs(content);
      setParagraphs(paragraphs);
    };

    reader.onerror = (err) => console.error(err);

    reader.readAsBinaryString(file);
  };

  return <input type="file" onChange={onFileUpload} name="docx-reader" />;
};

export default DocxReader;*/





















/*import react from 'react'
import {FileViewer} from 'react-file-viewer'
    const MyDocumentViewer=()=>{
       // const filePath =  'E:\PROJECT\Documents\ex1.docx' ;
        const docs=[{import:'E:\PROJECT\Documents\ex1.docx'}]
        return (
        <>
           <FileViewer filetype="docx" docs={docs} />
        </>
        );

    
        
    }
    
    


export default MyDocumentViewer;*/