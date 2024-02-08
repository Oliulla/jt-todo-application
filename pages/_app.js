import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";


export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return <>
    <Toaster />
    {getLayout(<Component {...pageProps} />)}
  </>
}