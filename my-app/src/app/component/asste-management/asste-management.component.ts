import { Component, OnInit } from '@angular/core';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Example',
    children: [
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
    ]
  }, {
    name: 'Example',
    children: [
      {
        name: 'Example',
        children: [
          {name: 'Example'},
          {name: 'Example'},
        ]
      }, {
        name: 'Example',
        children: [
          {name: 'Example'},
          {name: 'Example'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-asste-management',
  templateUrl: './asste-management.component.html',
  styleUrls: ['./asste-management.component.css']
})
export class AssteManagementComponent implements OnInit {

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    

    this.dataSource.data = TREE_DATA;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
   }


