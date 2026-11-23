import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import styles from './Header.module.css'

export const Header = ({ cartCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>📚 Книжный магазин</div>

      <Badge count={cartCount} showZero color="#52c41a">
        <ShoppingCartOutlined className={styles.icon} />
      </Badge>
    </header>
  )
}