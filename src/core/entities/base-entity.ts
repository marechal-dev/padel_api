import { randomUUID } from 'crypto';
import { CreateDateColumn, PrimaryColumn } from 'typeorm';

abstract class BaseEntity {
	@PrimaryColumn({
		name: 'id',
	})
	public readonly id: string;

	@CreateDateColumn({
		name: 'createdAt',
	})
	public readonly createdAt: Date;

	public constructor() {
		if (!this.id) {
			this.id = randomUUID();
		}
	}
}

export { BaseEntity };
