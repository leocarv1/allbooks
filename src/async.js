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