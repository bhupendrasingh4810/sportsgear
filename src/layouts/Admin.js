import React from 'react';
import AdminSidebar from '../components/Sidebars/AdminSidebar';
import { Switch, Redirect, Route } from 'react-router-dom';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import { routes, detailPageRoutes } from '../shared/routes';

export default props => {

    function getRoutes(routes, detailPageRoutes) {
        return [...routes, ...detailPageRoutes].map((prop, key) => {
            if (prop.layout.includes("/admin"))
                return (
                    <Route
                        exact
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            return null;
        });
    };

    function getBrandText(path) {
        for (let i = 0; i < routes.length; i++)
            if (path.indexOf(routes[i].layout + routes[i].path) !== -1)
                return routes[i].name;
        return "Brand";
    };

    return (
        <>
            <AdminSidebar
                {...props}
                routes={routes}
                logo={{
                    innerLink: "/admin/dashboard",
                    imgSrc: require("../assets/img/brand/logo.png"),
                    imgAlt: "..."
                }}
            />
            <div className="main-content">
                <AdminNavbar
                    {...props}
                    brandText={getBrandText(props.location.pathname)}
                />
                <Switch>
                    {getRoutes(routes, detailPageRoutes)}
                    <Redirect from="*" to="/admin/dashboard" />
                </Switch>
            </div>
        </>
    );
};