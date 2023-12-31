import like from "../../../resources/image/like.png";
import like_red from "../../../resources/image/like_r.png";
import './portfolio.scss';
import {useGetLikeCountQuery, useLikePortfolioMutation} from "../../../api/apiSlice";
import {useState} from "react";
import Comment from "../comment/Comment";
import CommentForm from "../comment/CommentForm";


const Portfolio = ({
                       portfolioId,
                       image,
                       title,
                       description,
                       likes,
                       userName,
                       location,
                       category,
                       comments,
                       ...portfolioProps
                   }) => {

    const newImage = `data:image/png;base64,${image.imageByte}`;
    const [likePortfolio, {isFetching, isError}] = useLikePortfolioMutation();
    const [likeCount, setLikeCount] = useState(likes);
    const likePortfolioHandler = (e) => {
        e.preventDefault();
        if (!isFetching && !isError) {
            if (likeCount === likes) {
                // User is liking the portfolio
                setLikeCount(likeCount + 1);
            } else {
                // User is unliking the portfolio
                setLikeCount(likeCount - 1);
            }
            likePortfolio(portfolioId);
        }
    };

    const handleCommentClick = (id) => {
        console.log(id);
    }


    // TODO create separate component for comments
    const renderComments = (arr) => {
        if (arr.length === 0) {
            return (
                <li>"There are no comments"</li>
            )
        }
        return arr.map(({id, ...props}) => {
            return <Comment handleCommentClick={handleCommentClick} key={id} {...props} id={id}/>
        })
    }


    const elements = renderComments(comments);
    return (
        <li className="portfolio__item">
            <div className="portfolio__title">
                <p className="portfolio__title_text"> {title}</p>
            </div>
            <div className="portfolio__location">
                <p className="portfolio__location_text">{location}</p>
            </div>
            <div className="portfolio__image"
                 onClick={() => console.log('Click on image ' + portfolioId)}
            >
                <img src={newImage} alt="portfolio"/>
            </div>
            <div className="portfolio__owner">
                <p className="portfolio__owner_text">{userName}</p>
            </div>
            <div className="portfolio__like">
                <div className="portfolio__like_image"
                     onClick={likePortfolioHandler}
                >
                    {likeCount > likes ? <img src={like_red} alt="like"/> : <img src={like} alt="like"/>}
                </div>
                <div className="portfolio__like_text">
                    <p>{likeCount}</p>
                </div>
            </div>
            <div className="portfolio__comments">
                <ul>
                    {elements}
                </ul>
            </div>
            <CommentForm portfolioId={portfolioId}/>
        </li>
    )
}

export default Portfolio;
