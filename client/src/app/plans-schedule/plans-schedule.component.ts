import { Component} from '@angular/core';
import { LevelService } from './level.service';
import { ILevel } from '../shared/interfaces/index';

@Component({
  selector: 'app-plans-schedule',
  templateUrl: './plans-schedule.component.html',
  styleUrls: ['./plans-schedule.component.css']
})
export class PlansScheduleComponent {

  levels: ILevel[] | undefined;

  constructor(private levelService: LevelService) { 
    this.fetchLevels();
  }

  fetchLevels(): void{
    this.levels = undefined;
    this.levelService.loadLevels().subscribe(levels=> this.levels = levels)
  }


}
