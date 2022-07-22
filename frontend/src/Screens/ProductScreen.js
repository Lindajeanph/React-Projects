import React, { useEffect } from 'react';
import data from '../data';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { detailsProduct, saveProductReview} from '../actions/productActions';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_SAVE_RESET} from '../constants/productConstants';


function ProductScreen (props) {

    const productDetails = useSelector(state => state.productDetails);
    const dispatch = useDispatch;

    useEffect(() => {
        if (productSaveSuccess) {
            alert('Review submitted successfully.');
            setRating(0);
            setComment('');
            dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
        }
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [productSaveSuccess]);
    const submitHandler = (e) => {
    e.preventDefault();
    //dispatch actions
        dispatch(
            saveProductReview(props.match.params.id, {
                name: userInfo.name,
                rating: rating,
                comment: comment,
            })
        );
    };

    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div className="details">
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info"></div>
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars({product.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
        </div>
        <div className="details-action"></div>
            <ul>
                <li>
                    Price: {product.price}
                </li>
                <li>
                    Status: {product.status}
                </li>
                <li>
                    Qty: <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </li>
                <li>
                    <button className="button">Add to Cart</button>
                </li>
            </ul>
        </div>
}
export default ProductScreen;