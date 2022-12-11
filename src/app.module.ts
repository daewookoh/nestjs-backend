import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { MembersModule } from './members/members.module';

@Module({
  imports: [MoviesModule, MembersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
