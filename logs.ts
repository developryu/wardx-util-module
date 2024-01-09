function l(...message: any[]) {
    let print: string|undefined;
    message.forEach(element => print ? print += ` ${element}` : print = `${element}`);
    if (process.env.LOG_DATE === 'true') {
        console.log(`[${new Date()}/LOG] ${print}`);
    } else {
        console.log(`[LOG] ${print}`);
    }
}

function d(...message: any[]) {
    let print: string|undefined;
    message.forEach(element => print ? print += ` ${element}` : print = `${element}`);
    if (process.env.LOG_DATE === 'true') {
        console.debug(`[${new Date()}/DEBUG] ${print}`);
    } else {
        console.debug(`[DEBUG] ${print}`);
    }
}

function i(...message: any[]) {
    let print: string|undefined;
    message.forEach(element => print ? print += ` ${element}` : print = `${element}`);
    if (process.env.LOG_DATE === 'true') {
        console.info(`[${new Date()}/INFO] ${print}`);
    } else {
        console.info(`[INFO] ${print}`);
    }
}

function w(...message: any[]) {
    let print: string|undefined;
    message.forEach(element => print ? print += ` ${element}` : print = `${element}`);
    if (process.env.LOG_DATE === 'true') {
        console.warn(`[${new Date()}/WARN] ${print}`);
    } else {
        console.warn(`[WARN] ${print}`);
    }
}

function e(...message: any[]) {
    let print: string|undefined;
    message.forEach(element => print ? print += ` ${element}` : print = `${element}`);
    if (process.env.LOG_DATE === 'true') {
        console.error(`[${new Date()}/ERROR] ${print}`);
    } else {
        console.error(`[ERROR] ${print}`);
    }
}

export const HLog = {l, d, i, w, e}