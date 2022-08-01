

const TheirMessage = ( { lastMessage, message }) => {
    const isfirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isfirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{background: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.lengh > 0
                    ? (
                        <img 
                            src={message.attchments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{ marginLeft: isfirstMessageByUser ? '4px' : '48px'}}
                        
                        />
                    ) : (
                        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC' , marginLeft: isfirstMessageByUser ? '4px' : '48px' }}>
                            {message.text}
                        </div>
                    )
                    
                
            }
        </div>
    );
}

export default TheirMessage;