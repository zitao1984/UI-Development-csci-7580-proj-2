const NoteText = props =>

        <div className="col gy-4">
            <div className="card border-success mb-3 border-2">
                <div className="card-header">Text Note</div>
                <div className="card-body text-success">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text whiteSpace">{props.text}</p>
                </div>
            </div>
        </div>


export default NoteText;