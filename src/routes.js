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
    },
];
