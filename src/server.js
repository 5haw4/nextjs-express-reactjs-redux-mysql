const next = require('next')
const path = require("path")

//setting up dotenv to be able to easily use env consts from .env file
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, `/../.env`) })
const { env } = require("process");
const dev = env.NODE_ENV !== env.ENV_PROD;

//to log Unhandled Rejection & Uncaught Exception
const { errorLogger } = require('./express/controllers/loggerController')

const app = require("./app"); //express app
var http = require("http")

//running a worker for each core of the CPU
const cluster = require("cluster");
const numCPUs = dev ? 1 : require('os').cpus().length;

const nextApp = next({ dev, dir: './src/nextjs' })
const handle = nextApp.getRequestHandler()

nextApp.prepare()
    .then(() => {
        if (cluster.isMaster) {
            //forking workers
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }
          
            cluster.on('exit', (worker, code, signal) => {
                if(dev) console.log(`worker ${worker.process.pid} died`);
            });
        } else {
            process.on("unhandledRejection", err => {
                if(dev) {
                    console.log("Unhandled Rejection: ", err)
                }
                //logging the crash and killing the process
                errorLogger(undefined, err, () => {
                    server.close(() => {
                        process.exit(1)
                    })
                })
            })
            
            //in cases there's no route match to any of the express routes - letting NextJS take it from here
            app.use(handle)
            //using http with the instance of the express app to listen to a port
            const server = http.createServer(app).listen(3000, () => {
                if(dev) console.log(`Worker ${process.pid} server started`);
            });
            

            //logging the crash and killing the process
            process.on("uncaughtException", err => {
                if(dev) console.log("Uncaught Exception: ", err);
                errorLogger(undefined, err, () => {
                    server.close(() => {
                        process.exit(1)
                    })
                })
            })
            if(dev) console.log(`Worker ${process.pid} started`);
        }
    })
    .catch((ex) => {
        dev && console.error(ex.stack)
        process.exit(1)
    })