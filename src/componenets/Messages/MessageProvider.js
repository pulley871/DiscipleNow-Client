export const PostMessage = (message) => {
    return fetch(`http://localhost:8000/messages`,
            {   
                method: "POST",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("dn-token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            }
        )
}
export const UpdateReadStatus = (id) => {
    return fetch(`http://localhost:8000/messages/${id}`,
            {   
                method: "PATCH",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("dn-token")}`,
                    "Content-Type": "application/json"
                }
                
            }
        )
}