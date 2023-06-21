import React from "react";
import BlogItemRightContainer from "../containers/blog/blog-item-right";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogRightSidebarPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Sass Technologies – Blog Right Sidebar" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="AMAZING WORKS"
                        excerpt="We shows only the best websites and portfolios built completely with passion, simplicity & creativity."
                        image="./images/blog/banner.png"
                    />
                    <BlogItemRightContainer data={BlogData} />
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogRightSidebarPage;
