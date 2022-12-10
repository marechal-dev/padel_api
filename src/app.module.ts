import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TournamentsModule } from './tournaments/tournaments.module';
import { UsersModule } from './users/users.module';
import { PairsModule } from './pairs/pairs.module';
import { GymsModule } from './gyms/gyms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gym } from './gyms/entities/gym.entity';
import { Pair } from './pairs/entities/pair.entity';
import { Tournament } from './tournaments/entities/tournament.entity';
import { GymAdmin } from './users/entities/gym-admin.entity';
import { Player } from './users/entities/player.entity';

@Module({
	imports: [
		ConfigModule.forRoot({
			cache: true,
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_HOST),
			username: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
			entities: [Player, GymAdmin, Pair, Gym, Tournament],
			synchronize: true,
		}),
		UsersModule,
		PairsModule,
		GymsModule,
		TournamentsModule,
	],
})
export class AppModule {}
