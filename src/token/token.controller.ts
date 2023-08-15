import { Controller, Get, Response, Headers } from '@nestjs/common';
import { TokenService } from './token.service';
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  findToken(@Response() res, @Headers() headers) {
    return res.status(200).send(this.tokenService.findToken(headers));
  }
}
