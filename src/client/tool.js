import React from 'react';
import Footer from './footer';
import './tool.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL : "http://localhost:5000/"
});
const Tool = () => {
  const [domain,setDomain] = useState('');
  const [admedium,setAdmedium] = useState('');
  const [output,setOutput] = useState('');
  const fetchData = async ()=>{
    try{
        const response = await api.get("/");
        console.log(response.data.data.list);
        setList(response.data.data.list);
       }catch(err){}
};    
const [list,setList] = useState([]);
const handleSubmit = async (e)=>{
e.preventDefault();
  try{
    console.log(domain);
   // console.log(email);
    const response =  await api.post("/", {
      domain,
      admedium
    }
    );  
    console.log(response.data.data.list);
    setOutput(response.data.data.list);
    setDomain("");
    fetchData();
  }catch(err){}
};
      useEffect(() => {
      fetchData();
      }, [])
        return(
          <html>
           <div className="wrapper">
            <div class="container">
              <div className="header">
                <h3>Ecommerce Seller Fees Calculator</h3>
              <div class="title-text">
                <h4>Find out how much you can earn by selling on top marketplaces!</h4>
              </div> 
            </div>
  <div className="form-horizontal">
     {/*First Text box*/}
       <div class="row">
        <div class="col-sm-2" > <label for="inputPassword" class="col-sm-2 col-form-label">Category</label></div>
          <div class="col-sm-4" > 
            <select class="form-control" value={domain} onChange={(e)=>setDomain(e.target.value)} id="exampleFormControlSelect1">
              <option >-- Choose a Category --</option>
              <option value={"Animal_&_Pet_Care"}>Animal & Pet Care</option>
              <option value={"Arts_&_Crafts"}>Arts & Crafts</option>
              <option value={"Automobile_&_Parts"}>Automobile & Parts</option>
              <option value={"Beauty_&_Cosmetics"}>Beauty & Cosmetics</option>
              <option value={"Computers_Electronics_Acc"}>Computers, Electronics & Acc.</option>
              <option value={"Fasion_Beverage"}>Fashion & Apparel</option>
              <option value={"Garden_Home_Goods"}>Garden & Home Goods</option>
              <option value={"Health_Fitness"}>Health & Fitness</option>
              <option value={"Jewelery_Accessories"}>Jewelry & Accessories</option>
              <option value={"Media_Entertainment"}>Media & Entertainment</option>
              <option value={"Toys_Games"}>Toys & Games</option>
              <option value={"Travel"}>Travel</option>
            </select>
            </div>
    </div>
  <br/>     
  {/*Second Text box*/}
  <div class="row">
    <div class="col-sm-2" > <label for="inputPassword" class="col-sm-2 col-form-label">Ad&nbsp;medium</label></div>
     <div class="col-sm-4" > 
        <select class="form-control" id="exampleFormControlSelect1" value={admedium} onChange={(e)=>setAdmedium(e.target.value)}>
          <option>-- Choose a Medium --</option>
          <option value="ecommerce">Ecommerce</option>
          <option value="social_media">Social Media</option>
          <option value="email">Email</option>
          <option value="search">Search</option>
          <option value="display_ads">Display Ads</option>
          <option value="tv">Television ads</option>
          <option value="print">Print</option>
          <option value="outdoor">Outdoor</option>
        </select></div>
      <div class="col-sm-1" ><h2 style={{color:'yellow'}}>{output}%</h2>
    </div>
  </div>
  <br/>     
{/*Third Text box*/}
  </div>
  <div class="row">
    <div class="col-sm-2" ></div>
      <div class="col-sm-3" ><button type="button"  onClick = {handleSubmit}  style={{width:'200px'}} class="btn btn-danger">Check</button></div>
</div>
 <br/><br/>  
{/*Table*/}
<div class="table-responsive">
<table class="table table-condensed " style={{border:"1px solid black",backgroundColor:"#fff"}}>
<thead >
<tr style={{height:"40px"}}>
 <th></th>
<th>{'ecommerce' === admedium?<h3 style={{ color: "red"}}>Ecommerce</h3>:'Ecommerce'}</th>
<th>Social Media</th>
<th>Email</th>
<th>Search</th>
<th>Display Ads</th>
<th>Television ads</th>
<th>Print</th>
<th>Outdoor</th>
</tr>
  </thead>
  <tbody>
  <tr>
        <td style={{fontWeight:"bolder"}}>Connversion&nbsp;Rate&nbsp;Calculator</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ROI&nbsp;Calculator</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      </tbody>
  </table>
</div>
  <div class="desc">
<p>*Note: Above calculations are not 100% accurate. These are approximate figures only and may vary based on exact product<br />
weight and packaging dimensions.</p>
</div></div>
        {list &&
             
             list.map((l)=> {
               return(                             
                      <tr key={ list.id }>
                      <td id="td1"> <h3>{ l.search }</h3></td>
                      </tr>
               )
             })
         }
       </div>
       <Footer />
       </html>
    )
}
export default Tool;