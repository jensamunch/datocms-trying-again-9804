import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/hero";


export default function Home() {

  return (
      <Layout>
        <Head></Head>
        <Container>
          <Hero />
        </Container>
      </Layout>
  );
}
