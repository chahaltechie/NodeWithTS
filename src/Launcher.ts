import { Server } from "./Server/Server";

class Launcher{
    server: Server

    constructor(){
        this.server = new Server();
    }

    startApplication(){
        this.server.createServer();
        console.log('application launched...');
    }
}

new Launcher().startApplication();