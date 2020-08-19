import { combineReducers } from 'redux';
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

export default combineReducers({
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