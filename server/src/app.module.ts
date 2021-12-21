import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';
import { BillController } from './bill/bill.controller';
import { BillModule } from './bill/bill.module';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [ConfigModule.forRoot(), BookModule, BillModule],
  controllers: [AppController, BillController, CategoryController],
  providers: [AppService, BookService],
})
export class AppModule {}
