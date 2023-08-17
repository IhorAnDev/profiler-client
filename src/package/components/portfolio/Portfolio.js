import portfolio from "../../../resources/image/dump.png";
import like from "../../../resources/image/like.png";
const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <div className="portfolio__body">
                <div className="portfolio__title">Java project portfolio</div>
                <div className="portfolio__location">Estonia</div>
                <div className="portfolio__image">
                    <img src={portfolio} alt="portfolio"/>
                </div>
                <div className="portfolio__owner">Pikuk</div>
                <div className="portfolio__like">
                    <img src={like} alt="like"/>
                </div>
                <div className="portfolio__comments">
                    <ul>
                        <li>Comment 1</li>
                        <li>Comment 2</li>
                        <li>Comment 3</li>
                    </ul>
                </div>
                <div className="portfolio__input">
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
