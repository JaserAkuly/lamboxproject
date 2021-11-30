
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CollectionService } from '../collection.service';
import { CardI } from '../collection.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../dialog/dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['titleCard','subtitleCard', 'tagsCard', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private cardsService: CollectionService,
    public dialog: MatDialog,
    ) { }


  ngOnInit() {
    this.cardsService
      .getAllCards()
      .subscribe(cards => (this.dataSource.data = cards));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditCard(card: CardI) {
    console.log('Edit card', card);
    this.openDialog(card);
  }

  onDeleteCard(card: CardI) {
    this.cardsService.deleteCardById(card)
  }
    
  onNewCard() {
    this.openDialog();
  }
  
  openDialog(card?: CardI): void {
    const config = {
      data: {
        message: card ? 'Edit card' : 'New card',
        content: card
      }
    };

    const dialogRef = this.dialog.open(DialogComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}