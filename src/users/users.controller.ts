import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { CreateGymAdminDto } from './dto/create-gym-admin.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { UpdateGymAdminDto } from './dto/update-gym-admin.dto';
import { Player } from './entities/player.entity';
import { GymAdmin } from './entities/gym-admin.entity';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('/createPlayer')
	public async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
		await this.usersService.createPlayer(createPlayerDto);
	}

	@Post('/createGymAdmin')
	public async createGymAdmin(@Body() createGymAdminDto: CreateGymAdminDto) {
		await this.usersService.createGymAdmin(createGymAdminDto);
	}

	@Get('/getAll/players')
	public async findAllPlayers(): Promise<Player[]> {
		const data = await this.usersService.findAllPlayers();

		return data;
	}

	@Get('/getAll/gymAdmins')
	public async findAllGymAdmins(): Promise<GymAdmin[]> {
		const data = await this.usersService.findAllGymAdmins();

		return data;
	}

	@Get('/getOnePlayerById/:id')
	public async findOnePlayer(@Param('id') id: string): Promise<Player> {
		const data = await this.usersService.findOnePlayer(id);

		if (!data) {
			throw new BadRequestException(`User with ID ${id} does not exists!`);
		}

		return data;
	}

	@Get('/getOneGymAdminById/:id')
	public async findOneGymAdmin(@Param('id') id: string): Promise<GymAdmin> {
		const data = await this.usersService.findOneGymAdmin(id);

		if (!data) {
			throw new BadRequestException(`User with ID ${id} does not exists!`);
		}

		return data;
	}

	@Patch('/updatePlayer/:id')
	public async update(
		@Param('id') id: string,
		@Body() updatePlayerDto: UpdatePlayerDto,
	): Promise<void> {
		await this.usersService.updatePlayer(id, updatePlayerDto);
	}

	@Patch('/updateGymAdmin/:id')
	public async updateGymAdmin(
		@Param('id') id: string,
		@Body() updateGymAdminDto: UpdateGymAdminDto,
	): Promise<void> {
		await this.usersService.updateGymAdmin(id, updateGymAdminDto);
	}

	@Delete('/deleteOnePlayerById/:id')
	public async removePlayer(@Param('id') id: string): Promise<void> {
		await this.usersService.removePlayer(id);
	}

	@Delete('/deleteOneGymAdminById/:id')
	public async removeGymAdmin(@Param('id') id: string): Promise<void> {
		await this.usersService.removeGymAdmin(id);
	}
}
