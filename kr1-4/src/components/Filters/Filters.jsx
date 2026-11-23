import { Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styles from './Filters.module.css'

export const Filters = ({
  search,
  onSearchChange,
  genre,
  onGenreChange,
  genres,
}) => {
  return (
    <div className={styles.filters}>
      <Input
        className={styles.search}
        placeholder="Поиск по названию..."
        prefix={<SearchOutlined />}
        allowClear
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Select
        className={styles.select}
        value={genre}
        onChange={onGenreChange}
        options={genres.map((g) => ({
          value: g,
          label: g === 'all' ? 'Все жанры' : g,
        }))}
      />
    </div>
  )
}