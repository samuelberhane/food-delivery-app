import { Footer, Navbar } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Layout />
      <Footer />
    </>
  );
};

export default Layout;
