import React from "react"

/**
 * Customized button to handle the message
 *
 */
const UserMessageButton = ({user, handleOnUserSelected}) =>{

    const handleOnUserClicked = (e) => {
        e.stopPropagation()
        e.preventDefault()
        handleOnUserSelected(user)
    }

    return(
        <button className ="ttr-messages-button"onClick={handleOnUserClicked}>Chat</button>
    );
}

export default UserMessageButton;