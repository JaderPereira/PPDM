const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname , '../' , '../' , 'usuarios.json')

module.exports.home = (req, res, next) => {
    res.render("index")
}

module.exports.registra = (req, res, next) => {
    const conta = {
        email: req.body.email,
        nome: req.body.nome,
        senha: req.body.senha,
        apelido: req.body.apelido,
        idade: req.body.idade,
    }
    
    function salvarUsuario(conta) {
        let usuarios = {};
    
        // Verifica se o arquivo já existe e carrega os dados
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            usuarios = JSON.parse(data);
        }
        
        // Salva o novo usuário usando o nome como chave
        usuarios[conta.email] = conta;
        
        // Escreve o JSON atualizado no arquivo
        fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
        console.log(`Usuário ${conta.email} salvo com sucesso.`);
    }

    salvarUsuario(conta)
    res.render("registro")
    
}