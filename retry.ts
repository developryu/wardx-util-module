export function retry<T>(
    promiseFn: (...args: any[]) => Promise<T>,
    retryCount: number = 3,
    ...args: any[]
): Promise<T> {
    return new Promise((resolve, reject) => {
        let count = 0;
        function run() {
            promiseFn(...args).then(resolve).catch(error => {
                // console.error("[LIFECYCLE]", count, error);
                if (count < retryCount) {
                    count++;
                    run();
                } else {
                    reject(error);
                }
            });
        }
        run();
    });
}