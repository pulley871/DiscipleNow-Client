export const getDisciplHome = () => {
    return fetch("http://localhost:8000/disciple-home",
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
}
