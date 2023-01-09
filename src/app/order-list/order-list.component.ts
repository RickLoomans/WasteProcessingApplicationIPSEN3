import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-order-list',
  styleUrls: ['./order-list.component.scss'],
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  A(){
    const counter = 5;

    // // var myDiv = document.getElementById("B");
    // var div = document.querySelector('B[w3-include-html]');


    // document.div.appendChild(button);
    // // myDiv.appendChild(button);
    // var name = "12345678";
    // // @ts-ignore
    // document.getElementById('test1').innerHTML = name;
    // // alert("hoi?")

    // var codeBlock = '<button>' +
    //   '<p>This is a heading</p>' +
    //   '<p>This is a paragraph of text.</p>' +
    //   '<p>Note: If you don\'t escape "quotes" properly, it will not work.</p>' +
    //   '</button>';

// Inserting the code block to wrapper element
    for (let i = 0; i < counter; i++) {
      var button = document.createElement('BUTTON');
      var text = document.createTextNode("button" + i);
      button.appendChild(text);
       // @ts-ignore

      document.getElementById('B').appendChild(button);
    }
  }

}
