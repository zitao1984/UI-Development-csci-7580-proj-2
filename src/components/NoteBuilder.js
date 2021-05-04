import {useState} from "react";
import {NOTE_TYPE} from "../data/data";

const NotesBuilder = props => {
    const [url, updateAndValidateUrl] = useState({
        url: "",
        isValid: undefined
    });

    const [title, updateAndValidateTitle] = useState({
        title:"",
        isValid: undefined

    });
    const [text, updateAndValidateText] = useState({
        text:"",
        isValid:undefined

    });

    const [type, updateType] = useState({type:""});

    const formSubmit = event => {
        // A "submit" button will refresh the page, which we don't want in this case
        // The following line prevents the page refresh.
        event.preventDefault();
        props.submit({
            title: title.title,
            type: type,
            url: url.url,
            text: text.text,
        }, "Controlled Form with Validation");

    }

    const onUrlInputChange = event => {
        updateAndValidateUrl({
            url: event.target.value,
            isValid:event.target.value.length >1
        })
    }

    const onTextInputChange = event => {
        updateAndValidateText({
            text: event.target.value,
            isValid:event.target.value.length >0
        })
    }
    const onTitleInputChange = event =>{
        updateAndValidateTitle({
            title: event.target.value,
             isValid: event.target.value.length >0
    })
    }

    const linkNoteChecking= () =>{
        return type === NOTE_TYPE.LINK && url.isValid === false;

    }


    const canSubmit =() => {
        if(type===NOTE_TYPE.LINK && url.isValid){
            return true
        }
        else return !!((type === NOTE_TYPE.TEXT && text.isValid) || (type === NOTE_TYPE.TEXT && title.isValid));

    };


    return (
        <form onSubmit={formSubmit} noValidate>
            <h4>Add a new note</h4>
            <div className="fontAddNote">
                <div className="row my-2 ">
                    <legend className="col-form-label col-sm-3 pt-0">Note type:</legend>
                    <div className="col-auto">
                        <input type="radio" className="form-check-input" id="text" name="noteType"
                               checked={type === NOTE_TYPE.TEXT}
                               onChange={e => updateType(e.target.id)} />
                        {" "}
                        <label className="form-check-label" htmlFor="text">Text{" "}</label>
                        <div className="invalid-feedback feedbackCustomize" style={type === NOTE_TYPE.TEXT? {display:"block"} : {display: "none"}}>For Text note: text and title cannot both be empty</div>
                    </div>

                    <div className="col-auto">
                        <input type="radio" className="form-check-input" id="link" name="noteType"
                               checked={type === NOTE_TYPE.LINK}
                               onChange={e => updateType(e.target.id)} />
                        {" "}
                        <label className="form-check-label" htmlFor="link">Link</label>
                        <div className="invalid-feedback feedbackCustomize" style={type === NOTE_TYPE.LINK? {display:"block"} : {display: "none"}}>For Link note: it must have URL</div>
                    </div>
                </div>

                <div className="row my-2">
                    <label className="col-sm-3 col-form-label" htmlFor="title">Title:</label>
                    <div className="col-sm-9">
                        <input id="title" className="form-control" type="text"
                               value={title.title}
                               onChange={e => onTitleInputChange(e)}/>
                    </div>
                </div>

                <div className="row my-2">
                    <label className="col-sm-3 col-form-label" htmlFor="text">Text:</label>
                    <div className="col-sm-9">
                        <input id="text" className="form-control" type="text"
                               value={text.text}
                               onChange={e => onTextInputChange(e)}/>
                    </div>
                </div>

                <div className="row my-2">
                    <label className="col-sm-3 col-form-label" htmlFor="url">URL:</label>
                    <div className="col-sm-9">
                        <input id="url" className="form-control" type="text"
                               value={url.url}
                               onChange={e => onUrlInputChange(e)}/>
                        <div className="invalid-feedback" style={linkNoteChecking()? {display:"block"} : {display: "none"}}>For link note: you must have URL</div>
                    </div>
                </div>
            </div>

            <div className="row my-2">
                <div className="col text-end">
                    <button className="btn btn-primary" type="submit" disabled={!canSubmit()} color={canSubmit ? "primary" : "secondary"}>Submit</button>
                </div>
            </div>
        </form>

    )
}

export default NotesBuilder;