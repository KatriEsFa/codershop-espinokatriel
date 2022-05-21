let condicion = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condicion) {
                resolve(task)
            } else {
                reject("Error del fetch")
            }
        }, time);
    }
    );
}

export default customFetch;
