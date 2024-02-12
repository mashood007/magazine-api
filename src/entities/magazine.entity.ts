import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Magazine {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: 0 })
  price: number
}
