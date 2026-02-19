'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('books', [
			{
				title: 'John Doe',
				authorId: 1
			},
			{
				title: "Testing Books",
				authorId: 2
			}
		], {});
		
	},
	
	async down (queryInterface, Sequelize) {
		
		await queryInterface.bulkDelete('books', null, {});
		
	}
};
