import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})

export class VistaPrincipalComponent  {

  constructor(public dataService:DataService) { }

}
