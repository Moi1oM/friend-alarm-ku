import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Timetable } from '../../timetables/entities/timetable.entity';

@Entity()
export class Course extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // SPECIFIC COLUMNS
  @Column()
  courseCode: number;

  @Column()
  courseName: string;

  @Column()
  professor: string;

  @Column()
  credit: string;

  //RELATED COLUMNS
  @ManyToOne(() => Timetable, (timetable) => timetable.courses)
  timetable: Timetable;
}
