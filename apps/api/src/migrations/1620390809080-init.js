const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class init1620390809080 {
  name = 'init1620390809080';

  async up(queryRunner) {
    await queryRunner.query(
      'CREATE TABLE `users` (`id` varchar(36) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(70) NOT NULL, `roles` text NOT NULL, `name` varchar(70) NOT NULL, `surname` varchar(70) NOT NULL, `nid` varchar(70) NOT NULL, `phonenumber` varchar(9) NOT NULL, `lock` tinyint NOT NULL, UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );

    await queryRunner.query(
      "INSERT INTO `users` (`id`, `username`, `password`, `roles`, `name`, `surname`, `nid`, `phonenumber`, `lock`) VALUES ('f60d593d-9ea9-4add-8f6c-5d86dd8c9f87','admin', '$2a$04$J.qvJcqZRPBlGFKWIxPOYOsPRXpkZmTyTHScEF3Kq5/QXV.8oMcfy', 'ROLE_ADMIN', 'Super', 'Admin', '000000000A', '000000000', 0)"
    );
  }

  async down(queryRunner) {
    await queryRunner.query(
      'DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`'
    );
    await queryRunner.query('DROP TABLE `users`');
  }
};
