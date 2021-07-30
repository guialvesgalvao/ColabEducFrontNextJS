export default function projetos () {
    async function Login () {
        fetch('http://www.colabeduc.org/public/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
          }).then(r => r.json())
            .then(json => {
                for(let i= 0;i<json.length;i++){
                    console.log(json[i])
                }
                 
            })
            .catch(ex => console.error('Problemas ao logar', ex));
    }

    return (
        <div>
            <button onClick={Login}>clique me</button>
        </div>
    )
}