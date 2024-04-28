import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  Req,
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { FilterDto } from "../pagination/dto/filter.dto";
import { CacheInterceptor, CacheTTL } from "@nestjs/cache-manager";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(
      request.user?.username,
      createProjectDto,
    );
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30000)
  async findAll(@Req() request, @Query() filter?: FilterDto) {
    return this.projectsService.findAllPaginated(
      request.user?.username,
      filter,
    );
  }
  
  @Get(":id")
  findOne(@Req() request, @Param("id") id: string) {
    return this.projectsService.findOne(request.user?.username, +id);
  }

  @Patch(":id")
  update(
    @Req() request,
    @Param("id") id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectsService.update(
      request.user?.username,
      +id,
      updateProjectDto,
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.projectsService.remove(+id);
  }

}
