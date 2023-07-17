module.exports = (sequelize, DataTypes) => {
    const Vehicles = sequelize.define ("Vehicles",{
    vehicleType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vehicleNum: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vehicleYear: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vehicleDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vehiclePhoto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    packageH2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    packageH4: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    packageH8: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    excessHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    excessMileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

return Vehicles;
};