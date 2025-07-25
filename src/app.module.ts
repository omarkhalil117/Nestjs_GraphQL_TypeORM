import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    driver: ApolloDriver,
  }), CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
