import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import('../Css/login.css');
// let cssLoaded = false;

function Login() {
  // render() {
    // if (cssLoaded === false) {
    //     cssLoaded = true;
    //     import('../Css/login.css');
    //     cssLoaded=false;
    // }

    const[Reg,setReg]= useState ({
      username:"",
      email:"",
      password:""
    });

    const[Records,setRecords]=useState([]);

    const[inlog,setInlog]= useState ({
      email:"",
      password:""
    });

    // const [userRegistration, setUserRegistration] = useState({
    //   username:"",
    //   email:"",
    //   password:""
    // });

    const takeinput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name,value);

      //setReg{(... Reg, [name]:value)}

      setReg(Reg => {
        
        return {...Reg, [name]:value};
      });
    }

    const handlesubmit =(e) =>{
      e.preventDefault();

      const newrec = {...Reg, id: new Date().getTime().toString()}

      console.log(Records);

      setRecords(Records => {
        
        return {...Records,newrec};
      });

      setReg(Reg => {
        
        return {
        username:"",
        email:"",
        password:""
      };
      });
    }

    const loginput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name,value);

      //setReg{(... Reg, [name]:value)}

      setInlog(inlog => {
        
        return {...inlog, [name]:value};
      });
    }

    const handleinlog =(e) =>{
      e.preventDefault();

      const login = {...inlog, id: new Date().getTime().toString()}

      console.log(inlog.name);
      setInlog(inlog => {
        return {
        email:"",
        password:""
      };
      });
    }

    const navigate = useNavigate();
    const navigateTo=()=>{
        navigate('/');
    }

    return (
      <>
      <div id="body">
      <div class="main">  	
		<input class="input" type="checkbox" id="chk" aria-hidden="true" />
        <div class="signup">
            <form action="" onSubmit={handlesubmit}>
            <span class="span">
                <label for="chk" aria-hidden="true">Sign up</label>
                </span>
                <input class="input" type="text" 
                value={Reg.username}
                onChange={takeinput}
                autoComplete="off"
                name="username" placeholder="User name" required=""/>
                <input class="input" type="email"
                value={Reg.email}
                onChange={takeinput}
                autoComplete="off"
                name="email" placeholder="Email" required=""/>
                <input class="input" type="password"
                value={Reg.password}
                onChange={takeinput}
                autoComplete="off"
                name="password" placeholder="Password" required=""/>
                <button class="button" type='submit' onClick={navigateTo} id="signup">Sign up</button>
            </form>
        </div>

        <div class="login">
            <form action="" onSubmit={handleinlog}>
                <span class="span">
                <label class="lable" for="chk" aria-hidden="true">Login</label>
                </span>
                <input class="input" type="email" 
                value={inlog.email}
                onChange={loginput}
                autocomplete="off"
                name="email" placeholder="Email" required=""/>
                <input class="input" type="password" 
                defaultValue=""
                value={inlog.password}
                onChange={loginput}
                autocomplete="off"
                name="pswd" placeholder="Password" required=""/>
                <button class="button" onClick={navigateTo} type='submit' id="login">Login</button>
            </form>
        </div>
	</div>
    </div>
      </>
    );
  //}
}

export default Login;

// import React from "react";
// import('../Css/login.css');
// // let cssLoaded = false;

// class Login extends React.Component {
//   render() {
//     // if (cssLoaded === false) {
//     //     cssLoaded = true;
//     //     import('../Css/login.css');
//     //     cssLoaded=false;
//     // }
//     return (
//       <>
//       <div id="body">
//       <div class="main">  	
// 		<input class="input" type="checkbox" id="chk" aria-hidden="true" />
//         <div class="signup">
//             <form>
//                 <span class="span">
//                 <label for="chk" aria-hidden="true">Sign up</label>
//                 </span>
//                 <input class="input" type="text" name="txt" placeholder="User name" required=""/>
//                 <input class="input" type="email" name="email" placeholder="Email" required=""/>
//                 <input class="input" type="password" name="pswd" placeholder="Password" required=""/>
//                 <button class="button" id="signup">Sign up</button>
//             </form>
//         </div>

//         <div class="login">
//             <form>
//                 <span class="span">
//                 <label class="lable" for="chk" aria-hidden="true">Login</label>
//                 </span>
//                 <input class="input" type="email" name="email" placeholder="Email" required=""/>
//                 <input class="input" type="password" name="pswd" placeholder="Password" required=""/>
//                 <button class="button" id="login">Login</button>
//             </form>
//         </div>
// 	</div>
//     </div>
//       </>
//     );
//   }
// }

// export default Login;