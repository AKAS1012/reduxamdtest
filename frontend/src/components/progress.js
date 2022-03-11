const Progress = (props) =>{
    var i = 0;
    function move(){
        if (i==0){
            i=1;
            var elem = document.getElementById('#myBar');
            var width = 1;
            var id = setInterval(frame, 10)
            function frame(){
                if (width>=100){
                    clearInterval(id);
                    i=0
                }
                else{
                    width ++;
                    elem.style.width = width+"%";
                }
            }
        }
    }
    return(
        <>
        <div id="myProgess" style={{width:'100%', backgroundColor:'gray'}}>
            <div id="mybar" style={{width:'1%', height:'30px',backgroundColor:'green'}}>
                Help
            </div>
        </div>
        <div>
            <label for="mycheck" >checked:</label>
            <input type="checkbox" id="mycheck" onClick="myfunction()"></input>
            <p id="text" ></p>
        </div>
        </>
    )
}

export default Progress;