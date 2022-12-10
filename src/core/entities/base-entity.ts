import { randomUUID } from 'node:crypto';
import { CreateDateColumn, PrimaryColumn } from 'typeorm';

abstract class BaseEntity {
	@PrimaryColumn()
	public readonly id: string;

	@CreateDateColumn()
	public readonly createdAt: Date;

	public constructor() {
		if (!this.id) {
			this.id = randomUUID();
		}
	}
}

export { BaseEntity };
