# react-animal-farm

Simple web app using React + Vite + TypeScript + Node + Express to call a local backend server and render data on the frontend

### Installation Command

Frontend:

```bash
git clone https://github.com/ASproson/react-animal-farm.git && cd react-animal-farm && npm i && npm run dev 
```

Backend:
```bash
cd react-animal-farm && cd server && npm i && node .
```

### Servers

> Frontend: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

> Backend: [http://localhost:8080/](http://localhost:8080/)

Enter a search term and call the backend server to retrieve data

Previous query is stored locally in the browser to persist even through refreshing using `localStorage`
