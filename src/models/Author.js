import { Model, DataTypes } from "sequelize";

class Author extends Model {
	static init(sequelize) {
		super.init({
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			birthday: {
				type: DataTypes.DATEONLY,
				set(value) {
					if (!value) return;

					if (value.includes("/")) {
						const [day, month, year] = value.split("/");
						value = `${year}-${month}-${day}`;
					}

					this.setDataValue("birthday", value);
				}
			}
		}, {
			sequelize,
			modelName: "Author",
			tableName: "authors",
			timestamps: true,
			underscored: false,
		})
	};
	
	static getID() {
		return this.id;
	};
	
	static getFirstName() {
		return this.firstName;
	};

	static associate(models){
		this.hasMany(models.Book, {
			foreignKey: 'authorId',
			as: 'books'
		})
	}
};

export default Author;