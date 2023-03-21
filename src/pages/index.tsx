import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import { GetPagesQuery } from "@/gql/graphql";
import { getHomePage } from "@/service/homePage/getHomePage";
import { GetStaticProps } from "next";

type HomeProps = GetPagesQuery;
export default function Home({ page }: HomeProps) {
  if (!page) return;

  return (
    <>
      <Container>
        <Header title={page.title.html} subtitle={page.subtitle.html} />
        <AboutMe
          description={page?.aboutMe?.html || ""}
          image={page.image.url || ""}
        />
        <Technologies technologies={page.teches} />
        <Portfolio portfolio={page.portfolios} />
      </Container>
      <Footer footer={page.footer?.html} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getHomePage();

  return {
    revalidate: 60,
    props: { page },
  };
};
