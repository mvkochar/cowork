import classes from './BlogItem.module.css'

type BlogItemProps = {
    id: number
    image: string
    category: string
    duration: string
    title: string
}

const BlogItem = ({id, image, category, duration, title}:BlogItemProps) => {
  return (
    <div className={classes.blog_item}>
        <div><img src={image} alt={`post${id}`} /></div>
        <div className={classes.blog_item_info}>
            <p className={classes.blog_item_cat}>{category}</p>
            <p>{duration}</p>
        </div>
        <h3 className={classes.blog_item_title}>{title}</h3>
    </div>
  )
}

export default BlogItem