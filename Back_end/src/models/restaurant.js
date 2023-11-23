module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Restaurant', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom est déjà pris.'
        },
        validate: {
          len: {
            args: [1, 25],
            msg: 'Le nom doit contenir entre 1 et 25 caractères.'
          },
          notEmpty: { msg: 'Le nom ne peut pas être vide.' },
          notNull: { msg: 'Le nom est une propriété requise.'}
        }
      },
      
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg: 'Utilisez uniquement une URL valide pour l\'image.' },
          notNull: { msg: 'L\'image est une propriété requise.'}
        }
      },
     
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }