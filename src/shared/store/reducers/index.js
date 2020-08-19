import { combineReducers } from 'redux';
import articlesReducers from './article.reducer';
import brandsReducers from './brand.reducer';
import cartsReducers from './cart.reducer';
import categoriesReducers from './category.reducer';
import subCategoriesReducers from './sub-category.reducer';
import ordersReducers from './order.reducer';
import productsReducers from './product.reducer';
import propertiesReducers from './property.reducer';
import tagsReducers from './tag.reducer';
import usersReducers from './user.reducer';
import sectionsReducers from './section.reducer';
import reviewsReducers from './review.reducer';

export default combineReducers({
    article: articlesReducers,
    brand: brandsReducers,
    cart: cartsReducers,
    category: categoriesReducers,
    order: ordersReducers,
    product: productsReducers,
    property: propertiesReducers,
    review: reviewsReducers,
    section: sectionsReducers,
    subCategory: subCategoriesReducers,
    tag: tagsReducers,
    user: usersReducers
});