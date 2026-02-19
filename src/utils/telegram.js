import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const TOKEN = process.env.TOKEN;
const CHAT_TOKEN = process.env.CHAT_TOKEN;
const URL_TELEGRAM = process.env.URL_TELEGRAM;

const baseUrl = `${URL_TELEGRAM}${TOKEN}/sendMessage?${CHAT_TOKEN}&text=testing`

class Telegram {
    
    static sendMsg() {

    }
}


// Usando Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dados obtidos');
        }, 1000);
    }).then(() => {
        // processamento do resultado da promessa
        console.log("Ok")
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log("Finished")
    });
}

fetchData()
.then(data => console.log(data))
.catch(error => console.error(error));

// Usando Async/Await
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();