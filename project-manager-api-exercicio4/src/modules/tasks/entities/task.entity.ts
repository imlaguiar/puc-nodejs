import { Project } from "src/modules/projects/entities/project.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn()
  user: User;
}

export enum TaskStatus {
  pending = "pending",
  completed = "completed",
}
