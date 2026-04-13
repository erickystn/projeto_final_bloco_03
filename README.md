# 💊 Sistema de Gerenciamento de Farmácia (Front-end)

## 📖 Detalhes do Projeto
Este é o front-end de um Sistema de Gerenciamento para Farmácias, desenvolvido para facilitar o controle de estoque, categorização de produtos e interações diárias. A aplicação oferece uma interface intuitiva e responsiva para que administradores possam gerenciar categorias de medicamentos e cosméticos, contando com feedback visual em tempo real e consumo de API RESTful.

## 🚀 Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **TypeScript**: Adiciona tipagem estática ao código, garantindo mais segurança e menos bugs.
- **Vite**: Ferramenta de build super rápida e otimizada para o desenvolvimento moderno.
- **Tailwind CSS**: Framework de CSS utilitário para estilização ágil e design responsivo.
- **React Router Dom**: Gerenciamento completo e dinâmico das rotas da aplicação.
- **Axios**: Cliente HTTP baseado em Promises para consumo eficiente da API.
- **React Toastify & Spinners**: Bibliotecas para feedback visual interativo (alertas de sucesso/erro e animações de carregamento).

## ⚙️ Guia de Configuração (Setup)

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/erickystn/projeto_final_bloco_03.git
   cd projeto_final_bloco_03
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente**:
   Crie um arquivo chamado `.env` na raiz do projeto (mesmo nível do `package.json`) e adicione a URL da sua API:
   ```env
   VITE_API_URL=http://localhost:8080  # Substitua pela URL real do seu Back-end se estiver na nuvem
   ```

4. **Execute o projeto**:
   ```bash
   npm run dev
   ```
   Abra seu navegador e acesse, por padrão, `http://localhost:5173`.

## 📂 Estrutura do Projeto
```text
PROJETO_FINAL_BLOCO_03/
│
├── src/
│   ├── assets/              # Imagens e ícones estáticos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── categoria/       # CRUD completo de Categorias (Listar, Cadastrar, Deletar, Cards)
│   │   ├── footer/
│   │   └── navbar/
│   ├── models/              # Interfaces TypeScript (Categoria, Produto)
│   ├── pages/
│   │   └── home/            # Página inicial de boas-vindas
│   ├── services/            # Configuração do Axios e funções de requisição (buscar, cadastrar, etc.)
│   ├── utils/               # Funções utilitárias (ex: ToastAlerta)
│   ├── App.css
│   ├── App.tsx              # Configuração de Rotas principais
│   ├── index.css
│   └── main.tsx
├── .env                     # Variáveis de ambiente (Criar manualmente)
├── package.json
└── README.md
```

## 🔌 Funcionalidades e Rotas (App.tsx)
- `/home`: Página inicial com layout acolhedor e ilustrações customizadas.
- `/categorias`: Renderiza o componente `ListaCategorias` com todos os itens cadastrados no banco.
- `/cadastrarcategoria`: Acesso ao `FormCategoria` para criação de novos registros.
- `/editarcategoria/:id`: Reaproveitamento do `FormCategoria` para atualização de dados específicos.
- `/deletarcategoria/:id`: Interface de confirmação (`DeletarCategoria`) antes de excluir um registro.

## 📸 Screenshots
 

---

## 🤝 Diretrizes de Contribuição
1. **Faça um Fork do repositório**
2. **Clone o seu fork**: `git clone https://github.com/seu-usuario/projeto_final_bloco_03.git`
3. **Crie uma branch**: `git checkout -b feature/sua-nova-feature`
4. **Faça suas alterações e o commit**: `git commit -m 'Feat: Adiciona nova funcionalidade X'`
5. **Faça o push para o seu fork**: `git push origin feature/sua-nova-feature`
6. **Abra um Pull Request** no repositório original.
