const {escribirArchivo, leerArchivo} = require('./utils/files.js')
const path = './data/autos.json';

const concesionaria = {
    vehiculos:leerArchivo(path),
    autosEnventa: function () {
        return this.vehiculos.filter(car => car.vendido === false)
    },
    vender:function (dominio) {
        for (let index = 0; index < this.vehiculos.length; index++) {
            if(this.vehiculos[index].patente == dominio){
                car.vendido = true
            }
            escribirArchivo(this.vehiculos,path)
            break
        }
    },

    autoFinanciable:function (cuotas) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.cuotas >= cuotas);
    },

    vendidos: function (params) {
        return this.vehiculos.filter(car => car.vendido === true)
    },

    totalDeVentas: function (s) {
        return this.vendidos().reduce((acumulador,valorActual) => {
            return acumulador + valorActual;
        },0)
    },

    agregarAutos:function (marca,nodelo,precio,km,color,cuotas,anio,patente) {
        const car = {
            marca,
            nodelo,
            precio,
            km,
            color,
            cuotas,
            anio,
            patente,
            vendido:false
        }

        this.vehiculos.push(car);
        escribirArchivo(this.vehiculos,path)
    },

    borrarAutos: function (dominio) {
       const index = this.vehiculos.findIndex(elemento => elemento.patente == dominio);
       this.vehiculos.splice(index,1);
       escribirArchivo(this.vehiculos,path);
       return this.vehiculos
    },

    ordernarVehiculos: function (prop) {

        for (let i = 0; i < this.vehiculos.length - 1; i++) {
            for (let j = 0; j < this.vehiculos.length - 1; j++) {
                if (this.vehiculos[j][prop] > this.vehiculos[j+1][prop]) {
                    let temp = this.vehiculos[j];
                    this.vehiculos[j] = this.vehiculos[j+1];
                    this.vehiculos[j+1] = temp; 
                }
            }    
        }
        
        return this.vehiculos;
    }

}

module.exports = concesionaria;