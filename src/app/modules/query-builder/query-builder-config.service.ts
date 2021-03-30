import { InjectionToken } from '@angular/core';
import { QueryBuilderConfig } from './components/query-builder';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const QueryBuilderConfigService = new InjectionToken<QueryBuilderConfig>("QueryBuilderConfig");
