import { combineReducers } from 'redux';
import appReducers from './app.reducer';
import articleReducers from './article.reducer';
import authReducers from './auth.reducer';
import brandsReducers from './brand.reducer';
import cartReducers from './cart.reducer';
import categoryReducers from './category.reducer';
import subCategoryReducers from './sub-category.reducer';
import orderReducers from './order.reducer';
import productReducers from './product.reducer';
import propertyReducers from './property.reducer';
import tagReducers from './tag.reducer';
import userReducers from './user.reducer';
import sectionReducers from './section.reducer';
import reviewReducers from './review.reducer';

import { LOGOUT, LOGIN_SUCCESS } from '../types/auth.types';
import { SPORTSGEAR_USER } from '../../constants/app-constant';

const reducers = combineReducers({
    app: appReducers,
    article: articleReducers,
    auth: authReducers,
    brand: brandsReducers,
    cart: cartReducers,
    category: categoryReducers,
    order: orderReducers,
    product: productReducers,
    property: propertyReducers,
    review: reviewReducers,
    section: sectionReducers,
    subCategory: subCategoryReducers,
    tag: tagReducers,
    user: userReducers
});

export default (state, action) => {
    if (action.type === LOGOUT) {
        localStorage.removeItem(SPORTSGEAR_USER);
        state = undefined;
    } else if (action.type === LOGIN_SUCCESS) {
        state = {
            ...state,
            app: {
                ...state.app,
                user: action.payload.data
            }
        };
    }
    return reducers(state, action);
};