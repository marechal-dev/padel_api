import { BaseEntity } from 'src/core/entities/base-entity';
import { Gym } from 'src/gyms/entities/gym.entity';
import { Pair } from 'src/pairs/entities/pair.entity';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';

@Entity('tournaments')
export class Tournament extends BaseEntity {
	@Column({
		name: 'startAt',
		type: 'timestamp',
	})
	public startAt: Date;

	@ManyToOne(() => Gym, (gym) => gym.hostedTournaments)
	public hostedBy: Gym;

	@ManyToMany(() => Pair, (pair) => pair.enrolledTournaments)
	public enrolledPairs: Pair[];
}
