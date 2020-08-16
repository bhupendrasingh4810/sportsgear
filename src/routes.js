import Dashboard from './pages/Dashboard/Dashboard';
import Article from './pages/Article/Article';
import Brand from './pages/Brand/Brand';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Product from './pages/Product/Product';
import Property from './pages/Property/Property';
import Section from './pages/Section/Section';
import SubCategory from './pages/SubCategory/SubCategory';
import User from './pages/User/User';
import Tag from './pages/Tag/Tag';
import ArticleDetail from './pages/Article/ArticleDetail';
import BrandDetail from './pages/Brand/BrandDetail';
import CategoryDetail from './pages/Category/CategoryDetail';
import SectionDetail from './pages/Section/SectionDetail';

export const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        page: "dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/article",
        name: "Articles",
        page: "article",
        icon: "ni ni-tv-2 text-primary",
        component: Article,
        layout: "/admin"
    },
    {
        path: "/brand",
        name: "Brands",
        page: "brand",
        icon: "ni ni-tv-2 text-primary",
        component: Brand,
        layout: "/admin"
    },
    {
        path: "/category",
        name: "Categories",
        page: "category",
        icon: "ni ni-tv-2 text-primary",
        component: Category,
        layout: "/admin"
    },
    {
        path: "/cart",
        name: "Carts",
        page: "cart",
        icon: "ni ni-tv-2 text-primary",
        component: Cart,
        layout: "/admin"
    },
    {
        path: "/order",
        name: "Orders",
        page: "order",
        icon: "ni ni-tv-2 text-primary",
        component: Order,
        layout: "/admin"
    },
    {
        path: "/product",
        name: "Products",
        page: "product",
        icon: "ni ni-tv-2 text-primary",
        component: Product,
        layout: "/admin"
    },
    {
        path: "/property",
        name: "Properties",
        page: "property",
        icon: "ni ni-tv-2 text-primary",
        component: Property,
        layout: "/admin"
    },
    {
        path: "/section",
        name: "Sections",
        page: "section",
        icon: "ni ni-tv-2 text-primary",
        component: Section,
        layout: "/admin"
    },
    {
        path: "/sub-category",
        name: "Sub Categories",
        page: "sub-category",
        icon: "ni ni-tv-2 text-primary",
        component: SubCategory,
        layout: "/admin"
    },
    {
        path: "/tag",
        name: "Tags",
        page: "tag",
        icon: "ni ni-tv-2 text-primary",
        component: Tag,
        layout: "/admin"
    },
    {
        path: "/users",
        name: "Users",
        page: "user",
        icon: "ni ni-tv-2 text-primary",
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
        page: "brand_detail",
        icon: "ni ni-tv-2 text-primary",
        component: BrandDetail,
        layout: "/admin/brand"
    },
    {
        path: "/edit/:id",
        name: "Edit Brand",
        page: "brand_detail",
        icon: "ni ni-tv-2 text-primary",
        component: BrandDetail,
        layout: "/admin/brand"
    },
    {
        path: "/:id",
        name: "Brand Detail",
        page: "brand_detail",
        icon: "ni ni-tv-2 text-primary",
        component: BrandDetail,
        layout: "/admin/brand"
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
    // {
    //     path: "/category",
    //     name: "Categories",
    //     page: "category",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: Category,
    //     layout: "/admin"
    // },
    // {
    //     path: "/cart",
    //     name: "Carts",
    //     page: "cart",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: Cart,
    //     layout: "/admin"
    // },
    // {
    //     path: "/order",
    //     name: "Orders",
    //     page: "order",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: Order,
    //     layout: "/admin"
    // },
    // {
    //     path: "/product",
    //     name: "Products",
    //     page: "product",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: Product,
    //     layout: "/admin"
    // },
    // {
    //     path: "/property",
    //     name: "Properties",
    //     page: "property",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: Property,
    //     layout: "/admin"
    // },
    // {
    //     path: "/section",
    //     name: "Sections",
    //     page: "section",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: Section,
    //     layout: "/admin"
    // },
    // {
    //     path: "/sub-category",
    //     name: "Sub Categories",
    //     page: "sub-category",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: SubCategory,
    //     layout: "/admin"
    // },
    // {
    //     path: "/tag",
    //     name: "Tags",
    //     page: "tag",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: Tag,
    //     layout: "/admin"
    // },
    // {
    //     path: "/users",
    //     name: "Users",
    //     page: "user",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: User,
    //     layout: "/admin"
    // }
];
