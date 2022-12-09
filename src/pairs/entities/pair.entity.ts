import { BaseEntity } from 'src/core/entities/base-entity';
import { Tournament } from 'src/tournaments/entities/tournament.entity';
import { Player } from 'src/users/entities/player.entity';
import { Entity, ManyToMany } from 'typeorm';

@Entity('pairs')
export class Pair extends BaseEntity {
	@ManyToMany(() => Player, (player) => player.enrolledPairs)
	public players: Player[];

	@ManyToMany(() => Tournament, (tournament) => tournament.enrolledPairs)
	public enrolledTournaments: Tournament[];
}
