import { useState, useEffect } from 'react';
import LogoutModal from "../../components/LogoutModal/LogoutModal";
import { DropDownContainer, UserName, UserRa, LogoutBtn } from './styles';
import logoutIcon from "../../assets/GamePage/logout-icon.png";

const UserMenu = ({closeMenu}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [info, setInfo] = useState([]);

    const logout = () => {
        setModalVisible(true);
    }

    useEffect(() => {
        const storedInfo = localStorage.getItem("storedInfo");
        if (storedInfo){
            try {
                setInfo(JSON.parse(storedInfo))
            } catch (error) {
                console.error("Invalid JSON in storedInfo:", error);
            }
        }
    }, []);

    return (
        <DropDownContainer>
            <div className="gap-4">
                {info.length > 0 ? (
                    <>
                    <UserName>{info[0]} {info[1]}</UserName>
                    <UserRa>RA: {info[2]}</UserRa>
                    </>
                ) : (
                    <UserName>Carregando...</UserName>
                    )
                }
                
                <LogoutBtn onClick={logout}>
                    <img src={logoutIcon} alt="" />
                    Sair</LogoutBtn>
            </div>

            {modalVisible && (
                <LogoutModal closeModal={() => setModalVisible(false)} closeMenu={closeMenu} />
            )}
        </DropDownContainer>
    )
}

export default UserMenu;