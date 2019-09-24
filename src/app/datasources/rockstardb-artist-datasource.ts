import {PagedDataSource} from './paged-data-source';
import {RockstardbEntityModel} from '../store/entities/rockstardb-entity.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {CollectionViewer} from '@angular/cdk/collections';
import {RowDoubleClickEvent} from '../events/row-double-click-event';
import {RockstardbEntityService} from '../store/providers/rockstardb-entity.service';

export class RockstardbArtistDatasource extends PagedDataSource<RockstardbEntityModel> {
  private entities = [];

  private subject = new BehaviorSubject<RockstardbEntityModel[]>(this.entities);
  private observable = this.subject.asObservable();

  constructor(
    private entityService: RockstardbEntityService,
    private type: string,
    public pageSize: number
  ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<RockstardbEntityModel[] | ReadonlyArray<RockstardbEntityModel>> {
    this.entityService.getEntities(this.type, this.pageSize).subscribe((value: any[]) => {
      this.entities = value;
      this.openPage(0);
    });
    return this.observable;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subject.complete();
  }

  getRowDoubleClickEvent(row: any): RowDoubleClickEvent {
    return undefined;
  }

  openPage(page): void {
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    const items = this.entities.slice(start, end);
    this.subject.next(items);
  }

}
