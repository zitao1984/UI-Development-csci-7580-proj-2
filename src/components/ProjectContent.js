import NoteChoice from "./NoteChoice";
import NoteBuilder from "./NoteBuilder";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const ProjectContent = props => {
    const[addNote,setAddNotes]=useState(
        false
    )
    const[noteInfo,setNoteSubmission]=useState({
            type:"",
            text:"",
            title:"",
            url:"",
        }
    )

    const noteSubmitted = (info, noteName) => {
        setNoteSubmission({...info, noteName})
    }


    return(
        <div>
            <div>
                {
                    Object.entries(props.subject).map(([key, subSubject], i) => (
                        <NoteChoice notes = {subSubject} />
                        )
                    )
                }
            </div>
            <div className="row">
                <div className="col">
                    <NoteChoice notes = {noteInfo}/>
                </div>
            </div>

            <div className="row newNoteButton">
                    <div className="form-check">
                        <input className="btn-check" type="checkbox" id={"addNotes"+props.projectName}
                               checked={addNote}  onChange={() => setAddNotes(!addNote)}/>
                        <label className="btn btn-primary buttonCustom"  htmlFor={"addNotes"+props.projectName}> <FontAwesomeIcon icon={faPlus} /> add notes</label>
                    </div>
            </div>
            <div className="row">
                <div className="col">{

                    addNote?
                        <NoteBuilder submit={noteSubmitted} />:""
                props
                </div>
            </div>
        </div>

    )
}

export default ProjectContent;
