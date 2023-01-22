import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-order-list',
  styleUrls: ['./order-list.component.scss'],
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  A(){
    const counter = 50;

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
      var ordernummer = 11222.44444555666;
      var klantid = 39412;
      var artikelnummer = 188539;
      var kleur = "DONKER ROOD";
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const p5 = document.createElement("p");
      const p6 = document.createElement("p");
      const p7 = document.createElement("p");
      const p8 = document.createElement("p");
      var button = document.createElement('BUTTON');
      var ordernmrtxt = document.createTextNode("ordernummer:");
      var ordernmrval = document.createTextNode(String(ordernummer));
      var klantidtxt = document.createTextNode("klantId:");
      var klantidval = document.createTextNode(String(klantid));
      var artikelnmrtxt = document.createTextNode("artikelnummer:");
      var artikelnmrval = document.createTextNode(String(artikelnummer));
      var kleurtxt = document.createTextNode("kleur:");
      var kleurval = document.createTextNode(String(kleur));
      p1.appendChild(ordernmrtxt);
      p2.appendChild(ordernmrval);
      p3.appendChild(klantidtxt);
      p4.appendChild(klantidval);
      p5.appendChild(artikelnmrtxt);
      p6.appendChild(artikelnmrval);
      p7.appendChild(kleurtxt);
      p8.appendChild(kleurval);
      button.appendChild(p1);
      button.appendChild(p2);
      button.appendChild(p3);
      button.appendChild(p4);
      button.appendChild(p5);
      button.appendChild(p6);
      button.appendChild(p7);
      button.appendChild(p8);

      var link = document.createElement("link");
      link.href = './order-list.component.scss';
       // @ts-ignore

      document.getElementById('B').appendChild(button);
      // @ts-ignore
      document.getElementById('B').appendChild(link);
    }
  }

}
