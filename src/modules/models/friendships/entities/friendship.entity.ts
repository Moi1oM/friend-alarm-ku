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
import { Chat } from '../../chats/entities/chat.entity';

@Entity()
export class Friendship extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // SPECIFIC COLUMNS
  @Column()
  targetId: number;

  //RELATED COLUMNS
  @ManyToOne(() => Profile, (profile) => profile.friendships)
  profile: Profile;

  @OneToMany(() => Chat, (chat) => chat.friendship, {
    eager: true,
  })
  chats: Chat[];
}
