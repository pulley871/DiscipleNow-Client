export const getSearchedDisciple = (searchTerm) =>{
    return fetch(`http://localhost:8000/disciples?searchterm=${searchTerm}`,
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
}