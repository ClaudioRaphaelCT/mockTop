import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Principal } from './entity/principal.entity';
import { principal } from './database/principal.db';

@Injectable()
export class PrincipalService {
  private getPrincipal: Principal[] = principal;

  findPrincipal(headers, body) {
    const auth = headers['authorization'];
    const login = body['login'];
    const password = body['password'];

    if (
      auth !== 'bearer randomKeyBase64' ||
      login !== 'mock_api_principal@login' ||
      password !== 10102023
    ) {
      throw new HttpException(
        `Não foi possivel acessar a API principal`,
        HttpStatus.UNAUTHORIZED,
      );
    }
    return this.getPrincipal;
  }
}
