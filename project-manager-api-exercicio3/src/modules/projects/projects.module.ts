import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { PaginationModule } from '../pagination/pagination.module';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
