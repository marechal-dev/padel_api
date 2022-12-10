import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { GymAdmin } from './entities/gym-admin.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Player, GymAdmin])],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
