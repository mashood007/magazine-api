import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Magazine } from "./magazine.entity";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, user => user.subscriptions)
  user: User;

  @ManyToOne(() => Magazine, magazine => magazine.subscriptions)
  magazine: Magazine;

  @Column({ nullable: false })
  startDate: Date;

  @Column({ nullable: false })
  endDate: Date;

  @Column({ default: 0 })
  cost: number // price when subscription created

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
