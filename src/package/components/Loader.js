import {LoaderWrap, SpinnerImg} from "./loader/styled";
import spinner from "./loader/loader.svg";

export const Loader = ({isInner}) => {
    return (
        <LoaderWrap isInner={isInner}>
            <SpinnerImg src={spinner} alt="spinner"/>
        </LoaderWrap>
    )

}
