import { faCalendar, faLocationDot,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../Css/Form.module.css';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
function Form() {
    const[detail , setDetail] = useState({
        from:"",
        to:"",
        in:"",
        out:"",
        persons:""
    });
    let from,value;
    const handel=(e)=>{
        from=e.target.from;
        value=e.target.value;
        setDetail({...detail,[from]:value});
    }

    const navigate = useNavigate();
    const navigateTo=()=>{
        navigate('/Search/ng');
    }
    return (
      <div className={styles.div}>
          <form className={styles.form}>
        
            <label className={styles.lable} >
            <FontAwesomeIcon icon={faLocationDot} size="lg" color='#1F628E'/>
                {/* {' '} From: */}
                <input className={styles.from} type="text"  name="from" id='from' defaultValue=""  placeholder='From' onChange={handel} required  /> 
            </label>
            <br></br>
            
            
            <label className={styles.lable} >
            <FontAwesomeIcon icon={faLocationDot} size="lg" color='#1F628E'/>
             {/* {' '} To: */}
                <input className={styles.to} type="text" name="to" id='to' placeholder='To' defaultValue=""  onChange={handel} required  />
            
            </label>
            <br></br>
            
            
            <label className={styles.lable} >
            <FontAwesomeIcon icon={faCalendar} size="lg" color='#1F628E'/>
            {/* {' '} Check in date: */}
                <input className={styles.in} type="text" name="in" id='in' placeholder='Check in date' defaultValue=""  onChange={handel} required   />
            
            </label>
            <br></br>
            
            
            <label className={styles.lable} >
            <FontAwesomeIcon icon={faCalendar} size="lg" color='#1F628E'/>
            {/* {' '} Check out date: */}
                <input className={styles.input} type="text" name="out" id='out' placeholder='Check out date' defaultValue=""  onChange={handel} required />
            
            </label>
            <br></br>
            
            
            <label className={styles.lable} >
            <FontAwesomeIcon icon={faUser} size="lg" color='#1F628E'/>
            {/* {' '}  Persons: */}
                <input className={styles.person} type="text" name="persons" id='persons' placeholder='Persons' defaultValue="" onChange={handel} required />
            </label>
            <br></br>

            <div className={styles.span} >
             
            <button  className={styles.button} type="search" onClick={navigateTo}>Search</button>
            {/* onClick={navigateTo} */}
            </div>
            </form>
      </div>
    );
  }

export default Form;