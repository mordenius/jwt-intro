import Server from "./httpServer";

class Main {
	static async init() {
		await Server.start();
	}
}

Main.init();