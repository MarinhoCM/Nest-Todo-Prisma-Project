import { Module } from '@nestjs/common';
import { PrismaTodoRepository } from "./repository/todo.repository";
import { PrismaTodoService } from './repository/prisma.database.service';

@Module({
  providers: [
    PrismaTodoService,
    PrismaTodoRepository
  ],
  exports: [
    PrismaTodoRepository
  ]
})
export class DatabaseModule { }
