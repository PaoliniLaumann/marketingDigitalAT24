import { stock } from "../Data/Data"


export const pedirDatos = () => {
    return new Promise( (resolve) => {
        resolve(stock)
    })
}