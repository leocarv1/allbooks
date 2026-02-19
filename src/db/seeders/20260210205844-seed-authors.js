'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('authors', [
			{
				firstName: 'John',
				lastName: 'Doe',
				birthday: '1987-06-21'
			},
			{
				firstName: 'John1',
				lastName: 'Doe1',
				birthday: '1987-06-21'
			}
		], {});
		
	},
	
	async down (queryInterface, Sequelize) {
		
		await queryInterface.bulkDelete('authors', null, {});
		
	}
};
