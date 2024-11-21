import { Configuration, Value } from '@itgorillaz/configify';

@Configuration()
export class TestConfiguration {
  @Value('TEST')
  test: string;
}
