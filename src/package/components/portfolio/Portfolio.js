import portfolio from "../../../resources/image/portfolio.jpg";
import like from "../../../resources/image/like.png";
import './portfolio.scss';

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <div className="portfolio__body">
                <div className="portfolio__title">
                    <p className="portfolio__title_text"> Java project portfolio</p>
                </div>
                <div className="portfolio__location">
                    <p className="portfolio__location_text">Estonia</p>
                </div>
                <div className="portfolio__image">
                    <img src={portfolio} alt="portfolio"/>
                </div>
                <div className="portfolio__owner">
                    <p className="portfolio__owner_text">Owner: John Doe</p>
                </div>
                <div className="portfolio__like">
                    <div className="portfolio__like_image">
                        <img src={like} alt="like"/>
                    </div>
                    <div className="portfolio__like_text">
                        <p>0</p>
                    </div>
                </div>
                <div className="portfolio__comments">
                    <ul>
                        <li>Comment 1</li>
                        <li>Comment 2</li>
                        <li>Comment 3</li>
                    </ul>
                </div>
                <div className="portfolio__input">
                    <label className="portfolio__input_label" htmlFor="commentId">
                        <input className="portfolio__input_label_input"
                               placeholder="Leave comment"
                               type="text" name="comment" id="commentId"/>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
