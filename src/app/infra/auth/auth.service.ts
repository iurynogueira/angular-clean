import { Injectable } from "@angular/core";
import { UserEntity } from "src/app/domain/entities/user/user-entity";

const credentialsKey = "credentials";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuario!: UserEntity;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem(credentialsKey) || "{}");
  }

  isAuthenticated(): boolean {
    return !!this.credentials.token;
  }

  get credentials(): UserEntity {
    return this.usuario;
  }

  set credentials(credentials: UserEntity) {
    this.usuario = credentials;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    }
  }
}
