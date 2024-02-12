import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AdminModule, UsersModule]
})
export class ApiModule {

}
