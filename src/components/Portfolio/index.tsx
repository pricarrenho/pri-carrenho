import Title from "../Title";
import * as S from "./styles";

const Portfolio = ({ portfolio }: any) => {
  return (
    <S.Wrapper>
      <Title styleType="primary">Meu Portfolio</Title>

      {portfolio &&
        portfolio.map((item: any) => (
          <S.WrapperContent key={item.name}>
            <S.Content>
              <S.Subtitle>{item.name}</S.Subtitle>
              <S.Description
                dangerouslySetInnerHTML={{ __html: item.description.html }}
              />

              <S.ContentButtons>
                <S.Button href={item.project} target="_blank">
                  Ver projeto
                </S.Button>

                <S.Button href={item.code} target="_blank">
                  Ver código
                </S.Button>
              </S.ContentButtons>
            </S.Content>

            <S.PortfolioImage
              src={item.image.url}
              alt={item.name}
              width={700}
              height={400}
            />
          </S.WrapperContent>
        ))}
    </S.Wrapper>
  );
};

export default Portfolio;
