import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { MembersModule } from './members/members.module';
import { BranchesModule } from './branches/branches.module';

@Module({
  imports: [MoviesModule, MembersModule, BranchesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
