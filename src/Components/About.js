import React , {useState} from 'react';

export default function About() {
     const [Style, setStyle] = useState( {
        color:'black',
        backgroundColor: 'white'
    });
    const [btnstate, setbtnstate] = useState("Enable Dark Mode");
   const toggleChange = ()=>{
        console.log("trigger");
    if (Style.color === 'black'){
        setStyle({
            color: 'white',
            backgroundColor: 'black',
            border: "2px soild white"
        })
        setbtnstate("Disable Dark Mode");
    }
    else {
        setStyle({
            color:'black',
            backgroundColor: 'white'
        })
        setbtnstate("Enable Dark Mode");
    }
   }
  return (
    <div className='container my-3' style={Style}>
        <h1>About Us</h1>
            <div id="accordion" style={Style}>
        <div className="card">
            <div className="card-header" id="headingOne" style={Style}>
            <h5 className="mb-0">
                <button className="btn btn-link" style={Style} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                </button>
            </h5>
            </div>

            <div id="collapseOne" className="collapse show" style={Style} aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingTwo" style={Style}>
            <h5 className="mb-0">
            <button className="btn btn-link" style={Style} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #2
                </button>
            </h5>
            </div>
            <div id="collapseTwo" style={Style} className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingThree" style={Style}>
            <h5 className="mb-0">
            <button className="btn btn-link" style={Style} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 Collapsible Group Item #3
                </button>
            </h5>
            </div>
            <div id="collapseThree" className="collapse show" style={Style} aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-3">
            <div class="form-check form-switch">
             <input class="form-check-input" type="checkbox" onClick={toggleChange} role="switch" id="flexSwitchCheckDefault"/>
             <label class="form-check-label" for="flexSwitchCheckDefault">{btnstate}</label>
            </div>
        </div>
    </div>
  );
}
