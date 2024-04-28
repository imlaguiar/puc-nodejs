import { Project } from "src/modules/projects/entities/project.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name", nullable: false })
  name: string;

  @Column({ name: "description", nullable: false })
  description: string;

  @Column({ name: "createdAt", nullable: false })
  createdAt: string;
  
  @Column({ name: "deadLine", nullable: false })
  deadLine: string;

  @Column({ name: "status", nullable: false })
  status: TaskStatus;

  @ManyToOne(() => Project, (project) => project.tasks, {
    cascade: true,
    nullable: false,
  })
  project: Project;
}

export enum TaskStatus {
  pending = "pending",
  completed = "completed",
}
