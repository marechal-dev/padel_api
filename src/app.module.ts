import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeORMConfiguration } from './database/database.configuration';
import { UsersModule } from './users/users.module';
import { PairsModule } from './pairs/pairs.module';
import { GymsModule } from './gyms/gyms.module';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [
    TypeORMConfiguration,
    UsersModule,
    PairsModule,
    GymsModule,
    TournamentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
