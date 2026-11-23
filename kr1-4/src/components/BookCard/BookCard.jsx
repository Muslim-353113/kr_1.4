import { Card, Button, Tag } from 'antd'
import styles from './BookCard.module.css'

export const BookCard = ({ book, isInCart, onAdd }) => {
  return (
    <Card
      className={styles.card}
      title={book.title}
      extra={<Tag color="blue">{book.genre}</Tag>}
    >
      <div className={styles.body}>
        <p className={styles.author}>{book.author}</p>
        <p className={styles.price}>{book.price} ₽</p>

        <Button
          type="primary"
          block
          disabled={isInCart}
          onClick={() => onAdd(book)}
        >
          {isInCart ? '✓ В корзине' : 'В корзину'}
        </Button>
      </div>
    </Card>
  )
}