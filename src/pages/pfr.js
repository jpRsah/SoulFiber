import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap';
import Layout from '../components/layout'
import { consolidateStreamedStyles } from 'styled-components';
export default class Pfr extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pfr: 29354,
      foms: 6884,
      start: '2019-01-01',
      end: '2019-01-01',
      pfrResult: null,
      fomsResult: null,
    };
  }

  render(){


    return(
      <Layout>
        <h1>Расчет пенсионного взноса (ПФР) и обязательного медицинского страхования(ФОМС) для ИП по УСН 6% 2019</h1>

        <Form onSubmit={this.onFormSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="pfr">ПФР</Label>
            <input class="form-control" type="number" name="pfr" id="pfr" value={this.state.pfr} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="foms">ФОМС</Label>
            <input class="form-control" type="number" name="foms" id="foms" value={this.state.foms} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="start">Дата начала</Label>
             <input class="form-control" type="text" name="start" id="start" value={this.state.start} onChange={this.handleChange} /> 
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="end">Дата окончания</Label>
            <input class="form-control" type="text" name="end" id="end" value={this.state.end} onChange={this.handleChange} />
          </FormGroup>

            <Button>Submit</Button> 
        </Form>
          <div>{this.state.pfrResult && <strong>ПФР: {this.state.pfrResult} р</strong>} </div>
          <div>{this.state.fomsResult && <strong>ФОМС: {this.state.fomsResult} р</strong>}</div>
      </Layout>
    );
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  onFormSubmit = (e) => {
      e.preventDefault();
      let fomsResult, pfrResult;

      var daysLag = this.getDiff(this.state.start, this.state.end)
      daysLag++;
      console.log('daysLag', daysLag);

      var startDate = new Date(this.state.start,);
      let currentYear = startDate.getFullYear();
      let nextYear = currentYear++;
      let countDaysOfYear = this.getDiff( `${currentYear}-01-01`, `${nextYear}-01-01`);

      console.log('countDaysOfYear', countDaysOfYear);
      pfrResult = this.state.pfr/countDaysOfYear*daysLag;
      fomsResult = this.state.foms/countDaysOfYear*daysLag;
      this.setState({fomsResult, pfrResult});
  }
  getDiff = (start, end) => {
    console.log(start, end);
    var startDate = new Date(start);
    var endDate = new Date(end);
    return Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
  }
}