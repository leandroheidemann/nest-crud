import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [UserModule],
    providers: []
})
export class AppModule {
}
