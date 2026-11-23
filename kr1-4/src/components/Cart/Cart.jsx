import { Card, List, Button, Empty } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styles from './Cart.module.css'

export const Cart = ({ items, total, onRemove }) => {
  return (
    <Card title="🛒 Корзина" className={styles.cart}>
      {items.length === 0 ? (
        <Empty description="Корзина пуста" />
      ) : (
        <>
          <List
            dataSource={items}
            renderItem={(book) => (
              <List.Item
                actions={[
                  <Button
                    key="del"
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => onRemove(book.id)}
                  >
                    Удалить
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={book.title}
                  description={`${book.author} • ${book.genre}`}
                />
                <span className={styles.price}>{book.price} ₽</span>
              </List.Item>
            )}
          />

          <div className={styles.total}>
            <span>Итого:</span>
            <span className={styles.sum}>{total} ₽</span>
          </div>
        </>
      )}
    </Card>
  )
}