const ENDPOINT = 'http://localhost:5000'

export default function login({usuarioU,password}){
    return fetch(`${ENDPOINT}/api/usuarios/login`,{

        method:'POST',
        headers: {
            "Content-Type": " application/JSON"

        },
        body: JSON.stringify({usuarioU,password})
    }).then(res=>{
        if(!res.ok)throw new Error('Respuesta invalida')
        return res.json()
    }).then(res=>{
        const{jwt} = res
        const{usuario} = res
        return {jwt,usuario}
    })
}