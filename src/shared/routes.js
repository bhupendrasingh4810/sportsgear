import Dashboard from '../pages/Dashboard/Dashboard';
import Article from '../pages/Article/Article';
import Brand from '../pages/Brand/Brand';
import Category from '../pages/Category/Category';
import Cart from '../pages/Cart/Cart';
import Order from '../pages/Order/Order';
import Product from '../pages/Product/Product';
import Property from '../pages/Property/Property';
import Section from '../pages/Section/Section';
import SubCategory from '../pages/SubCategory/SubCategory';
import User from '../pages/User/User';
import Tag from '../pages/Tag/Tag';
import ArticleDetail from '../pages/Article/ArticleDetail';
import AddBrand from '../pages/Brand/AddBrand';
import EditBrand from '../pages/Brand/EditBrand';
import CategoryDetail from '../pages/Category/CategoryDetail';
import SectionDetail from '../pages/Section/SectionDetail';
import SubCategoryDetail from '../pages/SubCategory/SubCategoryDetail';
import UserDetail from '../pages/User/UserDetail';
import PropertyDetail from '../pages/Property/PropertyDetail';
import ProductDetail from '../pages/Product/ProductDetail';
import Review from '../pages/Review/Review';

export const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        page: "dashboard",
        icon: "fas fa-th",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/article",
        name: "Articles",
        page: "article",
        icon: "fas fa-tshirt",
        component: Article,
        layout: "/admin"
    },
    {
        path: "/brand",
        name: "Brands",
        page: "brand",
        icon: "fas fa-dice-d6",
        component: Brand,
        layout: "/admin"
    },
    {
        path: "/category",
        name: "Categories",
        page: "category",
        icon: "fas fa-sitemap",
        component: Category,
        layout: "/admin"
    },
    {
        path: "/cart",
        name: "Carts",
        page: "cart",
        icon: "fas fa-shopping-cart",
        component: Cart,
        layout: "/admin"
    },
    {
        path: "/order",
        name: "Orders",
        page: "order",
        icon: "fas fa-shopping-bag",
        component: Order,
        layout: "/admin"
    },
    {
        path: "/product",
        name: "Products",
        page: "product",
        icon: "fas fa-warehouse",
        component: Product,
        layout: "/admin"
    },
    {
        path: "/property",
        name: "Properties",
        page: "property",
        icon: "fas fa-braille",
        component: Property,
        layout: "/admin"
    },
    {
        path: "/review",
        name: "Reviews",
        page: "review",
        icon: "fas fa-splotch",
        component: Review,
        layout: "/admin"
    },
    {
        path: "/section",
        name: "Sections",
        page: "section",
        icon: "fas fa-border-all",
        component: Section,
        layout: "/admin"
    },
    {
        path: "/sub-category",
        name: "Sub Categories",
        page: "sub-category",
        icon: "fas fa-sitemap",
        component: SubCategory,
        layout: "/admin"
    },
    {
        path: "/tag",
        name: "Tags",
        page: "tag",
        icon: "fas fa-tags",
        component: Tag,
        layout: "/admin"
    },
    {
        path: "/users",
        name: "Users",
        page: "user",
        icon: "fas fa-users",
        component: User,
        layout: "/admin"
    }
];

