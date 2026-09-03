import { CuentaBancaria } from './CuentaBancaria.js';

export class CuentaCorriente extends CuentaBancaria {
    #sobregiroPermitido;

    constructor(numeroCuenta, saldo, sobregiroPermitido = 500000) {
        super(numeroCuenta, saldo);
        this.#sobregiroPermitido = sobregiroPermitido;
    }

    calcularInteres() {
        
        return -(this.getSaldo() * 0.001);
    }

    getSobregiroPermitido() {
        return this.#sobregiroPermitido;
    }
}
