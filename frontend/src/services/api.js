///centralizando todas as chamadas http


const BASE = "http://localhost:8000/api";


///objeto com funcoes de acesso a api
export const api={
    listar: ()=>
        fetch(`${BASE}/tarefas/`).then(res=>res.json()),

    criar: (titulo)=>
        fetch(`${BASE}/tarefas/`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({titulo})
        }).then(res=>res.json()),

        concluir: (id, concluida)=>
        fetch(`${BASE}/tarefas/${id}/`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({concluida})
        }).then(res=>res.json()),
        excluir: (id)=>
        fetch(`${BASE}/tarefas/${id}/`,{
            method: "DELETE",
        }).then(res=>res.ok),
}