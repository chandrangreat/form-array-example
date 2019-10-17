import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormArrayExample';

  constructor(public fb: FormBuilder) {}

  get name() {
    return this.Form.get('name');
  }
  get id() {
    return this.Form.get('id');
  }
  get tags() {
    return this.Form.get('tags') as FormArray;
  }

  get status() {
    return this.parameters.get('status');
  }

  get parameters() {
    return this.Form.get('parameters') as FormArray;
  }

  get parameterName() {
    return this.parameters.get('parameterName');
  }
  get default() {
    return this.parameters.get('default');
  }
  get required() {
    return this.parameters.get('required');
  }
  get description() {
    return this.parameters.get('description');
  }

  get createParameters() {
    return this.Form.get('params');
  }


  Form = this.fb.group({
    id: [''],
    name: [''],
    parameters: this.fb.array([
      // this.createParameter()
    ]),

    tags: this.fb.array([]),
    // parameters:this.fb.array([])
  });

    createParameter(): FormGroup {
    return this.fb.group({
      parameterName: [''],
      default: [''],
      required: [''],
      description: ['']
    });
  }

    fillParameter(parameterNames, defaultvalue, requiredValue, descriptionValue): FormGroup {
    return this.fb.group({
      parameterName: parameterNames,
      default: defaultvalue,
      required: requiredValue,
      description: descriptionValue
    });

  }


  onSubmit(formData) {
      console.log(formData);
  }

  addTags() {
    this.tags.push(this.fb.control(''));
  }
  addParameters() {
    this.parameters.push(this.createParameter());
  }

}
