import { Gym } from 'src/gyms/entities/gym.entity';
import { Entity, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('gymAdmins')
export class GymAdmin extends User {
	@OneToMany(() => Gym, (gym) => gym.administratedBy)
	public administratedGyms: Gym[];
}
