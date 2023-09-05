
const Comment = ({userName, message}) => {
    return <li className="portfolio__comments_item">{userName}: {message}</li>
}

export default Comment;
