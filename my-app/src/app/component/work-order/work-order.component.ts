import { Component, OnInit, ViewChild } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css'],
  // template: `<ejs-tab id="element">
  //       <e-tabitems>
  //           <e-tabitem [header]='headerText[0]' [content]="content0"></e-tabitem>
  //           <e-tabitem [header]='headerText[1]' [content]="content1"></e-tabitem>
  //           <e-tabitem [header]='headerText[2]' [content]="content2"></e-tabitem>
  //       </e-tabitems>
  //   </ejs-tab>`
})
export class WorkOrderComponent {
  
  // public headerText: Object = [{ 'text': 'Twitter' }, { 'text': 'Facebook' },{ 'text': 'WhatsApp' }];

  public headerText: Object[]=[
    {text: 'Twitter'},
    {text: 'Facebook'},
    {text: 'Whatsapp'},
  ]

  public content0: string = 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
          'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
          'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
          'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
          'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
          'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
          'search queries per day.';
  
  public content1: string = 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
          'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
          'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s ' +
          'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
          'University. It gradually added support for students at various other universities and later to high-school students.';
  
  public content2: string = 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates ' +
          'under a subscription business model. It uses the Internet to send text messages, images, video, user location and ' +
          'audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
          'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
          'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US6. 9.3 billion.';
}
