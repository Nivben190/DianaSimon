import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="dq0-3di7ZNhWPrnALI5J17_AeQsT8_i8KrX1Ux2WdJI" />
      <title>Diana Shimon Gallery Website</title>
      <meta name="descreption" content="diana shimon gallery website, desplay her work and some info about her" />

       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous">
   </link>
      </head>
      <body>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
