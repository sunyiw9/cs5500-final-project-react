/**
 * Component renders each single line of the message
 */
const MessageLine = ({userName, message}) => {

    return (
        <div style={{marginBottom:"15px"}}>
            <div>{userName}</div>
            <div>{message}</div>
        </div>
    )
}

export default MessageLine;