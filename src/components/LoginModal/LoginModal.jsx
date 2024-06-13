import { useState } from "react";
import { Container, Title, Paragraph, BtnArea, CancelButton, LoginButton } from "./styles";

function LoginModal({ handleCloseModal, handleLogin }){
    const [modalVisible, setModalVisible] = useState(true);

    const handleClose = () => {
        setModalVisible(false);
        handleCloseModal();
    }

    const handleConfirm = () => {
        handleLogin();
        setModalVisible(false);
    }  

    return (
        <>
        {modalVisible && (
            <Container>
                <Title>Tem certeza que as informações de login estão corretas?</Title>
                <Paragraph>Essas informações serão utilizadas na emissão do seu 
                    certificado. Não será possível alterar.
                </Paragraph>

                <BtnArea>
                    <CancelButton onClick={handleClose}>Revisar</CancelButton>
                    <LoginButton onClick={handleConfirm}>Tenho certeza</LoginButton>
                </BtnArea>
            </Container>
        )}
        </>
    )
}

export default LoginModal;