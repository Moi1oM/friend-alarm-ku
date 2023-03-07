import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Friendship } from '../../friendships/entities/friendship.entity';

@Entity()
export class Chat extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // SPECIFIC COLUMNS
  @Column()
  fromStudentId: number;

  @Column()
  toStudentId: number;

  @Column()
  content: string;

  //RELATED COLUMNS

  @ManyToOne(() => Friendship, (friendship) => friendship.chats)
  friendship: Friendship;
}
