import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/form';

const Checkout =(props)=>{
    return(
        <body>
            <h1 style={{margin:'1%', padding:'1%'}}>Responsive Checkout form</h1>
            <p style={{marginLeft:'2%', paddingLeft:'2%'}}>resize the broswer window</p>
            <div className="row">
                <div className="col-75">
                    <div className="container" style={{margin:'2%', padding:'2%', float:'left'}}>
                        <Form />
                    </div>
                </div>
                <div className="col-25">
                    <div className="container" style={{padding:'2%'}}>
                        <h4>Cart<span className="price" style={{color:'black'}}>
                        <i class="fa fa-shopping-cart"></i>
                        <b>4</b>
                        </span>
                        </h4>
                        <p><a href="/">product1</a><spam className="price">$15</spam></p>
                        <p><a href="/">product1</a><spam className="price">$6</spam></p>
                        <p><a href="/">product1</a><spam className="price">$3</spam></p>
                        <p><a href="/">product1</a><spam className="price">$1</spam></p>
                        <hr></hr>
                        <p>Total<spam className="price" style={{color:'black'}}></spam></p>
                     </div> 
                </div>
            </div>
        </body>
    )
}
export default Checkout;