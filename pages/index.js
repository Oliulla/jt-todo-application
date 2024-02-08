import Head from "next/head";
import { Inter } from "next/font/google";
import HomeMainComponent from "@/components/__shared_one_time/Home/Home";
import RootLayout from "@/components/Layouts/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function MainHomePage() {
  return (
    <>
      <Head>
        <title>Done It?</title>
        <meta name="description" content="Todo Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <HomeMainComponent />
      </div>
    </>
  );
}


MainHomePage.getLayout = function getLayout(page) {
  return <RootLayout>
    {page}
  </RootLayout>
}