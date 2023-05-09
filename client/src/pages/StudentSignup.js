import { Link ,NavLink,useNavigate} from "react-router-dom";
import react,{useState} from 'react';
import "./Login.css";

const StudentSignupPage = () => {

  const history = useNavigate();


  const [student,setUser] =useState({
    name:"",email:"",password:"",phone:"",age:""
  });


  let name
  let value
  const handleInputs=(e)=>{
   
    name=e.target.name;
    value =e.target.value;

    setUser({...student,[name]:value});
  }

 

  const PostData = async (e) => {

    e.preventDefault();
    const {name,email,password,phone,age}=student;

    const res = await fetch("/register",{


      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,password,phone,age
      })


    })

    const data = await res.json();

    if(data){
      console.log("registration successful");
      history("/");
    }else{
      console.log("registration unsuccessful");
    }

    

  }  


  return (
    <div className="vector-parent">
      <img className="frame-child-t" alt="" src="/rectangle-88.svg" />
      <img
        className="microsoftteams-image-2-11"
        alt=""
        src="/microsoftteamsimage-2-1@2x.png"
      />
      <b className="sign-in">SignUp</b>
      <div className="as-tutor">As Student</div>


      <form method="POST">

      <div className="input">
        <input className="input1" type="text" name ="name" value={student.name} onChange={handleInputs} id = "name" placeholder = "name"  />
        
        <div className="email">Name</div>
      </div>


      <button className="button-t"  type ="submit" name ="signup" value ="register" id = "signup" onClick={PostData}>
      
        <div className="button-child-s" />
         
        <div className="log-in">
         
        
        Sign Upd
            
       
          
          
        </div>
        
      </button>

      
      <div className="input2">
        <input className="inpute" type="text"  name ="email" value={student.email} onChange={handleInputs} id = "email" placeholder = "email" />
       
        <div className="password">Email</div>
      </div>


      <div className="input3">
        <input className="inputp" type="password"  name ="password" value={student.password} onChange={handleInputs} id = "password" placeholder = "password" />
        
        <div className="password">Password</div>
      </div>


      <div className="input4">
        <input className="inputcp" type="Number"  name ="phone" value={student.phone} onChange={handleInputs} id = "phone" placeholder = "phone no." />
        
        <div className="password">Phone No.</div>
      </div>


      <div className="input5">
        <input className="inputa" type="Number"  name ="age" value={student.age} onChange={handleInputs} id = "age" placeholder = "age"/>
        
        <div className="password">Age</div>
      </div>

      </form>

    </div>

  );
};

export default StudentSignupPage;
