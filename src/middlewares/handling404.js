function handling404(req, res, next) {
    return res.status(404).send({msg: "Not found"});
};

export default handling404;