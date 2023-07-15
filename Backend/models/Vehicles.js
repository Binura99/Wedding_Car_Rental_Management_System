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
});

return Vehicles;
};