import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RockstardbEntityService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient,
  ) { }

  /**
   * Get a list of entities at API root
   */
  public getEntities(type: string, pageSize: number) {
    return this.http.get(`${this.config.rockstardbApiBase}/${type}`);
  }
}
