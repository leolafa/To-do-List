# ✅ To-do List

Aplicação fullstack de lista de tarefas com **Django REST Framework** no back-end e **React + Vite** no front-end.

---

## 📋 Funcionalidades

- Listar todas as tarefas
- Adicionar nova tarefa
- Marcar/desmarcar tarefa como concluída
- Excluir tarefa

---

## 🛠️ Tecnologias

### Back-end
| Tecnologia | Versão |
|---|---|
| Python | 3.x |
| Django | 6.0.4 |
| Django REST Framework | latest |
| django-cors-headers | latest |
| SQLite | (banco padrão) |

### Front-end
| Tecnologia | Versão |
|---|---|
| React | ^19 |
| Vite | ^8 |
| JavaScript (ESM) | — |

---

## 📁 Estrutura do Projeto

```
To-do-List/
├── backend/            # Configurações do Django
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── tarefas/            # App Django – lógica da API
│   ├── models.py       # Model Tarefa
│   ├── serializers.py  # TarefaSerializer
│   ├── views.py        # TarefaViewSet (CRUD)
│   └── urls.py         # Rotas da API (/api/tarefas/)
├── frontend/           # Aplicação React
│   ├── src/
│   │   ├── App.jsx
│   │   └── services/
│   │       └── api.js  # Funções de chamada à API
│   └── package.json
├── manage.py
└── db.sqlite3
```

---

## 🚀 Como executar

### Pré-requisitos

- Python 3.10+
- Node.js 18+
- pip

---

### Back-end (Django)

```bash
# 1. Crie e ative um ambiente virtual
python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scripts\activate         # Windows

# 2. Instale as dependências
pip install django djangorestframework django-cors-headers

# 3. Execute as migrações
python manage.py migrate

# 4. Inicie o servidor
python manage.py runserver
```

A API estará disponível em: `http://localhost:8000/api/`

---

### Front-end (React + Vite)

```bash
# 1. Entre na pasta do front-end
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

---

## 🔌 Endpoints da API

Base URL: `http://localhost:8000/api`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/tarefas/` | Lista todas as tarefas |
| `POST` | `/tarefas/` | Cria uma nova tarefa |
| `PATCH` | `/tarefas/{id}/` | Atualiza uma tarefa (ex: concluir) |
| `DELETE` | `/tarefas/{id}/` | Exclui uma tarefa |

### Exemplo de payload para criar uma tarefa

```json
{
  "titulo": "Estudar Django REST Framework"
}
```

### Exemplo de resposta

```json
{
  "id": 1,
  "titulo": "Estudar Django REST Framework",
  "concluida": false,
  "criada_em": "2026-04-25T20:00:00Z"
}
```

---

## ⚙️ Variáveis de configuração

As configurações do projeto estão em `backend/settings.py`. As origens permitidas para o CORS são:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite
    "http://localhost:3000",  # CRA
]
```

> ⚠️ **Atenção:** `DEBUG = True` e a `SECRET_KEY` exposta são adequados apenas para desenvolvimento. Nunca use essas configurações em produção.

---

## 📸 Preview

```
┌─────────────────────────────────┐
│        Lista de Tarefas         │
│                                 │
│  [Nova tarefa...] [Adicionar]   │
│                                 │
│  ☑ Estudar React                │
│  ☐ Criar API com Django         │
│  ☐ Fazer deploy                 │
└─────────────────────────────────┘
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo.
