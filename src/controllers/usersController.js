const db = require("../services/animesGhibliDB");
const bcrypt = require("bcrypt");

class UserController {
  async Create(req, res) {
    const { name, username, password } = req.body;
    const senhaHash = await UserController.HashearSenha(password);
    const infos = { name: name, user: username, pwd: senhaHash };
    try {
      await new db().criarUser(infos);
      res.status(201).json("Usuario Criado");
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async HashearSenha(senha) {
    try {
      const senhaHash = await bcrypt.hash(senha, 12);
      return senhaHash;
    } catch (error) {
      console.log(error);
    }
  }

  async VerifyPwdHash(senha, senhaHash) {
    await bcrypt.compare(senha, senhaHash);
  }

  async SearchUser(user) {
    return await new db().verifyUsername(user);
  }

  teste() {
    return "sucesso";
  }
}

module.exports = UserController;
