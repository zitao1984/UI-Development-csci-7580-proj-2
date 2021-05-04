import ProjectContent from "./ProjectContent";
import {useState} from "react";

const ProjectSelect = props => {
    const[project,setProject] = useState(true);
    return(
    <div className="projectContainer">
        <div>
            <h3>{props.projectName}</h3>
            <div className="form-check ">
                <input className="form-check-input" type="checkbox"  id={"showFor"+props.projectName}
                       checked={project} onChange={() => setProject(!project)}/>
                <label className="form-check-label" htmlFor={"showFor"+props.projectName}>Show related notes</label>
            </div>
        </div>
        <div>{
            (project)?
                <ProjectContent subject={props.subject} projectName={props.projectName}/>:""
        }
        </div>
    </div>
    )
}

export default ProjectSelect;
