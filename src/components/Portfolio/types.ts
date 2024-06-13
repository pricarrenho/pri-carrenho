export type PortfolioProps = {
  portfolio: Portfolio[];
};

export type Portfolio = {
  code: string;
  description: {
    html: string;
  };
  image: {
    url: string;
    height: number;
  };
  name: string;
  project: string;
};
