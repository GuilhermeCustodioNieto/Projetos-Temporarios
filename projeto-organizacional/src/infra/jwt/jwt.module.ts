import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('SECRET') || 'default_secret',
        signOptions: { expiresIn: '30d' },
      }),
    }),
  ],
  exports: [JwtModule], //
})
export class GlobalJwtModule {}
