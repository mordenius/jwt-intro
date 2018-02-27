import jwt from "jsonwebtoken";

export default class TokenController {
	static KEY = 'secret';

	static get() {
		const token = jwt.sign({ id: "qwerty" }, this.KEY);
		return token;
	}

	static valid(token) {
		try {
			return jwt.verify(token, this.KEY);
		} catch(e) {
			return false;
		}
	}
}