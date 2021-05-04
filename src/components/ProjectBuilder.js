import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGrinBeam} from "@fortawesome/free-solid-svg-icons";

const ProjectBuilder = props => {
    const [project, updateAndValidateProject] = useState({
        project:"",
        isValid: undefined
    });


    const formSubmit = event => {
        // A "submit" button will refresh the page, which we don't want in this case
        // The following line prevents the page refresh.
        event.preventDefault();
        props.submit({
            project: project.project
        }, "Unnamed project");

    }

    const onProjectInputChange = event => {
        updateAndValidateProject({
            project: event.target.value,
            isValid:event.target.value.length >0
        })
    }


    let canSubmit = project.isValid;

    return (
        <div>
            <h2 >Got a new project?</h2>
            <form onSubmit={formSubmit} noValidate className="projectWindow">

                <div className="row my-2">
                    <label className="col-sm-3 col-form-label projectWindowFont" htmlFor="newProject">Submit a new project name:</label>
                    <div className="col-sm-9">
                        <input id="newProject" className="form-control" type="text"
                               value={project.project}
                               onChange={e => onProjectInputChange(e)}/>
                        <div className="invalid-feedback" style={project.isValid === false ? {display:"block"} : {display: "none"}}>Project name cannot be empty</div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col text-end">
                        <button className="btn btn-primary btn-lg" type="submit" disabled={!canSubmit} color={canSubmit ? "primary" : "secondary"}>Submit, Lets GO !! <FontAwesomeIcon icon={faGrinBeam} /></button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ProjectBuilder;