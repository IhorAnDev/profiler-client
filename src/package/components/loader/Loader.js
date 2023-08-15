import {LoaderWrap, SpinnerImg} from "./styled";
import spinner from "./loader.svg";

export const Loader = ({isInner}) => {
    return (
        <LoaderWrap isInner={isInner}>
            <SpinnerImg src={spinner} alt="spinner"/>
        </LoaderWrap>
    )
}
