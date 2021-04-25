import {MigrationInterface, QueryRunner} from "typeorm";

export class lockUser1619372980495 implements MigrationInterface {
    name = 'lockUser1619372980495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` ADD `lock` varchar(70) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `name` `name` varchar(70) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `surname` `surname` varchar(70) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `nid` `nid` varchar(70) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `phonenumber` `phonenumber` varchar(9) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `phonenumber` `phonenumber` varchar(9) NOT NULL DEFAULT '000000000'");
        await queryRunner.query("ALTER TABLE `users` CHANGE `nid` `nid` varchar(70) NOT NULL DEFAULT 'nid'");
        await queryRunner.query("ALTER TABLE `users` CHANGE `surname` `surname` varchar(70) NOT NULL DEFAULT 'apellido'");
        await queryRunner.query("ALTER TABLE `users` CHANGE `name` `name` varchar(70) NOT NULL DEFAULT 'nombre'");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `lock`");
    }

}
