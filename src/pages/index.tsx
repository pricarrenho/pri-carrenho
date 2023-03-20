import Header from "@/components/Header";
import { api } from "@/service/api";
import { GET_HOME_PAGE } from "@/service/getHomePage";
import { GetStaticProps } from "next";

type HomeProps = {
  page: {
    title: {
      html: string;
    };
    subtitle: {
      html: string;
    };
    aboutMe: {
      html: string;
    };
    footer: {
      html: string;
    };
  };
};

export default function Home({ page }: HomeProps) {
  return (
    <>
      <Header title={page.title.html} subtitle={page.subtitle.html} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { page }: any = await api.request(GET_HOME_PAGE, {
    slug: "home",
  });

  return {
    revalidate: 60,
    props: { page },
  };
};
