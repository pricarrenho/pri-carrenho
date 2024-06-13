import { Portfolio } from "../Portfolio/types";
import { IoCloseSharp } from "react-icons/io5";
import { enableBodyScroll } from "@/utils/blockScroll";
import * as S from "./styles";

type ModalProps = {
  setIsOpen: (value: boolean) => void;
  image: Portfolio;
};

export const Modal = ({ setIsOpen, image }: ModalProps) => {
  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) setIsOpen(false);

    enableBodyScroll();
  };

  const handleClickCloseBtn = () => {
    setIsOpen(false);

    enableBodyScroll();
  };

  return (
    <S.DropShadow onClick={handleOutsideClick}>
      <S.Modal>
        <S.ModalCloseWrapper>
          <S.CloseBtn onClick={handleClickCloseBtn}>
            <IoCloseSharp />
          </S.CloseBtn>
        </S.ModalCloseWrapper>

        <S.ModalBody>
          <S.PortfolioPhoto
            src={image.image.url}
            alt={image.name}
            width={1200}
            height={image.image.height || 400}
          />
        </S.ModalBody>
      </S.Modal>
    </S.DropShadow>
  );
};
