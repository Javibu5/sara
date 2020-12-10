import {MigrationInterface, QueryRunner} from "typeorm";

export class addAuth1606997379746 implements MigrationInterface {
    name = 'addAuth1606997379746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`userId` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `password` varchar(70) NULL, UNIQUE INDEX `IDX_51b8b26ac168fbe7d6f5653e6c` (`name`), PRIMARY KEY (`userId`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_51b8b26ac168fbe7d6f5653e6c` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
