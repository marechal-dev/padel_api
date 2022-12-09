import { BaseEntity } from 'src/core/entities/base-entity';
import { Tournament } from 'src/tournaments/entities/tournament.entity';
import { GymAdmin } from 'src/users/entities/gym-admin.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('gyms')
export class Gym extends BaseEntity {
	@Column({
		name: 'title',
	})
	public title: string;

	@Column({
		name: 'numberOfFields',
		type: 'integer',
	})
	public numberOfFields: number;

	@Column({
		name: 'address',
	})
	public address: string;

	@ManyToOne(() => GymAdmin, (gymAdmin) => gymAdmin.administratedGyms)
	public administratedBy: GymAdmin;

	@OneToMany(() => Tournament, (tournament) => tournament.hostedBy)
	public hostedTournaments: Tournament[];
}
