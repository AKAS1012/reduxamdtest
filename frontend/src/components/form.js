import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () =>{
    return(
        <form >
        <div className="row" style={{border:'2px solid black',marginLeft:'30%',marginTop:'15px',width:'50%'}}>
            <div className="col-50"></div>
            <h3>billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i>Full Name</label>
            <input type="text" className="form-control" placeholder="john" id="fname"></input>
            <label for="email"><i className="fa fa-envelope"></i>Email</label>
             <input type="email" className="form-control" placeholder='nidec@gamil.com' id='email'></input>
             <label for="adr"><i className="fa fa-address-card-o"></i>Address</label>
             <input type="address" className="form-control" placeholder="5 wb 12 street" id="address" name="address"></input>
             <label for="city"><i className="fa fa-institution"></i>City</label>
             <input type="text" className="form-control" id="city" placeholder="city"></input>
             <div className="row">
                 <div className="col-50">
                     <label for='state'>State</label>
                     <input type="text" id="state" className="form-control" name="state" placeholder="NY"></input >
                     <div className="col-50">
                         <label for="zip">Zip</label>
                         <input type='text' id="zip" className="form-control" name="zip" placeholder="101010"></input>
                     </div>
                 </div>
            </div>
            <div className="col-50">
                <h3>payment</h3>
                <label for="fname" >Accepted Card</label>
                <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{color:'blue'}}></i>
                    <i class="fa fa-cc-amex" style={{color:'navy'}}></i>
                    <i className="fa fa-cc-mastercard" style={{color:'red'}}></i>
                    <i className="fa fa-cc-discover" style={{color:'orange'}}></i>  
                </div>
                <label for="card">Name of card</label>
                <input type="text" id="cname" className="form-control" name="cardname" placeholder="jone more"></input>
                <label for="ccnum">credit card number</label>
                <input type="text" id="ccnum" className="form-control" name="credit card number" placeholder=""></input>
                <label for="expmonth">Exprire months</label>
                <input type="text" id= "expmonths" className="form-control" placeholder="september" name="expmonths"></input>
                <div className="row">
                    <div className="col-50">
                        <label for="expyear">Expire Year</label>
                        <input type="text" className="form-control" id="expyear" placeholder="1990" name="expyear"></input>
                    </div>
                    <div col-50>
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" className="form-control" name="cvv" placeholder="134"></input>
                    </div>
                </div>
            </div>
        </div>
        {/* <label><input type="checkbox" checked="checked" >shipping address same as billing</input></label> */}
        <div>
            <button className="btn btn-primary" style={{width:'50%'}}>Submit</button>
        </div>
    </form>
    )
}
export default Form;