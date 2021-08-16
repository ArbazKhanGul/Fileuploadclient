import {useState} from "react"
import axios from "axios";
function App() {
const [file, setfile] = useState({
  name:"",
  imageupload:""
})


function changeInputFile(e){

  let name =e.target.name;
  let file=e.target.files[0];
  setfile((prev)=>{
    return {
      ...prev,
      [name]:file
    }
  })
}
function changeInputVal(e){

  let name =e.target.name;
  let file=e.target.value;
  setfile((prev)=>{
    return {
      ...prev,
      [name]:file
    }
  })
}
async function formsubmit(e){
  console.log("click submit");

e.preventDefault();
const formdata=new FormData();
for ( var key in file ) {
  formdata.append(key, file[key]);
}
console.log(file)
// formdata.append("imageUpload",file);

const config={
  headers:{
    'content-type':'application/x-www-form-urlencoded',
  },
  credentials: "include",
}
let url="http://localhost:5000/upload"
let result;
try{
 result =await axios.post(url,formdata,config)
//  result = await fetch(url, {
//   method: "POST",
//   headers: {
//     Accept: "multipart/formdata",
//     "Content-type": "multipart/formdata"
//   },
//   credentials: "include",
//   body: formdata
// });
}catch(err){
  console.log(err)
}
// let res =await result.json();
console.log(result);


}
return (
<>
<h1>Uplaoding a image </h1>
<form action="">
<h1>Enter a name</h1>
<input type="text" name="name" onChange={changeInputVal}/>

<h2>Upload a file</h2>
<input type="file" name="imageupload"  id="images"  onChange={changeInputFile}/>
{/* <input type="file" name="download"  id="images"  onChange={changeInput}/> */}
<button type="submit" onClick={formsubmit}>Submission</button>
</form>
<img src="http://localhost:5000/image.png" alt="hello" />

</>   
  );
}

export default App;
