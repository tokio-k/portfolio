import { Module } from '@nestjs/common';
import { SampleResolver } from 'src/resolvers/sample.resolver';

@Module({
  providers: [SampleResolver],
})
export class SampleModule {}
