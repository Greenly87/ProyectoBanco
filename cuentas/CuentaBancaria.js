export class CuentaBancaria {
    #saldo;
    #numeroCuenta;

    constructor(numeroCuenta, saldo) {
        if (new.target === CuentaBancaria) {
            throw new Error("No se puede instanciar CuentaBancaria directamente, es una clase base.");
        }
        this.#numeroCuenta = numeroCuenta;
        this.#saldo = saldo;
    }

    // Las subclases NO pueden tocar #saldo ni #numeroCuenta directamente,
    // deben usar siempre estos metodos get/set.
    getSaldo() {
        return this.#saldo;
    }

    setSaldo(valor) {
        this.#saldo = valor;
    }

    getNumeroCuenta() {
        return this.#numeroCuenta;
    }

    calcularInteres() {
        throw new Error(`El metodo calcularInteres() debe ser sobrescrito por la clase ${this.constructor.name}`);
    }

    aplicarInteres() {
        const interes = this.calcularInteres();
        this.setSaldo(this.getSaldo() + interes);
        return interes;
    }

    toString() {
        return `Cuenta #${this.getNumeroCuenta()} (${this.constructor.name}) | Saldo: $${this.getSaldo().toFixed(2)}`;
    }
}
