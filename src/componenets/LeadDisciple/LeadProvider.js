export const getSelectedDisciple = (id) =>{
    return fetch(`http://localhost:8000/selected-disciple/${id}`,
            {headers: {
                "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed "
            }}
        )
            .then(res => res.json())
}

export const getLeadDiscipleDate = () => {
    return fetch("http://localhost:8000/lead-dashboard",
            {headers: {
                "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed "
            }}
        )
            .then(res => res.json())
}
export const ProviderRender = () =>{
    return fetch("http://localhost:8000/lead-dashboard",
            {headers: {
                "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed "
            }}
        )
            .then(res => res.json())
            

        }