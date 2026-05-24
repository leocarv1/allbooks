class BookValidation {
    static validation(payload) {
        let valid = true;

        if (!payload.title) {
            return {valid: false, message: "title is required" };

        } else if (!payload.authorId) {
            return {valid: false, message: "authorId is required" };

        }

        return { valid: true};
    }
}

export default BookValidation;