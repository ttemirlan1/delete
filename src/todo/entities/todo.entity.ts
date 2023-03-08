import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  task: string

  @Column({default: false})
  status: boolean
}