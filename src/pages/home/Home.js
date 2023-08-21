import Portfolio from "../../package/components/portfolio/Portfolio";
import './home.scss'
import {useGetPortfoliosQuery} from "../../api/apiSlice";
import {Loader} from "../../package/components/loader/Loader";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PortfolioWithImage from "../../package/components/portfolio/PortfolioWithImage";

const Home = () => {

    const {
        data: portfolios = [],
        isFetching,
        isLoading,
        isError,
    } = useGetPortfoliosQuery();

    if (isFetching || isLoading) {
        return <Loader/>;
    } else if (isError) {
        return <h1>Error</h1>;
    }

    const renderPortfolioList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition timeout={0} classNames="portfolio">
                    <h5>Here is no portfolio yet</h5>
                </CSSTransition>
            )
        }

        return arr.map(({id, ...props}) => {
                return (
                    <CSSTransition key={id}
                                   timeout={500}
                                   classNames="portfolio">
                        <PortfolioWithImage portfolioId={id} {...props} />
                    </CSSTransition>
                )
            }
        )
    }

    const elements = renderPortfolioList(portfolios);
    return (
        <div className="home__container">
            <TransitionGroup component="ul">
                {elements}
            </TransitionGroup>
        </div>
    )
}

export default Home;
