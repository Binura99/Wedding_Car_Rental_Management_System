module.exports = (sequelize, DataTypes) => {
    const Reservations = sequelize.define ("Reservations",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passenger: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pLocation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dLocation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

return Reservations;
};