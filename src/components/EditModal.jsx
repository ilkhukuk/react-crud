const EditModal = (props) => {

    return (
        <div className="modalall">
            <div className="modalin">
                <h5 className="p-2 bg-gradient-light text-dark">Kitabı düzenleyin</h5>
                <input type="text"
                    className="form-control shadow"
                    value={props.editItem.title}
                    onChange={(e) => props.setEditItem({ ...props.editItem, title: e.target.value, date: new Date() })} />

                <div className="d-flex justify-content-between">
                    <button
                        onClick={() => props.setShowEdit(false)}
                        className="btn btn-warning">Vazgeç</button>
                    <button
                        onClick={() => props.updateItem()}
                        className="btn btn-success">Kaydet</button>
                </div>

            </div>
        </div>
    )

}

export default EditModal