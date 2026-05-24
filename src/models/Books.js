import { Model, DataTypes } from "sequelize";

class Book extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING
        }, {
            sequelize,
            modelName: "Book",
            tableName: "books",
            timestamps: true,
            underscored: false,
        })
    };

    static associate(models) {
        this.belongsTo(models.Author, {
            foreignKey: "authorId",
            as: 'author'
        })
    }
};

// Book.belongsTo(Author);

export default Book;