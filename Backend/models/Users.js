module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define ("Users",{
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Users.associate =(models) => {
    Users.hasMany(models.Reservations, {
        onDelete: "cascade",
    });
}

return Users;
};