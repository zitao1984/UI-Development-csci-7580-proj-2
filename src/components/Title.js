import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStickyNote} from "@fortawesome/free-solid-svg-icons";

const Title = props =>
    <h1 className="title">{props.text} <FontAwesomeIcon icon={faStickyNote} /></h1>

export default Title;