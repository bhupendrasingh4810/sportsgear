import React from 'react';
import AdminSidebar from '../components/Sidebars/AdminSidebar';
import { Switch, Redirect, Route } from 'react-router-dom';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import { routes } from '../routes';

export default props => {

    function getRoutes(routes) {
        return routes && routes.map((prop, key) => {
            if (prop.layout === "/admin")
                return (
                    <Route
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
                    imgSrc: require("../assets/img/brand/argon-react.png"),
                    imgAlt: "..."
                }}
            />
            <div className="main-content">
                <AdminNavbar
                    {...props}
                    brandText={getBrandText(props.location.pathname)}
                />
                <Switch>
                    {getRoutes(routes)}
                    <Redirect from="*" to="/admin/dashboard" />
                </Switch>
            </div>
        </>
    );
};