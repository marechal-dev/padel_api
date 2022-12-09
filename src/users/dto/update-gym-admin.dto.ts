import { PartialType } from '@nestjs/mapped-types';
import { CreateGymAdminDto } from './create-gym-admin.dto';

export class UpdateGymAdminDto extends PartialType(CreateGymAdminDto) {}
