import { Component, OnInit } from '@angular/core';
import { FruitsAndVegs } from '../../interfaces/FruitsAndVegs';
import { FileContentService } from 'src/app/services/file-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruitvegpage',
  templateUrl: './fruitvegpage.component.html',
  styleUrls: ['./fruitvegpage.component.css']
})
export class FruitvegpageComponent implements OnInit {
  fruitAndVegsData : FruitsAndVegs[] = [];
  showFruitTable: boolean = false;
  constructor(
    private fileContentService : FileContentService,
    private router : Router
  )
  {

  }
  ngOnInit(): void {
    this.fileContentService.getFileContent().subscribe( (data) => {
      this.fruitAndVegsData = [];
      data.contentList.forEach(element => {
        this.showFruitTable = true;
        this.fruitAndVegsData.push({description : element});
      });
    });
  }

  NavigateTo(){
    this.router.navigate(['']);
  }



}
