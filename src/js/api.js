// Função para fazer uma requisição GET à API de usuários
async function getUsers() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await response.json();
      console.log('Usuários:', data);
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
    }
  }
  
  // Função para fazer uma requisição POST à API de usuários
  async function createUser(user) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
      console.log('Usuário criado:', data);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  }
  
  // Exemplo de uso - GET
  getUsers();
  
  // Exemplo de uso - POST
  const newUser = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
  };
  
  createUser(newUser);
  