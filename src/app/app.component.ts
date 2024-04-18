import { Component, VERSION, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  disableCheckbox = false;
  count = 1;

  // Sample data for the table
  tableData = [
    { id: 0, name: 'Item 0', isChecked: false },
    { id: 1, name: 'Item 1', isChecked: false },
    { id: 2, name: 'Item 2', isChecked: false },
    { id: 3, name: 'Item 3', isChecked: false },
    { id: 4, name: 'Item 4', isChecked: false },
    { id: 5, name: 'Item 5', isChecked: false },
    // Add more items as needed
  ];
  @ViewChildren('checkboxes') checkboxes: QueryList<HTMLInputElement>;

  chkcontrol(j: number) {
    let total = 0;
    const checkboxes = document.getElementsByName('ckb');
    for (let i = 0; i < checkboxes.length; i++) {
      if ((checkboxes[i] as HTMLInputElement).checked) {
        total++;
      }
      if (total > 3) {
        alert('Please select only three checkboxes.');
        (checkboxes[j] as HTMLInputElement).checked = false;
        return false;
      }
    }
  }
  chkcontrolV2(checkboxes: HTMLInputElement) {
    this.count++;
    if (this.count % 3 != 0) {
      checkboxes.checked = false;
    }
    //const checkboxes = document.getElementsByName('ckb');
  }
}
