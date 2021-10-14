import { Point } from "geojson";
import { Plant } from "plant/Plant";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn
} from "typeorm";

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column({ nullable: true })
    description?: string

    @Column({ nullable: true })
    instagramUsername?: string

    @Column({ nullable: true })
    whatsappNumber?: number

    @Column()
    state: string

    @Column()
    city: string

    @Column({
        type: 'geography',
        spatialFeatureType: 'Point',
    })
    @Index({ spatial: true })
    location: Point;

    @OneToMany(() => Plant, (plant) => plant.user)
    plants: Plant[];


    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @DeleteDateColumn({ select: false })
    deletedAt?: Date;
}