export const PostMessage = (message) => {
    return fetch(`http://localhost:8000/messages`,
            {   
                method: "POST",
                headers: {
                    "Authorization": `Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            }
        )
}