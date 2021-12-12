import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import { TeacherController } from './teacher/teacher.controller';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [ConfigModule.forRoot(), TeacherModule],
  controllers: [AppController, TeacherController],
  providers: [AppService],
})
export class AppModule {}
