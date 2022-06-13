import { DomainEntity } from "../base/domain-entity";

export class UserEntity extends DomainEntity {
  username?: string;
  password?: string;
  email?: string;
  token?: string;
}