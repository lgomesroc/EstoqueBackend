import bcryptjs = require('bcryptjs');

const testBcrypt = async () => {
  const password = 'minhaSenhaSecreta'; // A senha que você quer criptografar
  const saltRounds = 10; // Número de rounds para o salt

  try {
    // Criptografar a senha
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    console.log('Senha criptografada:', hashedPassword);

    // Comparar a senha original com a senha criptografada
    const isMatch = await bcryptjs.compare(password, hashedPassword);
    console.log('As senhas correspondem:', isMatch); // Deve retornar true
  } catch (error) {
    console.error('Erro ao criptografar a senha:', error);
  }
};

testBcrypt();
