const Sequelize = require('sequelize')

const Model = Sequelize.Model;

class Truck extends Model {}

Truck.init({
    truckCode : {
        type: Sequelize.STRING
    },
    firstName : {
        type: Sequelize.STRING
    },
    lastName : {
        type: Sequelize.STRING
    },
    drivingLicenseNo : {
        type: Sequelize.STRING
    },
    carLicenseNo : {
        type: Sequelize.STRING
    },
    personalLeave : {
        type: Sequelize.BOOLEAN  
    },
    sickLeave : {
        type: Sequelize.BOOLEAN  
    },
    idleTime : {
        type: Sequelize.INTEGER
    },  
    status : {
        type: Sequelize.STRING
    }
})