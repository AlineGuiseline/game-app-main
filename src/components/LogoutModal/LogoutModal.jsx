import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Title, Paragraph, BtnArea, CancelButton } from "./styles";
import LogoutButton from "../LogoutButton/LogoutButton";

function LogoutModal({ closeModal, closeMenu, onModalOpen }){
    const [modalVisible, setModalVisible] = useState(true);

    const handleCloseModal = () => {
        setModalVisible(false);
        onModalOpen(false);
        closeModal();
        closeMenu();
    }
    
    useEffect(() => {
        onModalOpen(true);
    
        return () => {
            onModalOpen(false);
        };
    }, [onModalOpen]);    

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

LogoutModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired,
    onModalOpen: PropTypes.func.isRequired,
};

export default LogoutModal;