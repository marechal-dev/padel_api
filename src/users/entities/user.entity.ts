import { BaseEntity } from 'src/core/entities/base-entity';
import { Column } from 'typeorm';
import { PermissionLevel } from './enums/permission-level';
import { Sex } from './enums/sex';

export abstract class User extends BaseEntity {
	@Column({
		name: 'firstName',
	})
	public firstName: string;

	@Column({
		name: 'surname',
	})
	public surname: string;

	@Column({
		name: 'cpf',
	})
	public cpf: string;

	@Column({
		name: 'cityOfResidence',
	})
	public cityOfResidence: string;

	@Column({
		name: 'email',
	})
	public email: string;

	@Column({
		name: 'password',
	})
	public password: string;

	@Column({
		name: 'sex',
		enumName: 'sex',
		enum: Sex,
	})
	public sex: Sex;

	@Column({
		name: 'level',
		enum: PermissionLevel,
		enumName: 'permissionLevel',
	})
	public level: PermissionLevel;
}
