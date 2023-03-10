import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity()
export class Timetable extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // SPECIFIC COLUMNS
  @Column()
  name: string;

  //RELATED COLUMNS
  @ManyToOne(() => Profile, (profile) => profile.timetable)
  profile: Profile;

  @OneToMany(() => Course, (course) => course.timetable, {
    eager: true,
  })
  courses: Course[];
}
