



export const LoginCheck = (object) =>{
    
    return fetch(`http://localhost:8000/login`,
            {   
                method: "POST",
                headers: {
                    
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            }
        ).then((res)=> res.json()).then((res)=>{
            if('valid' in res && res.valid && "token" in res){
                localStorage.setItem("dn-token", res.token)
                
            }
        })
}