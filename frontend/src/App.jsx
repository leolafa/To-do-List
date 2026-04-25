import {useState, useEffect} from 'react'
import {api} from "./services/api"


export default function App(){
  const[tarefas, setTarefas] = useState([])
  const[titulo, setTitulo] = useState("")
  const[loading, setLoading] = useState(true)
  const[error, setError] = useState(null)

  useEffect(()=>{
    carregar()
  }, [])
  async function carregar(){
    try{
      const data= await api.listar()
      setTarefas(data)
    } catch{setError("Erro ao carregar tarefas")}
    finally{setLoading(false)}
  }
  
  async function adicionar(e){
    e.preventDefault()
    if(!titulo.trim()) return
    const nova = await api.criar(titulo)
    setTarefas(prev=> [nova, ...prev])
    setTitulo("")
  }

  async function concluir(tarefa){
    const atualizada = await api.concluir(tarefa.id, !tarefa.concluida)
    setTarefas(prev=> prev.map(t=> t.id === tarefa.id ? atualizada : t))
  }

  if(loading) return <p>Carregando...</p>
  if(error) return <p>{error}</p>

  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionar}>

        <input
          value={titulo}
          onChange={e=> setTitulo(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul style={{listStyle: "none", padding: 0, margin: "16px 0"}}>
        {tarefas.map(tarefa=>(
          <li key={tarefa.id} style={{
            display: "flex",
            alignItems: "center",
            width: 300,
            gap: "10px",
            padding: "10px 14px",
            marginBottom: "8px",
            marginLeft: "400px",
            borderRadius: "8px",
            background: "#f5f5f5",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
          }}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={()=> concluir(tarefa)}
            />
            <span style={{textDecoration: tarefa.concluida ? "line-through" : "none", color: tarefa.concluida ? "#999" : "#222"}}>
              {tarefa.titulo}
            </span>
          </li>
        ))}
      </ul>
      
    </div>
  )



}





