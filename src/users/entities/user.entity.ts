import { BaseEntity } from 'src/core/entities/base-entity';
import { Column } from 'typeorm';
import { PermissionLevel } from './enums/permission-level';
import { Sex } from './enums/sex';

export abstract class User extends BaseEntity {
	@Column()
	public firstName: string;

	@Column()
	public surname: string;

	@Column()
	public cpf: string;

	@Column()
	public cityOfResidence: string;

	@Column()
	public email: string;

	@Column()
	public password: string;

	@Column({
		enumName: 'sex',
		enum: Sex,
	})
	public sex: Sex;

	@Column({
		enum: PermissionLevel,
		enumName: 'permissionLevel',
	})
	public level: PermissionLevel;
}
