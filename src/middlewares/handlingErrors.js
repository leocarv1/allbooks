function handlingErrors (erro, req, res, next) {
    console.error(erro);
    return res.status(500).json({
        message: "Internal server error",
    });
}

export default handlingErrors;