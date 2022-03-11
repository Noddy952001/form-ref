import { useState  } from "react";
import axios from "axios"




export const Form = () => { 
    const [formdata , setformdata ] = useState({
        username : "" ,
        age : "",
        Address : "",
        Department : "",
        Salary : "",
        maritalstate : "", 
    })

    const [formdataT , setformdataT ] = useState([])

    const handelChange = (e) => {
      const {id , value} = e.target;
        setformdata({
            ...formdata,
            [id] : value,
        });
    }

    const handelsubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/user", formdata).then(() => {
            alert("sucessful")
        })
        console.log(formdata)

        setformdataT([...formdataT,formdata]);

    }

   


    return(

        <div className="box">

            <div className="forms">
                <form onSubmit={handelsubmit}>

                    <h1 id="headline">Fill Employee Details</h1>

                    <label>Name : </label> <br/>
                    <input
                        id="username"
                        type="text"
                        onChange={handelChange}
                        placeholder= "enter ussername"
                    ></input><br/><br/>

                    <label>Age : </label><br/> 

                    <input
                        id="age"
                        type="number"
                        onChange={handelChange}
                        placeholder= "enter age"
                    ></input><br/><br/>

                    <label>Address : </label><br/>
                    <input
                        id="Address"
                        type="text"
                        onChange={handelChange}
                        placeholder= "enter Address"
                    ></input><br/><br/>

                    <label>Department : </label><br/> 
                    <input
                        id="Department"
                        type="text"
                        onChange={handelChange}
                        placeholder= "enter Department"
                    ></input><br/><br/>

                    <label>Salary : </label><br/> 
                    <input
                        id="Salary"
                        type="text"
                        onChange={handelChange}
                        placeholder= "enter Salary"
                    ></input><br/><br/>

                    <label>marital state  : </label><br/> 
                    <input
                        id="maritalstate"
                        type="text"
                        onChange={handelChange}
                        placeholder= "enter marital state "
                    ></input><br/><br/>

            
                    <input type="submit" value="submit"/>
                </form>

            </div>


            <div>
                    <h1>Employee Record</h1>
                <table>
                        <thead>
                            <tr>
                                <th>Name </th>
                                <th>Age </th>
                                <th>Address </th>
                                <th>Department </th>
                                <th>Salary </th>
                                <th>marital state </th>
                            </tr>
                        </thead>  

                        <tbody>
                            {formdataT.map((item) => {
                                return <tr>
                                <td>{item.username} </td>
                                <td>{item.age}</td>
                                <td>{item.Address}</td>
                                <td>{item.Department}</td>
                                <td>{item.Salary}</td>
                                <td>{item.maritalstate}</td>
                                </tr>
                            })}
                        </tbody>  
                </table>
            </div>
        </div>
    );
};