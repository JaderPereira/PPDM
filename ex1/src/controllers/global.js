exports.index = (req, res) => {
    res.render("index")
}

exports.resultado = (req, res) => {
    console.log(req.query)
    const capital = Number(req.query.capital)
    const taxa = Number(req.query.taxa)
    const tempo = Number(req.query.tempo)

    const juros = (capital * taxa * tempo) / 100
    const montante = juros + capital

    res.render("resultado", {capital, taxa, tempo, juros, montante})
}