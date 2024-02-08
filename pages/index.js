import Head from "next/head";
import { Inter } from "next/font/google";
import { Button } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Done It?</title>
        <meta name="description" content="Todo Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button>{' '}
          <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button>{' '}
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </>
      </main>
    </>
  );
}
