import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Maratona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  aula: string;
}