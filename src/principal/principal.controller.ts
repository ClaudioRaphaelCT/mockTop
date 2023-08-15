import { Body, Controller, Post, Headers, Response } from '@nestjs/common';
import { PrincipalService } from './principal.service';

@Controller('principal')
export class PrincipalController {
  constructor(private readonly principalService: PrincipalService) {}

  @Post()
  findPrincipal(@Headers() headers, @Body() body, @Response() res) {
    return res
      .status(200)
      .send(this.principalService.findPrincipal(headers, body));
  }
}
