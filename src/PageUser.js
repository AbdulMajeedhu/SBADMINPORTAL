import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"


function PageUser() {
    let navigate = useNavigate()
    let [isLoading,setLoading] = useState(false)
    let formik = useFormik({
initialValues :{
    name:"",
    position:"",
    age:"",
    office:"",
    startdate:"",
    salary:"",
},
validate: (values)=>{
    let errors = {}
    let Pattern = new RegExp(/^[a-zA-Z\-]+$/)
    if(!values.name){
      errors.name = " Please enter the name more than 5"
    }else if(values.name.length < 5){
        errors.name = "length shoud be more than 5"
    }else if(values.name.length>20){
        errors.name = " length is should be less than 20"
    }else if(!Pattern.test(formik.values.name)){
        errors.name = "User name should have numbers"
    }
    return errors
},
onSubmit: async (values)=> {
    try{
        setLoading(true)
        console.log(values);
        await axios.post("https://66dfea882fb67ac16f278b83.mockapi.io/api/users",values)
       navigate("/Page")
    } catch (error) {}
    }
    })
    return (
       
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Name</label>
                        <input 
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        type="text"
                         className={`form-control ${formik.errors.name ? 'error-border' : ''}`}  />
                         {/* {
                            formik.errors.name ? <span style={{color:'red'}}> {formik.errors.name}</span> : null
                         }
                         */}
                    </div>

                    <div className="col-lg-6">
                        <label>Position</label>
                        <input type="text"
                        name="position"
                        onChange={formik.handleChange}
                        value={formik.values.position}
                         className={`form-control ${formik.errors.position ? 'error-border' : ''}`} />
                    </div>

                    <div className="col-lg-6">
                        <label>Office</label>
                        <input type="text"
                        name="office"
                        value={formik.values.office}
                        onChange={formik.handleChange}
                         className={`form-control ${formik.errors.office ? 'error-border' : ''} `} />
                    </div>

                    <div className="col-lg-6">
                        <label>Age</label>
                        <input type="text" 
                        name="age"
                        onChange={formik.handleChange}
                        value={formik.errors.age}
                        className={`form-control ${formik.errors.age ? 'error-border' : ''}`} />
                    </div>

                    <div className="col-lg-6">
                        <label>startDate</label>
                        <input type="date" className="form-control"/>
                    </div>

                    <div className="col-lg-6">
                        <label>Salary</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="col-lg-6">
                        <input
                        type={"submit"}
                        value="submit"
                        className=" btn btn-primary mt-2"
                        disabled={!formik.isValid && isLoading}
                        />
                        
                    </div>
                </div>
            </form>
        </div>
    )
};
export default PageUser