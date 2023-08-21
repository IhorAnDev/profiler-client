import like from "../../../resources/image/like.png";
import './portfolio.scss';
import {Loader} from "../loader/Loader";

const Portfolio = ({image, title, description, likes, userName, location, category, comments}) => {

    const newImage = `data:image/png;base64,${image}`;

    // TODO create separate component for comments
    console.log(comments);
    const renderComments = (arr) => {
        if (arr.length === 0) {
            return (
                <li>"There are no comments"</li>
            )
        }
        return arr.map(({id, message}) => {
            return (
                <li key={id} className="portfolio__comments_item">{message}</li>
            )
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
            <div className="portfolio__image">
                <img src={newImage} alt="portfolio"/>
            </div>
            <div className="portfolio__owner">
                <p className="portfolio__owner_text">{userName}</p>
            </div>
            <div className="portfolio__like">
                <div className="portfolio__like_image">
                    <img src={like} alt="like"/>
                </div>
                <div className="portfolio__like_text">
                    <p>{likes}</p>
                </div>
            </div>
            <div className="portfolio__comments">
                <ul>
                    {elements}
                </ul>
            </div>
            <div className="portfolio__input">
                <label className="portfolio__input_label" htmlFor="commentId">
                    <input className="portfolio__input_label_input"
                           placeholder="Leave comment"
                           type="text" name="comment" id="commentId"/>
                </label>
            </div>
        </li>
    )
}

export default Portfolio;
