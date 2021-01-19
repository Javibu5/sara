import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUser1611052644474 implements MigrationInterface {
    name = 'updateUser1611052644474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` ADD `name` varchar(70) NOT NULL DEFAULT 'nombre'");
        await queryRunner.query("ALTER TABLE `users` ADD `surname` varchar(70) NOT NULL DEFAULT 'apellido'");
        await queryRunner.query("ALTER TABLE `users` ADD `nid` varchar(70) NOT NULL DEFAULT 'nid'");
        await queryRunner.query("ALTER TABLE `users` ADD `phonenumber` varchar(9) NOT NULL DEFAULT '000000000'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `phonenumber`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `nid`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `surname`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `name`");
    }

}
