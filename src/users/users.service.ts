import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGymAdminDto } from './dto/create-gym-admin.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdateGymAdminDto } from './dto/update-gym-admin.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { GymAdmin } from './entities/gym-admin.entity';
import { Player } from './entities/player.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Player)
		private readonly playersRepository: Repository<Player>,
		@InjectRepository(GymAdmin)
		private readonly gymAdminsRepository: Repository<GymAdmin>,
	) {}

	public async createPlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
		const createdPlayer = new Player();

		Object.assign(createdPlayer, createPlayerDto);

		await this.playersRepository.save(createdPlayer);
	}

	public async createGymAdmin(
		createGymAdminDto: CreateGymAdminDto,
	): Promise<void> {
		const createdGymAdmin = new GymAdmin();

		Object.assign(createdGymAdmin, createGymAdminDto);

		await this.gymAdminsRepository.save(createdGymAdmin);
	}

	public async findAllPlayers(): Promise<Player[]> {
		const players = await this.playersRepository.find();

		return players;
	}

	public async findAllGymAdmins(): Promise<GymAdmin[]> {
		const gymAdmins = await this.gymAdminsRepository.find();

		return gymAdmins;
	}

	public async findOnePlayer(id: string): Promise<Player | null> {
		const player = await this.playersRepository.findOneBy({
			id,
		});

		return player;
	}

	public async findOneGymAdmin(id: string): Promise<GymAdmin | null> {
		const gymAdmin = await this.gymAdminsRepository.findOneBy({
			id,
		});

		return gymAdmin;
	}

	public async updatePlayer(
		id: string,
		updatePlayerDto: UpdatePlayerDto,
	): Promise<void> {
		const player = await this.playersRepository.findOneBy({
			id,
		});

		if (!player) {
			throw new BadRequestException(`User with ${id} ID does not exists!`);
		}

		Object.assign(player, updatePlayerDto);

		await this.playersRepository.save(player);
	}

	public async updateGymAdmin(
		id: string,
		updateGymAdminDto: UpdateGymAdminDto,
	): Promise<void> {
		const gymAdmin = await this.gymAdminsRepository.findOneBy({
			id,
		});

		if (!gymAdmin) {
			throw new BadRequestException(`User with ${id} ID does not exists!`);
		}

		Object.assign(gymAdmin, updateGymAdminDto);

		await this.gymAdminsRepository.save(gymAdmin);
	}

	public async removePlayer(id: string): Promise<void> {
		const player = await this.playersRepository.findOneBy({
			id,
		});

		if (!player) {
			throw new BadRequestException(`The User with ${id} ID does not exists!`);
		}

		await this.playersRepository
			.createQueryBuilder()
			.delete()
			.from(Player)
			.where('id = :id', { id })
			.execute();
	}

	public async removeGymAdmin(id: string): Promise<void> {
		const gymAdmin = await this.gymAdminsRepository.findOneBy({
			id,
		});

		if (!gymAdmin) {
			throw new BadRequestException(`The User with ${id} ID does not exists!`);
		}

		await this.gymAdminsRepository
			.createQueryBuilder()
			.delete()
			.from(GymAdmin)
			.where('id = :id', { id })
			.execute();
	}
}
