import React, { Component } from 'react';


let fields = {
    
    selectField: [
      {value: '0', display: '30 min'},
      {value: '1', display: '1 hour'},
      {value: '2', display: '45 min'},
      {value: '3', display: '20 min'}
    ], 
    selectField2: [
        {value: '0', display: '10 A.M'},
        {value: '1', display: '11 A.M'},
        {value: '2', display: '12 P.M'},
        {value: '3', display: '2  P.M'}  
    ],
    selectField3: [
        {value: '0', display: 'Neha'},
        {value: '1', display: 'Smith'},
        {value: '2', display: 'Mike'},
        {value: '3', display: 'Tena'}  
    ]
  }
class TutorRequestForm extends Component {
    constructor(props) {
        super(props)
      }
      state = {
        schema: {
          'selectField': {
            'value': ''
          },
          'selectField2': {
              'value':''
          },
          'selectField3': {
            'value': ''
          },
          'num': {
            'value': ''
          },
          'num': {
            'value': ''
          },
          'num': {
            'value': ''
          },
          'num': {
            'value': ''
          },
          'num': {
            'value': ''
          },
          'date': {
            'value': moment().format('YYYY-MM-DD')
          }
        }
      }
    
      handleChange = fields => {
        console.log(fields)
        this.setState({ schema: fields })
      }

      render() {
        

        return (
            <FormGroup
              changeCallback={this.handleChange}
              schema={this.state.schema}>
      
            <fieldset className={style.row}>
                <legend><span>Tutoring Request</span></legend>
                <div className={style['fields']}>
                  <SelectField name='selectField' options={fields.selectField} valueProp='value' displayProp='display' optClass={style.field} />
                  <SelectField name='selectField2' options={fields.selectField} valueProp='value' displayProp='display' optClass={style.field} />
                  <SelectField name='selectField3' options={fields.selectField} valueProp='value' displayProp='display' optClass={style.field} />
                  <Input name='num' type='text' placeholder='Subject' optClass={style.field} />
                  <Input name='num' type='text' placeholder='Topic' optClass={style.field} />
                  <Input name='num' type='text' placeholder='Context' optClass={style.field} />
                  <Input name='num' type='text' placeholder='Tasks Completed' optClass={style.field} />
                  <Input name='num' type='text' placeholder='Questions' optClass={style.field} />
                  <DatePicker name='date' optClass={style.field} />
                  <Button variant="primary" type="submit">
                                                           Submit
                  </Button>
                </div>
            </fieldset>
              
      </FormGroup>
    )
  }
}
export default TutorRequestForm;