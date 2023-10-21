import { Component, Input } from '@angular/core';
import { FruitsAndVegs } from 'src/app/interfaces/FruitsAndVegs';

@Component({
  selector: 'app-fruitTable',
  templateUrl: './fruitTable.component.html',
  styleUrls: ['./fruitTable.component.css']
})
export class FruitTableComponent {
  @Input() data : FruitsAndVegs[] = [];
  @Input() visibility : boolean = false;
}
