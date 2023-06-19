import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavScrollTop from "./components/nav-scroll-top";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import ServiceDetails from "./templates/service-details";
import TeamPage from "./pages/team";
import FaqPage from "./pages/faq";
import BlogPage from "./pages/blog";
import BlogLeftSidebarPage from "./pages/blog-left-sidebar";
import BlogRightSidebarPage from "./pages/blog-right-sidebar";
import BlogDetailsPage from "./templates/blog-details";
import BlogAuthor from "./templates/blog-author";
import BlogDate from "./templates/blog-date";
import BlogTag from "./templates/blog-tag";
import BlogCategory from "./templates/blog-category";
import ContactPage from "./pages/contact";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/css/vendor/metropolis.css";
import "./assets/css/vendor/icofont.min.css";
import "./assets/css/vendor/font-awesome.css";
import "./assets/css/vendor/material-design-iconic.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/scss/style.scss";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5d2346a222d70e36c2a4b1b9/1fuov8514';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `;
    
        document.head.appendChild(script);
    
        return () => {
          // Cleanup: remove the script from the document
          document.head.removeChild(script);
        };
      }, []);
    return (
        <Router>
            <NavScrollTop>
                <Switch>
                    <Route
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/about"}`}
                        component={AboutPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/service"}`}
                        component={ServicePage}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/service-details/:id"
                        }`}
                        component={ServiceDetails}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/team"}`}
                        component={TeamPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/faq"}`}
                        component={FaqPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/contact"}`}
                        component={ContactPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog"}`}
                        component={BlogPage}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/blog-left-sidebar"
                        }`}
                        component={BlogLeftSidebarPage}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/blog-right-sidebar"
                        }`}
                        component={BlogRightSidebarPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
                        component={BlogDetailsPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/author/:author"}`}
                        component={BlogAuthor}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/date/:date"}`}
                        component={BlogDate}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/tag/:slug"}`}
                        component={BlogTag}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
                        component={BlogCategory}
                    />
                </Switch>
            </NavScrollTop>
        </Router>
    );
};

export default App;
