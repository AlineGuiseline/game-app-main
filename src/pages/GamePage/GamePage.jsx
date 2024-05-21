import { useEffect, useRef, useState } from "react";
import Carrossel from "../../components/Carrossel/Carrossel";

import { GeneralContainer, Header, LogoImg, UserArea, UserContainer } from "./styles";

import logoImg from "../../assets/GamePage/logo.png";
import arrowDown from "../../assets/GamePage/arrow-down.png";
import UserMenu from "../../components/UserMenu/UserMenu";

function GamePage() {
    const [info, setInfo] = useState([]);
    const [menuVisible, setMenuVisible] = useState(false);

    const menuRef = useRef(null);
    const containerRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target) &&
            !menuRef.current.contains(event.target)
        ) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        const storedInfo = localStorage.getItem("storedInfo");
        if (storedInfo) {
            try {
                setInfo(JSON.parse(storedInfo));
            } catch (error) {
                console.error("Invalid JSON in storedInfo:", error);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <GeneralContainer>
            <Header>
                <LogoImg src={logoImg} alt="logo do Game proficiência" />

                <UserContainer onClick={toggleMenu} ref={containerRef}>
                    <UserArea>
                        {info.length > 0 ? (
                            <p>
                                {info[0]}
                            </p>
                        ) : (
                            <p>Carregando...</p>
                        )}
                        <img src={arrowDown} alt="imagem de uma seta para baixo" />
                    </UserArea>
                </UserContainer>
            </Header>

            {menuVisible && (
                <div ref={menuRef}>
                    <UserMenu closeMenu={() => setMenuVisible(false)} />
                </div>
            )}

            <Carrossel />
        </GeneralContainer>
    );
}

export default GamePage;
