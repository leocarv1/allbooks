class ErroBase extends Error {
    constructor(msg = "Internal Server Error", status = 500) {
        super();
        this.msg = msg;
        this.status = status
    }

    sendRes(res) {
        res.status(this.status).send({
            msg: this.msg,
            status: this.status
        });
    }
}

export default ErroBase;