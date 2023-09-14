const DeleteModal = (props) => {
    return (
        <div className="modalall">
            <div className="modalin">
                <h5 className="shadow rounded p-2 bg-gradient-light text-dark">Silmek İstiyor Musunuz?</h5>
                <button onClick={() => props.setShowDelete(false)} className="btn btn-warning">Vazgeç</button>
                <button onClick={() => props.handleDelete()} className="btn btn-danger">Onaylıyorum</button>
            </div>
        </div>
    )

}

export default DeleteModal