import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //CORS Setting
  app.enableCors();

  //SuccessInterceptor Setting
  app.useGlobalInterceptors(new SuccessInterceptor());

  //Validation Setting
  app.useGlobalPipes(new ValidationPipe());

  //Filter Setting
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(process.env.PORT);
}
bootstrap();
