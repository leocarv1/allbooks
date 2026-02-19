function handlingErrors (erro, req, res, next) {
    console.error(erro);
    return res.status(500).json({
        name: erro.name,
        message: erro.message,
        parent: erro.parent?.message,
    });
}

export default handlingErrors;