import {useDispatch} from "react-redux";
import {addComment} from "./commentSlice";
import {Field, Form, Formik} from "formik";

const CommentForm = ({portfolioId}) => {
    const dispatch = useDispatch();

    const initialValues = {
        comment: '',
    }

    const handleSubmit = async (values, {resetForm}) => {

        try {
            await dispatch(addComment({portfolioId, message: values.comment}));
        } catch (error) {
            return <h1>Error</h1>;
        } finally {
            resetForm();
        }

    };
    return (
        <div className="portfolio__input">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label className="portfolio__input_label" htmlFor="commentId">
                        <Field type="text"
                               name="comment"
                               id="commentId"
                               placeholder="Leave a comment"
                        />
                        <button className="portfolio__input_label_button" type="submit">Submit</button>
                    </label>
                </Form>
            </Formik>
        </div>
    );
};

export default CommentForm;
