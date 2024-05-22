import { useState } from "react";
import { Container, Title, Paragraph, BtnArea, CancelButton } from "./styles";
import LogoutButton from "../LogoutButton/LogoutButton";

function LogoutModal({ closeModal, closeMenu }){
    const [modalVisible, setModalVisible] = useState(true);

    const handleCloseModal = () => {
        setModalVisible(false);
        closeModal();
        closeMenu();
    }

    return (
        <>
        {modalVisible && (
            <Container>
                <Title>Tem certeza que deseja sair?</Title>
                <Paragraph>Você perderá o progresso no jogo.</Paragraph>

                <BtnArea>
                    <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
                    <LogoutButton />
                </BtnArea>
            </Container>
        )}
        </>
    )
}

export default LogoutModal;