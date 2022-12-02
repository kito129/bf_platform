import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Rule, RuleInterface} from '../../../../../model/newStudy/rule/rules';

@Component({
  selector: 'app-rule-edit',
  templateUrl: './rule-edit.component.html',
})
export class RuleEditComponent implements OnInit {

  myForm: FormGroup;

  defaultActive = [1]

  ruleForm= {
    name: '',
    rule: []
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      rule: this.fb.array([this.generateNewRule(new Rule('1'))],[
        Validators.required,
      ])
    })

    // this.onChanges();

  }

  get name() {
    return this.myForm.get('name');
  }

  get rules() {
    return this.myForm.get('rule') as FormArray
  }

  getRuleName(i: number) {
    const rule =  this.myForm.get('rule') as FormArray
    return rule.controls[i].get('name')
  }

  addRule() {
    this.rules.push(this.generateNewRule(new Rule(`${this.rules.length+1}`)));
    this.defaultActive.push(1)
  }

  deleteRule(i: number) {
    this.rules.removeAt(i)
    this.defaultActive.pop()
  }

  resetRule(i: number){
    this.defaultActive[i] = 1
    this.rules.controls[i].patchValue(new Rule(`${i+1}`))
  }

  upRule(i: number){
    if(i>0){
      const toCopy = this.rules.controls[i]
      this.rules.insert(i-1, toCopy)
      this.rules.removeAt(i+1)
    }
  }

  downRule(i: number){
    if(i+1<this.rules.length){
      const toCopy = this.generateNewRule(this.rules.controls[i].value)
      this.rules.insert(i+1, toCopy)
      this.rules.removeAt(i)
    }
  }

  duplicateRule(i: number){
    this.rules.push(this.generateNewRule(this.rules.at(i).value));
    this.defaultActive.push(1)
  }

  submitForm(){

    this.ruleForm.name = this.myForm.value.name
    this.ruleForm.rule = this.myForm.value.rule
    console.log(this.ruleForm)
  }

  generateNewRule(temp : Rule){
    return this.fb.group({
      name: this.fb.control(temp.name,
        Validators.required),
      selection: this.fb.group({
        options: this.fb.control(temp.selection.options),
        fixed: this.fb.group({
          fixedOptions:  this.fb.control(temp.selection.fixed.fixedOptions),
          selectionN: this.fb.control(temp.selection.fixed.selectionN),
          selectionId: this.fb.control(temp.selection.fixed.selectionId),
          selectionType: this.fb.control(temp.selection.fixed.selectionType),
        }),
        dynamic: this.fb.group({
          dynamicOptions: this.fb.control(temp.selection.dynamic.dynamicOptions),
          range: this.fb.group({
            max: this.fb.control(temp.selection.dynamic.range.max),
            min: this.fb.control(temp.selection.dynamic.range.min),
          }),
        }),
      }),
      bet: this.fb.group({
        options:  this.fb.control(temp.bet.options),
        place:  this.fb.group({
          type: this.fb.control(temp.bet.place.type),
          fixedPriceValue: this.fb.control(temp.bet.place.fixedPriceValue),
        }),
        stake:  this.fb.group({
          type: this.fb.control(temp.bet.stake.type),
          fixed: this.fb.control(temp.bet.stake.fixed),
          liability: this.fb.control(temp.bet.stake.fixed),
          toWin: this.fb.control(temp.bet.stake.fixed),
        }),
        offset:  this.fb.group({
          type: this.fb.control(temp.bet.offset.type),
          options: this.fb.control(temp.bet.offset.options),
          value: this.fb.control(temp.bet.offset.value),
          optionsStop: this.fb.control(temp.bet.offset.optionsStop),
          valueStop: this.fb.control(temp.bet.offset.valueStop),
        }),
      })
    })
  }

  onChanges(): void {
    this.myForm.get('rule').valueChanges.subscribe(x => {
      console.log(x)
    })
  }

  placeRelativeFactorChange({ target }, ruleId: number){
    console.log(`rule id: ${ruleId}, ${target.value}`)
  }

}
