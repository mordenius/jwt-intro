import express from "express";
import { createServer } from "http";
import bodyParser from "body-parser";
import TokenController from "./tokenController";


class Server {
	app = express();
	server = createServer(this.app);

	async start() {
		try {
			await this.server.listen(8080);
			const message = ` Server  is listening on port 8080`;
			global.console.log(new Date() + message);
			this.initHandlers();
		} catch (e) {
			global.console.error(e);
		}
	}

	initHandlers() {
		this.app.use(bodyParser.json());

		this.app.get("/api/getToken", (req, res) => {
			const token = TokenController.get();
			res.send(token);
		})

		this.app.get("/api/validateToken", (req, res) => {
			const { token } = req.query;
			const valid = TokenController.valid(token);
			res.send(Boolean(valid));
		})
	}

}

export default new Server();
