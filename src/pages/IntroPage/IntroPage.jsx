import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { GeneralContainer, LeftSide, LoginImage, RightSide, FormContainer, FormGroup, 
    Label, Input, FormGroupInline, LoginArea, TextArea, GameTitle,
    FormButton
 } from "./styles";

import login_image from "../../assets/IntroPage/login_image.png";
import game_logo from "../../assets/IntroPage/Logo.svg";

function IntroPage() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [registro, setRegistro] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleFimDoJogo = (e) => {
        e.preventDefault();

        if (!nome || !sobrenome || !registro){
            setErrorMessage('Todos os campos são obrigatórios')
            return
        } else {
            let infos = [nome, sobrenome, registro];
            localStorage.setItem("storedInfo", JSON.stringify(infos));
    
            setTimeout(() => {
                navigate("/jogo")
            }, 100);
        }
    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length <= 8){
            setRegistro(value);
        }
    }

    return (
        <GeneralContainer>
            <LeftSide>
                <LoginImage src={login_image} alt="ilustração de um cérebro" />
            </LeftSide>

            <RightSide>
                <LoginArea>
                    {/* <TitleArea>
                        <GameTitle>GAME</GameTitle> 
                        <ProSubtitle>proficiência</ProSubtitle>
                    </TitleArea> */}
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

                    <FormContainer onSubmit={handleFimDoJogo}>
                        <FormGroup>
                            <Label htmlFor="registro">R.A.</Label>
                            <Input 
                            className="register"
                            type="number" 
                            id="registro"
                            value={registro}
                            required
                            onChange={handleInputChange} />
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
                        
                        <FormButton type="submit" onClick={handleFimDoJogo}>Entrar</FormButton>
                        {errorMessage && <p style={{ color: 'red'}}>{errorMessage}</p>}
                    </FormContainer>
                </LoginArea>
            </RightSide>
        </GeneralContainer>
    )
}

export default IntroPage;