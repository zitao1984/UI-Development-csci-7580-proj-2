import data from "../data/data";
import {useState} from "react";
import ProjectBuilder from "../components/ProjectBuilder";
import ProjectSelect from "../components/ProjectSelect";
import Title from "../components/Title";

const App = () =>{
    const[projectInfo,setProjectSubmission]=useState({
        project:""
    })

    const projectSubmitted = (info, projectName) => {
        /** The object passed to setSubmission involves two JS shortcuts:
         * ...info means merge the info object with the following values
         * formName in this context is a shortcut for formName: formName
         * The longhand equivalent would be:
         * {
         *   phone: info.phone,
         *   phoneType: info.phoneType,
         *   email: info.email,
         *   formName: formName
         * }
         */
        setProjectSubmission({...info, projectName})
    }

    return(
        <div className="container my-4">
            <Title text="Zitao's Note App" />
            <div className="row">
                <div className="col">
                    <ProjectBuilder submit={projectSubmitted} />
                </div>
            </div>
            <div  id="section">
                <h2>Your Projects</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {
                    Object.entries(data).map(([key, subject], i) => (
                        <ProjectSelect subject={subject} projectName={key}/>
                    ))

                }
                {
                    (projectInfo.project !== "")&&
                    <><ProjectSelect projectName={projectInfo.project} subject={""} /></>
                }
            </div>
        </div>
    )
}


export default App;