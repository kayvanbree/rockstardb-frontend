import { Component, OnInit } from '@angular/core';
import {PlayerStateModel} from '../../store/models/player-state.model';
import {Store} from '@ngxs/store';
import {Seek} from '../../store/actions/player.actions';

@Component({
  selector: 'app-position-slider',
  templateUrl: './position-slider.component.html',
  styleUrls: ['./position-slider.component.scss']
})
export class PositionSliderComponent implements OnInit {
  public player: PlayerStateModel;
  private sliding = false;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(state => state.player).subscribe((value) => {
      if (!this.sliding) {
        this.player = value;
      }
    });
  }

  seekPosition(position: number) {
    this.store.dispatch(new Seek(position));
    this.sliding = false;
  }

  onInput(event: any) {
    this.sliding = true;
  }
}
