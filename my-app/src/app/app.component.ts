import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<ejs-tab> </ejs-tab>`
})
export class AppComponent {
  title = 'my-app';
  ngOnInit() {
    //Toggle Click Function
$('#sidebarCollapse').on('click', function() {
$('#sidebar, #content').toggleClass('active');
});
}
  

}
import * as $ from 'jquery';
// export class AppComponent {

//    ngOnInit() {
//                 //Toggle Click Function
//     $('#sidebarCollapse').on('click', function() {
//       $('#sidebar, #content').toggleClass('active');
//     });
//   }
  
// }