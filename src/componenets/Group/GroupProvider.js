export const getSearchedDisciple = (searchTerm) =>{
    return fetch(`http://localhost:8000/disciples?searchterm=${searchTerm}`,
            {headers: {
                "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed "
            }}
        )
            .then(res => res.json())
}