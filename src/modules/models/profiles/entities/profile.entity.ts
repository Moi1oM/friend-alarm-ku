import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from '../../accounts/entities/account.entity';
import { Friendship } from '../../friendships/entities/friendship.entity';
import { Timetable } from '../../timetables/entities/timetable.entity';

@Entity()
export class Profile extends BaseEntity {
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

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  studentId: string;

  //RELATED COLUMNS
  @OneToOne(() => Account, (account) => account.profile)
  account: Account;

  @OneToMany(() => Friendship, (friendship) => friendship.profile)
  friendships: Friendship[];

  @OneToMany(() => Timetable, (timetable) => timetable.profile)
  timetable: Timetable;
}
