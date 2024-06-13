import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { GeneralContainer, LeftSide, LoginImage, RightSide, FormContainer, FormGroup, 
    Label, Input, FormGroupInline, LoginArea, TextArea, GameTitle,
    FormButton, ErrorAlert
 } from "./styles";

import login_image from "../../assets/IntroPage/login_image.png";
import game_logo from "../../assets/IntroPage/Logo.svg";

import LoginModal from "../../components/LoginModal/LoginModal";

function IntroPage() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [registro, setRegistro] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const [modalVisible, setModalVisible] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        // e.preventDefault();

        // if (!nome || !sobrenome || !registro){
        //     setErrorMessage('Todos os campos são obrigatórios')
        //     return
        // } else if (!/^[0-9\-]+$/.test(registro)) {
        //     setErrorMessage('O registro deve conter apenas números e hífens');
        //     return;
        // } else {
        //     let infos = [nome, sobrenome, registro];
        //     localStorage.setItem("storedInfo", JSON.stringify(infos));
    
        //     setTimeout(() => {
        //         navigate("/jogo")
        //     }, 100);
        // }
        let infos = [nome, sobrenome, registro];
        localStorage.setItem("storedInfo", JSON.stringify(infos));

        setTimeout(() => {
            navigate("/jogo")
        }, 100);
    }

    const loginConfirm = (e) => {        
        e.preventDefault();

        if (!nome || !sobrenome || !registro){
            setErrorMessage('Todos os campos são obrigatórios')
            return
        } else if (!/^[0-9\-]+$/.test(registro)) {
            setErrorMessage('O registro deve conter apenas números e hífens');
            return;
        } else {
            setModalVisible((prevState) => !prevState);
        }
    }

    return (
        <>
            <GeneralContainer isBlurred={modalVisible}>
                <LeftSide>
                    <LoginImage src={login_image} alt="ilustração de um cérebro" />
                </LeftSide>

                <RightSide>
                    <LoginArea>
                        <GameTitle src={game_logo} alt="" />

                        <TextArea>
                            <p>
                            Seja bem-vindo ao Game de Proficiência! 
                            </p>
                            <p>
                            Teste seus conhecimentos em interpretação e raciocínio 
                            lógico por meio de um quiz com 10 questões. Vamos lá? 
                            </p>
                        </TextArea>

                        <FormContainer onSubmit={loginConfirm}>
                            <FormGroup>
                                <Label htmlFor="registro">R.A.</Label>
                                <Input 
                                className="register"
                                type="text" 
                                id="registro"
                                value={registro}
                                required
                                onChange={(e) => setRegistro(e.target.value)} />
                            </FormGroup>

                            <FormGroupInline>
                                <FormGroup>
                                    <Label htmlFor="nome">Nome</Label>
                                    <Input 
                                    type="text"
                                    id="nome"
                                    value={nome}
                                    required
                                    onChange={(e) => setNome(e.target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="nome">Sobrenome</Label>
                                    <Input 
                                    type="text"
                                    id="sobrenome"
                                    value={sobrenome}
                                    required
                                    onChange={(e) => setSobrenome(e.target.value)} />
                                </FormGroup>
                            </FormGroupInline>
                            
                            <FormButton type="submit" onClick={loginConfirm}>Entrar</FormButton>
                            {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}
                        </FormContainer>
                    </LoginArea>
                </RightSide>

            </GeneralContainer>
            {modalVisible && (
                <LoginModal
                    handleCloseModal={() => setModalVisible(false)}
                    handleLogin={handleLogin}
                />
            )}
        </>
    )
}

export default IntroPage;