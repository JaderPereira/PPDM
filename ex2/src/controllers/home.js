exports.home = (req, res) => {
    res.render("index")
}

exports.saudacao = (req, res) => {
    const nome = req.query.nome
    const numero = req.query.numero
    const saudacao = `Olá, ${nome}! O dobro de ${numero} é ${numero * 2}.`

    res.render("saudacao", {saudacao})
}