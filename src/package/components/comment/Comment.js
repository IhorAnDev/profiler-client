const Comment = ({userName, message, id}) => {

    function handleCommentClick(id) {
        console.log(id);
    }
    
    return <li className="portfolio__comments_item"
               onClick={() => handleCommentClick(id)}>{userName}: {message}</li>
}

export default Comment;
