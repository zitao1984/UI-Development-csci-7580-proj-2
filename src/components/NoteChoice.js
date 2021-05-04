import {NOTE_TYPE} from "../data/data";
import NoteLink from "./NoteLink";
import NoteText from "./NoteText";


const NoteChoice =props=>{
    if (props.notes.type === NOTE_TYPE.LINK){
        return(
                <NoteLink
                    url={props.notes.url}
                    text={props.notes.text}
                />
        )
    }else if (props.notes.type === NOTE_TYPE.TEXT){
        return (
            <NoteText
                title={props.notes.title}
                text={props.notes.text}
            />
        )
    }else{
        return("")
    }

}

export default NoteChoice;