export const detailPageRoutes = [
    {
        path: "/add",
        name: "Add Article",
        page: "article_detail",
        icon: "ni ni-tv-2 text-primary",
        component: ArticleDetail,
        layout: "/admin/article"
    },
    {
        path: "/edit/:id",
        name: "Edit Article",
        page: "article_detail",
        icon: "ni ni-tv-2 text-primary",
        component: ArticleDetail,
        layout: "/admin/article"
    },
    {
        path: "/:id",
        name: "Article Detail",
        page: "article_detail",
        icon: "ni ni-tv-2 text-primary",
        component: ArticleDetail,
        layout: "/admin/article"
    },
    {
        path: "/add",
        name: "Add Brand",
        page: "add_brand",
        icon: "ni ni-tv-2 text-primary",
        component: AddBrand,
        layout: "/admin/brand"
    },
    {
        path: "/edit/:id",
        name: "Edit Brand",
        page: "edit_brand",
        icon: "ni ni-tv-2 text-primary",
        component: EditBrand,
        layout: "/admin/brand"
    },
    {
        path: "/add",
        name: "Add Section",
        page: "section_detail",
        icon: "ni ni-tv-2 text-primary",
        component: SectionDetail,
        layout: "/admin/section"
    },
    {
        path: "/edit/:id",
        name: "Edit Section",
        page: "section_detail",
        icon: "ni ni-tv-2 text-primary",
        component: SectionDetail,
        layout: "/admin/section"
    },
    {
        path: "/:id",
        name: "Section Detail",
        page: "section_detail",
        icon: "ni ni-tv-2 text-primary",
        component: SectionDetail,
        layout: "/admin/section"
    },
    {
        path: "/add",
        name: "Add Category",
        page: "category_detail",
        icon: "ni ni-tv-2 text-primary",
        component: CategoryDetail,
        layout: "/admin/category"
    },
    {
        path: "/edit/:id",
        name: "Edit Category",
        page: "category_detail",
        icon: "ni ni-tv-2 text-primary",
        component: CategoryDetail,
        layout: "/admin/category"
    },
    {
        path: "/:id",
        name: "Category Detail",
        page: "category_detail",
        icon: "ni ni-tv-2 text-primary",
        component: CategoryDetail,
        layout: "/admin/category"
    },
    {
        path: "/add",
        name: "Add Sub Category",
        page: "sub_category_detail",
        icon: "ni ni-tv-2 text-primary",
        component: SubCategoryDetail,
        layout: "/admin/sub-category"
    },
    {
        path: "/edit/:id",
        name: "Edit Sub Category",
        page: " sub_category_detail",
        icon: "ni ni-tv-2 text-primary",
        component: SubCategoryDetail,
        layout: "/admin/sub-category"
    },
    {
        path: "/:id",
        name: "Sub Category Detail",
        page: "sub_category_detail",
        icon: "ni ni-tv-2 text-primary",
        component: SubCategoryDetail,
        layout: "/admin/sub-category"
    },
    {
        path: "/add",
        name: "Add User",
        page: "user_detail",
        icon: "ni ni-tv-2 text-primary",
        component: UserDetail,
        layout: "/admin/user"
    },
    {
        path: "/edit/:id",
        name: "Edit User",
        page: " user_detail",
        icon: "ni ni-tv-2 text-primary",
        component: UserDetail,
        layout: "/admin/user"
    },
    {
        path: "/:id",
        name: "User Detail",
        page: "user_detail",
        icon: "ni ni-tv-2 text-primary",
        component: UserDetail,
        layout: "/admin/user"
    },
    {
        path: "/add",
        name: "Add Property",
        page: "property_detail",
        icon: "ni ni-tv-2 text-primary",
        component: PropertyDetail,
        layout: "/admin/property"
    },
    {
        path: "/edit/:id",
        name: "Edit Property",
        page: " property_detail",
        icon: "ni ni-tv-2 text-primary",
        component: PropertyDetail,
        layout: "/admin/property"
    },
    {
        path: "/:id",
        name: "Property Detail",
        page: "property_detail",
        icon: "ni ni-tv-2 text-primary",
        component: PropertyDetail,
        layout: "/admin/property"
    },
    {
        path: "/add",
        name: "Add Product",
        page: "product_detail",
        icon: "ni ni-tv-2 text-primary",
        component: ProductDetail,
        layout: "/admin/product"
    },
    {
        path: "/edit/:id",
        name: "Edit Product",
        page: " product_detail",
        icon: "ni ni-tv-2 text-primary",
        component: ProductDetail,
        layout: "/admin/product"
    },
    {
        path: "/:id",
        name: "Product Detail",
        page: "product_detail",
        icon: "ni ni-tv-2 text-primary",
        component: ProductDetail,
        layout: "/admin/product"
    }
];
