export class DataFetchError extends Error {
    constructor(public message: string = "There was an error to fetch data!"){
        super(message);
        this.name = "Server Error"
    }
}