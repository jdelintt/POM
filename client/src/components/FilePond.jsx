import React, { useContext, useState } from "react";


// importing filepond
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';




const FilePondComp = () => {
  registerPlugin(FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation, FilePondPluginFileEncode);


  const [files, setFiles] = useState()


  return (
    <>

      <FilePond
        className="pond"
        files={files}
        onupdatefiles={(files) => setFiles(files)}
        allowFileEncode={true}
        server="/api/ADR/files"
        name="files"
        method="POST"
        dropOnPage
        onerror={(err) => {
          console.log(err)
        }}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      {console.log(files)}
    </>
  )
};

export default FilePondComp;