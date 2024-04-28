import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmConfig } from './modules/typeorm/config/config.module';

@Module({
  imports: [ProjectsModule, UsersModule, TasksModule, TypeOrmConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
