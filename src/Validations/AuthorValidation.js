class AuthorValidation {
    static validation(payload) {
        let valid = true;

        if (!payload.firstName) {
            return {valid: false, message: "firstName is required" };

        } else if (!payload.lastName) {
            return {valid: false, message: "lastName is required" };

        } else if (!payload.birthday) {
            return {valid: false, message: "lastName is required" };

        }

        return { valid: true};
    }
}

export default AuthorValidation;