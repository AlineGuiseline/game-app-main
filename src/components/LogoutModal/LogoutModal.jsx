import { useState } from "react";
import { Container } from "./styles";
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
                <h2>Tem certeza que deseja sair?</h2>
                <p>Você perderá o progresso no jogo.</p>

                <button onClick={handleCloseModal}>Cancelar</button>
                <LogoutButton />
            </Container>
        )}
        </>
    )
}

export default LogoutModal;