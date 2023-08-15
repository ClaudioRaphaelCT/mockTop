import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Token } from './entity/token.entity';
import { token } from './database/token.db';

@Injectable()
export class TokenService {
  private getToken: Token[] = token;

  findToken(headers) {
    const auth = headers['authorization'];
    const content = headers['content-type'];
    const password = headers['password'];
    if (
      auth !== 'Topaz' ||
      password !== 'Topsystems2023' ||
      content !== 'application/json'
    ) {
      throw new HttpException(`Sem autorização`, HttpStatus.UNAUTHORIZED);
    }
    return this.getToken;
  }
}
