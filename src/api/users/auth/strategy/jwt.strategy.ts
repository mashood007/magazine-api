import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { InjectRepository } from "@nestjs/typeorm"
import { Strategy, ExtractJwt } from "passport-jwt"
import { User } from "src/entities"
import { Repository } from "typeorm"

@Injectable({})
export class JwtStratery extends PassportStrategy(Strategy, 'jwt-auth') {


  constructor(
    config: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET_KEY')
    })
  }

  // returns the payload
  async validate(payload: {
    sub: number,
    email: string,
    iat: any,
    ex: number
  }) {

    const user = await this.userRepository.findOne({ where: { email: payload.email }, select: ['email', 'name', 'id'] });
    return user
  }

}
