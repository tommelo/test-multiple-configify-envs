import { Injectable } from '@nestjs/common';
import { TestConfiguration } from './configuration';

@Injectable()
export class AppService {
  constructor(private readonly config: TestConfiguration) {}

  getHello(): string {
    return this.config.test;
  }
}
