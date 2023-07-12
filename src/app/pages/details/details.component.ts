import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'poke-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params[''];
    console.log(this.id);
  }
}
