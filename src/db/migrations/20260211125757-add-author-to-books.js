'use strict';

import { DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Books', 'authorId', {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Authors',
				key: 'id'
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Books', 'authorId');
	}
};