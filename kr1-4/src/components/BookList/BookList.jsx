import { Spin, Empty } from 'antd'
import { BookCard } from '../BookCard/BookCard.jsx'
import styles from './BookList.module.css'

export const BookList = ({ books, loading, cartIds, onAdd }) => {
  if (loading) {
    return (
      <div className={styles.center}>
        <Spin size="large" tip="Загрузка книг..." />
      </div>
    )
  }

  if (books.length === 0) {
    return <Empty description="Книги не найдены" />
  }

  return (
    <section className={styles.grid}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}                             
          isInCart={cartIds.has(book.id)}
          onAdd={onAdd}
        />
      ))}
    </section>
  )
}