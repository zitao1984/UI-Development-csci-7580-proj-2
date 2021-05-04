const NoteLink = props =>
    <div className="col gy-4 ">
        <div className="card border-primary border-2 mb-4" >
            <div className="card-header">Link Note</div>
            <div className="card-body text-primary ">
                {
                    (props.text!=="") ?
                        <p className="card-text whitespace"><a href={props.url}>{props.text}</a></p>
                        :<p className="card-text whitespace"><a href={props.url}>{props.url}</a></p>
                }
            </div>
        </div>
    </div>

export default NoteLink;