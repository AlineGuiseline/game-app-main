import { useEffect, useRef, useState } from "react";
import Carrossel from "../../components/Carrossel/Carrossel";

import { GeneralContainer, Header, LogoImg, UserArea, UserContainer, InvertedImage, AnimatedUserMenu  } from "./styles";

import logoImg from "../../assets/GamePage/logo.png";
import arrowDown from "../../assets/GamePage/arrow-down.png";
import UserMenu from "../../components/UserMenu/UserMenu";

function GamePage() {
    const [info, setInfo] = useState([]);
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

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

    const handleLogoutModalOpen = (isOpen) => {
        setIsLogoutModalOpen(isOpen);
    };
    

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
                            <p onClick={toggleMenu}>Carregando...</p>
                        )}
                        <InvertedImage 
                        src={arrowDown} 
                        isInverted={menuVisible}
                        alt="imagem de uma seta para baixo" />
                    </UserArea>
                </UserContainer>
            </Header>

            {menuVisible && (
                <AnimatedUserMenu ref={menuRef}>
                    <UserMenu 
                        closeMenu={() => setMenuVisible(false)} 
                        onLogoutModalOpen={handleLogoutModalOpen}
                    />
                </AnimatedUserMenu>
            )}

            <Carrossel isLogoutModalOpen={isLogoutModalOpen} />
        </GeneralContainer>
    );
}

export default GamePage;
