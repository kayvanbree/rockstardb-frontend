import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ArtistModel} from '../../store/entities/artist.model';
import {Router} from '@angular/router';
import {RockstardbArtistDatasource} from '../../datasources/rockstardb-artist-datasource';
import {RockstardbEntityService} from '../../store/providers/rockstardb-entity.service';

@Component({
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
  styleUrls: ['./artists-page.component.scss']
})
export class ArtistsPageComponent implements OnInit {
  public dataSource: RockstardbArtistDatasource;
  public pageSize = 50;

  constructor(
    private store: Store,
    private router: Router,
    private entityService: RockstardbEntityService,
  ) {}

  public ngOnInit(): void {
    this.dataSource = new RockstardbArtistDatasource<ArtistModel>(this.entityService, 'artist', this.pageSize);
  }

  public onRowDoubleClick(event: ArtistModel): void {
    this.router.navigate(['artist', event.id]);
  }
}
