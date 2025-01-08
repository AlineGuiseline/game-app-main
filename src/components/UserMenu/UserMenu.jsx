import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import LogoutModal from "../../components/LogoutModal/LogoutModal";
import { DropDownContainer, UserName, UserRa, LogoutBtn } from './styles';
import logoutIcon from "../../assets/GamePage/logout-icon.png";

const UserMenu = ({closeMenu, onLogoutModalOpen, isLogoutModalOpen}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [info, setInfo] = useState([]);

    const logout = () => {
        setModalVisible(true);
        onLogoutModalOpen(true);
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
        <>
            <DropDownContainer>
                <div className="gap-4">
                    {info.length > 0 ? (
                        <>
                        <UserName>{info[0]} {info[1]}</UserName>
                        <UserRa>RN: {info[2]}</UserRa>
                        </>
                    ) : (
                        <UserName>Loading...</UserName>
                        )
                    }
                    
                    <LogoutBtn onClick={logout}>
                        <img src={logoutIcon} alt="" />
                        Exit</LogoutBtn>
                </div>
            </DropDownContainer>
            {modalVisible && (
                    <LogoutModal
                    closeModal={() => setModalVisible(false)}
                    closeMenu={closeMenu}
                    onModalOpen={onLogoutModalOpen}
                    isLogoutModalOpen={isLogoutModalOpen}
                    />
                )}
        </>
    )
}

UserMenu.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    onLogoutModalOpen: PropTypes.func.isRequired,
    isLogoutModalOpen: PropTypes.func.isRequired,
};

export default UserMenu;