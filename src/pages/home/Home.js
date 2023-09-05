import Portfolio from "../../package/components/portfolio/Portfolio";
import './home.scss'
import {useGetPortfoliosQuery} from "../../api/apiSlice";
import {Loader} from "../../package/components/loader/Loader";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {JWT_ERROR, PATH_NAMES} from "../../consts";
import {Navigate, useNavigate} from "react-router-dom";
import React from "react";

const Home = () => {

    const {
        data: portfolios = [],
        isFetching,
        isLoading,
        isError,
        error,
    } = useGetPortfoliosQuery();
    const navigate = useNavigate();

    if (isFetching || isLoading) {
        return <Loader/>;
    } else if (isError && error.data === JWT_ERROR) {
        return <Navigate to={PATH_NAMES.LOGIN} replace/>
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
                        <Portfolio portfolioId={id} {...props} />
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
