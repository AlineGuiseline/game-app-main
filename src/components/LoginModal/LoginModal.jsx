import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Title, Paragraph, BtnArea, CancelButton, LoginButton} from "./styles";

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
                <Title>Are you sure the login information is correct?</Title>
                <Paragraph>This information will be used to issue your certificate. 
                    Changes will not be possible later.
                </Paragraph>

                <BtnArea>
                    <CancelButton onClick={handleClose}>Review</CancelButton>
                    <LoginButton onClick={handleConfirm}>I’m Sure</LoginButton>
                </BtnArea>
            </Container>
        )}
        </>
    )
}

LoginModal.propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
};

export default LoginModal;