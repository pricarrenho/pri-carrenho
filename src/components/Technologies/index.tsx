import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import * as S from "./styles";

const Technologies = ({ technologies }: any) => {
  return (
    <S.Wrapper>
      <Title styleType="primary">Tecnologias e Ferramentas</Title>

      <S.WrapperContent>
        {technologies &&
          technologies.map((item: any) => (
            <S.Content href={item.url} target="_blank" key={item.name}>
              <S.ImgTechs
                alt={item.name}
                src={item.photo.url}
                width={40}
                height={40}
              />
              <S.Subtitle>{item.name}</S.Subtitle>
            </S.Content>
          ))}
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default Technologies;
