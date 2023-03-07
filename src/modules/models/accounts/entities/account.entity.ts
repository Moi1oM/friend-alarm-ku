import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class Account extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // SPECIFIC COLUMNS
  @Column()
  email: string;

  @Column()
  password: string;

  //RELATED COLUMNS
  @OneToOne(() => Profile, (profile) => profile.account, {
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  profile: Profile;
}
