
import { useState } from 'react';
import { v4 } from 'uuid';
import BookCarts from './components/BookCarts';
import DeleteModal from './components/DeleteModal';
import { ToastContainer, toast } from 'react-toastify';
import EditModal from './components/EditModal';



import 'react-toastify/dist/ReactToastify.css';

function App() {

  // STATE

  const [books, setBooks] = useState([])
  const [showDelete, setShowDelete] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [showEdit, setShowEdit] = useState(false)
  const [editItem, setEditItem] = useState(null)

  // FOKSİYONLAR

  // düzeltme fonksiyonu
  const handleRead = (editRead) => {

    // isRead değerini true yapma
    const update = { ...editRead, isRead: !editRead.isRead }

    // diziyi güncelleme
    const newBooks = books.map((item) => item.id !== update.id ? item : update)

    // güncel diziyi state gönderme
    setBooks(newBooks)
  }

  // ekleme fonksiyonu
  const HandleSubmit = (e) => {
    e.preventDefault()
    const title = e.target[0].value

    if (!title) {
      toast.warn('Lütfen Bir Kitap Adı Giriniz!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const newBook = {
      id: v4(),
      title,
      date: new Date(),
      isRead: false,
    }

    setBooks([newBook, ...books])

    toast.success('Başarıyla eklendi', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    e.target[0].value = ''
  }

  // silme modal fonksiyonu
  const handleModal = (id) => {
    setDeleteId(id)
    setShowDelete(true)
  }

  // silme fonksiyonu
  const handleDelete = () => {
    const filtred = books.filter((book) => book.id !== deleteId)

    setBooks(filtred)

    setShowDelete(false)

    toast.error('Başarı ile Silindi!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  }

  // düzeltme fonksiyonu
  const handleEditModal = (item) => {
    setShowEdit(true)
    setEditItem(item)
  }

  const updateItem = () => {

    const newBook = books.map((book) => book.id !== editItem.id ? book : editItem)

    setBooks(newBook)

    setShowEdit(false)

    toast.info('Başarı ile düzenlendi', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  }


  return (
    <div className="App">
      {/* HEADER */}
      <header className="bg-dark text-light text-center py-2">
        <h1>KİTAP KURDU UYGULAMASI</h1>
      </header>

      {/* FORM ALANI */}
      <main className="container text-center ">
        <form onSubmit={HandleSubmit} className="d-flex m-4 gap-2">
          <input type="text" className="form-control shadow" placeholder="Lütfen Bir Kitap İsmi Giriniz..." />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>

        {/* KİTAP İSMİ GİRİLMEMİŞSE */}
        {books.length === 0 && <h4 className="text-danger">Henüz Bir Kitap İsmi Girilmedi</h4>}

        {/* BOOKS */}
        {books.map((book) => (
          <BookCarts key={book.id}
            handleModal={handleModal}
            handleRead={handleRead}
            handleEditModal={handleEditModal}
            data={book} />))}
      </main>

      {/* MODALLAR */}
      {/* 1-silme */}
      {showDelete && <DeleteModal setShowDelete={setShowDelete} handleDelete={handleDelete} />}
      {showEdit && <EditModal setShowEdit={setShowEdit} editItem={editItem} setEditItem={setEditItem} updateItem={updateItem} />}



      <ToastContainer />

      <a href='https://www.linkedin.com/in/ilkhukuk/' target='_blank'
        className='fixed-bottom bg-light text-danger fw-bolder text-decoration-none text-center'>&copy; 2023 ilkhukuk</a>
    </div>
  );
}

export default App;
