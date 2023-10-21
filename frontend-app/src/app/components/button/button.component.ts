import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() url: string = '';
  @Input() bgColor: string = '';

  @Output() btnEvent = new EventEmitter();
  ngOnInit(): void{}

  btnEmit() {
    this.btnEvent.emit();
  }
}
