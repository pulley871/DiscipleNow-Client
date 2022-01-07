export const getSearchedDisciple = (searchTerm) =>{
    return fetch(`http://localhost:8000/disciples?searchterm=${searchTerm}`,
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
}
export const addToGroup = (object) => {
    return fetch(`http://localhost:8000/addtogroup`,
            {   
                method: "PUT",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("dn-token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
}