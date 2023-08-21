import {useGetPortfolioCommentsQuery, useGetPortfolioImagesQuery} from "../../../api/apiSlice";
import Portfolio from "./Portfolio";
import {Loader} from "../loader/Loader";


const PortfolioWithImage = ({portfolioId, ...portfolioProps}) => {
    const {
        data,
        isLoading,
        isError,
        isFetching
    } = useGetPortfolioImagesQuery(portfolioId);

    const {
        data: comments,
        isLoading: isCommentsLoading,
        isError: isCommentsError,
        isFetching: isCommentsFetching
    } = useGetPortfolioCommentsQuery(portfolioId);


    if (isFetching || isCommentsFetching) {
        return <Loader/>; // Display a preloader
    }

    if (isError || isCommentsError) {
        return <h1>Error</h1>; // Display an error message
    }

    return <Portfolio image={data.imageByte} {...portfolioProps} comments={comments} />;
};

export default PortfolioWithImage;
