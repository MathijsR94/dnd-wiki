import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm';
import USER_ROLE from '../../enums/User/UserRoleEnum';

@Entity()
@Unique(['email'])
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column({ type: 'enum', enum: USER_ROLE, default: USER_ROLE.Player })
    role: USER_ROLE;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @Column({ nullable: true })
    firstName?: string;

    @Column({ nullable: true })
    lastName?: string;

    @Column({ nullable: true })
    resetToken?: string;

    @Column({ nullable: true })
    resetTokenExpiry?: string;

    constructor(options: User) {
        super();
        if (options) {
            this.id = options.id;
            this.email = options.email;
            this.password = options.password;
            this.role = options.role;
            this.firstName = options.firstName;
            this.lastName = options.lastName;
            this.resetToken = options.resetToken;
            this.resetTokenExpiry = options.resetTokenExpiry;
            this.createdAt = options.createdAt;
            this.updatedAt = options.updatedAt;
        }
    }
}
