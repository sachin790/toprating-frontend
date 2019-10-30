import Head from "next/head";
import NavBar from "./Navbar";

const Header = ({
  data,
  openSignup,
  openLogin,
  closeSignup,
  closeLogin,
  title
}) => (
  <React.Fragment>
    <Head>
      <title>{title ? title : "Get the best always "} | Top Ratings </title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="author" content="Narcisse Egonu" />
      <meta
        name="keywords"
        content="Review, Product review, best, quality product"
      />

      <link
        rel="shortcut icon"
        type="image/png"
        sizes="192x192"
        href="/static/icon/favicon.png"
      />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Cabin|Muli"
        rel="stylesheet"
      />
    </Head>

    <NavBar openLogin={openLogin} openSignup={openSignup} data={data} />
    <style jsx global>
      {`
        body,
        html {
          background: #f4f6f8 !important;
          font-family: "Cabin" !important;
          // font-family: Roboto !important;
          margin: 0;
          padding: 0;
          color: #000;
        }

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
        }
      `}
    </style>
  </React.Fragment>
);

export default Header;
