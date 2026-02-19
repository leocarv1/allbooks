class BookValidation {
    static validation(payload) {
        let valid = true;

        if (!payload.title) {
            return {valid: false, message: "title is required" };

        } else if (!payload.authorID) {
            return {valid: false, message: "authorID is required" };

        }

        return { valid: true};
    }
}

export default BookValidation;