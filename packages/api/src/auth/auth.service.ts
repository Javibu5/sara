import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/infrastructure/service/user.service';
import { JWTPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.usersService.getUserByName(username);
    return await user.validatePassword(pass);
  }

  async generateAccessToken(name: string) {
    const user = await this.usersService.getUserByName(name);
    const payload: JWTPayload = { userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
