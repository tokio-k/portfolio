import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SampleModule } from 'src/modules/sample.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
    SampleModule,
  ],
})
export class AppModule {}
