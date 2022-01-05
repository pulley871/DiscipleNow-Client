export const getSelectedDisciple = (id) =>{
    return fetch(`http://localhost:8000/selected-disciple/${id}`,
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
}

export const getLeadDiscipleDate = () => {
    return fetch("http://localhost:8000/lead-dashboard",
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
}
export const ProviderRender = () =>{
    return fetch("http://localhost:8000/lead-dashboard",
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
            

        }

export const PromoteToLead = (id) =>{
    return fetch(`http://localhost:8000/promote-disciple/${id}`,
            {   
                method: "PATCH",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("dn-token")}`,
                    "Content-Type": "application/json"
                }
            }
        ).then((res)=>res.json())
}