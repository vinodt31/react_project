import React,{useState} from "react";

function UploadImage(){

    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('file', image.data)
        const response = await fetch('http://localhost:4000/image', {
        method: 'POST',
        body: formData,
        });

        if (response){
             setStatus(response.statusText);
             console.log("response : ",response);
        }
    }

    const handleFileChange = (e) => {
        const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
        }
        setImage(img)
    }
    return (
        <div className='App'>
          <h1>Upload to server</h1>
          {image.preview && <img src={image.preview} width='100' height='100' />}
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <input type='file' name='file' onChange={(e)=>handleFileChange(e)}></input>
            <button type='submit'>Submit</button>
          </form>
          {status && <h4>{status}</h4>}
        </div>
      )
}

export default UploadImage;