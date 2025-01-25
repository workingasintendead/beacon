import 'jest-fetch-mock';
import '@testing-library/jest-dom';

import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

global.fetch = jest.fn();

beforeEach(() => {
  fetchMock.resetMocks();
});
