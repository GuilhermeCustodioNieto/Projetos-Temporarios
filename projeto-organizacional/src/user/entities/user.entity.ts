import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 100, name: 'complete_name' })
  completeName: string;
  @Column({ length: 100 })
  email: string;
  @Column({ length: 100 })
  password: string;
}
