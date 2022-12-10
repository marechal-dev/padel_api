import { Pair } from 'src/pairs/entities/pair.entity';
import { Entity, Column, ManyToMany } from 'typeorm';
import { Category } from './enums/category';
import { ShirtSize } from './enums/shirt-size';
import { User } from './user.entity';

@Entity('players')
export class Player extends User {
	@Column({
		enumName: 'playerCategory',
		enum: Category,
	})
	public category: Category;

	@Column()
	public shirtSize: ShirtSize;

	@ManyToMany(() => Pair)
	public enrolledPairs: Pair[];
}
