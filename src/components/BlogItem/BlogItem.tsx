import { Link } from 'react-router-dom'
import classes from './BlogItem.module.css'

type BlogItemProps = {
  id: number
  image: string
  category: string
  duration: string
  title: string
}

const BlogItem = ({ id, image, category, duration, title }: BlogItemProps) => {
  return (
    <div className={classes.blog_item}>
      {
        title === "7 Team Collaboration Tools for Remote Teams" ?
          <div><Link to='/post'><img src={image} alt={`post${id}`} /></Link> </div>
          :
          <div><img src={image} alt={`post${id}`} /></div>
      }
      <div className={classes.blog_item_info}>
        <p className={classes.blog_item_cat}>{category}</p>
        <p>{duration}</p>
      </div>
      <h3 className={classes.blog_item_title}>{title}</h3>
    </div>
  )
}

export default BlogItem