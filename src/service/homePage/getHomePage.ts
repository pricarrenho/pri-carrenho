import { GetPagesQuery } from "@/gql/graphql";
import { api } from "../api";
import { GET_HOME_PAGE } from "./queries";

export const getHomePage = async () => {
  const { page } = await api.request<GetPagesQuery>(GET_HOME_PAGE, {
    slug: "home",
  });

  return page;
};
