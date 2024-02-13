import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subscription } from "./subscription.entity";

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

  @OneToMany(() => Subscription, subscription => subscription.magazine)
  subscriptions: Subscription[];

  @DeleteDateColumn()
  deletedAt: Date;
}
