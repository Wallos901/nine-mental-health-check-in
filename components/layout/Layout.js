import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styled from "styled-components";

const Layout = ({ title, description, children }) => {
    return (
        <LayoutContainer>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </LayoutContainer>
    );
};

export default Layout;

const LayoutContainer = styled.div`
    background: #070720;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
