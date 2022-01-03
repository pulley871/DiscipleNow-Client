import * as React from 'react';

export const MessageList = ({messages}) => {


    return(<>
        {messages.length > 0 ? "":<h3>You have no messages</h3>}
            
  
    </>)
}