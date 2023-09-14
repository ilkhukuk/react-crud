const BookCarts = ({ data, handleModal, handleRead, handleEditModal }) => {
  return (
    <div className="container w-75 d-flex gap-1 justify-content-between border shadow align-item-center rounded p-3">
      <div>
        <h5 className={data.isRead ? 'text-decoration-line-through text-danger' : ''} >{data.title}</h5>
        <p>{new Date(data.date).toLocaleDateString()}</p>
      </div>
      <div className="d-flex my-3 gap-1 justify-content-center">
        <button className="btn btn-danger"
          onClick={() => handleModal(data.id)}>Sil</button>
        <button
          onClick={() => handleEditModal(data)}
          className="btn btn-info">Düzelt</button>
        <button
          onClick={() => handleRead(data)}
          className="btn btn-success">
          {data.isRead ? "Okundu" : "Okunmadı"}</button>
      </div>
    </div>
  )
}
export default BookCarts