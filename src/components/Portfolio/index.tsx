import { useState } from "react";
import { Modal } from "../Modal";
import { Portfolio, PortfolioProps } from "./types";
import Title from "../Title";
import * as S from "./styles";
import { disableBodyScroll } from "@/utils/blockScroll";

const Portfolio = ({ portfolio }: PortfolioProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState<Portfolio>();

  const handleOpenModal = (photo: Portfolio) => {
    setIsModalOpen((current) => !current);
    setPhoto(photo);

    disableBodyScroll();
  };

  return (
    <S.Wrapper>
      <Title styleType="primary">Meu Portfolio</Title>
      {portfolio &&
        portfolio.map((item) => (
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

            <S.ButtonModal onClick={() => handleOpenModal(item)}>
              <S.PortfolioImage
                src={item.image.url}
                alt={item.name}
                width={700}
                height={400}
              />
            </S.ButtonModal>
          </S.WrapperContent>
        ))}

      {isModalOpen && photo && (
        <Modal setIsOpen={setIsModalOpen} image={photo} />
      )}
    </S.Wrapper>
  );
};

export default Portfolio;
