import { useState } from "react";
import { Modal } from "../Modal";
import { Portfolio, PortfolioProps } from "./types";
import { disableBodyScroll } from "@/utils/blockScroll";
import Title from "../Title";
import * as S from "./styles";

const Portfolio = ({ portfolio }: PortfolioProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState<Portfolio>();

  const handleOpenModal = (project: Portfolio) => {
    setIsModalOpen((current) => !current);
    setProject(project);
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

      {isModalOpen && project && (
        <Modal setIsOpen={setIsModalOpen} project={project} />
      )}
    </S.Wrapper>
  );
};

export default Portfolio;
