import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QueryBuilderConfigService } from './query-builder-config.service';

@Injectable()
export class QueryBuilderService {
	constructor(@Inject(QueryBuilderConfigService) private _config, private _api: HttpClient) { }

	fetchCountRuleSets() {
		console.log(this._config);
		return of(Math.floor(Math.random() * 1e3 * 100) + 1);
	}
}
