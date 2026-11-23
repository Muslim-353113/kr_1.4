import { useEffect, useState } from 'react'
import { Header, Filters, BookList, Cart } from './components'
import { BOOKS } from './data/books'
import styles from './App.module.css'

export const App = () => {
  const [books, setBooks] = useState([])  
  const [loading, setLoading] = useState(true) 
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('all')

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooks(BOOKS)
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title =
      cart.length > 0
        ? `Корзина (${cart.length}) — Книжный магазин`
        : 'Книжный магазин'
  }, [cart.length])

  const addToCart = (book) => {
    setCart((prev) =>
      prev.some((b) => b.id === book.id) ? prev : [...prev, book]
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((b) => b.id !== id))
  }

  const cartIds = new Set(cart.map((b) => b.id))

  const genres = ['all', ...new Set(BOOKS.map((b) => b.genre))]

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase().trim())
    const matchesGenre = genre === 'all' || book.genre === genre
    return matchesSearch && matchesGenre
  })

  const total = cart.reduce((sum, b) => sum + b.price, 0)

  return (
    <div className={styles.app}>
      <Header cartCount={cart.length} />

      <main className={styles.main}>
        <Filters
          search={search}
          onSearchChange={setSearch}
          genre={genre}
          onGenreChange={setGenre}
          genres={genres}
        />

        <BookList
          books={filteredBooks}
          loading={loading}
          cartIds={cartIds}
          onAdd={addToCart}
        />

        <Cart items={cart} total={total} onRemove={removeFromCart} />
      </main>
    </div>
  )
}