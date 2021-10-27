import React from "react";
import ResidentImg from "../assets/mix.jpg";
import "../styles/Resident.css";
import DekilaaImg from "../assets/work_in_progress01.jpg"

function Resident() {
  return (
    <div className="resident">
      <div className="residentTop"
        style={{ backgroundImage: `url(${ResidentImg})` }}
      >
       </div>
      <div className="residents">
        <div >
        <img src={DekilaaImg} />
         <h1>Steve core</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
         incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus.
          Id consectetur purus ut faucibus pulvinar. In metus vulputate eu scelerisque felis imperdiet
           proin fermentum leo. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Feugiat
           Suspendisse interdum consectetur libero id faucibus nisl.  
         Suspendisse interdum consectetur libero id faucibus nisl.
         </p>
        
        </div>
        
      </div>
      <div className="residents">
        <div>
        <img className ="rightImg" src={DekilaaImg} />
         <h1>DekiLaa</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
        </div>
      </div>
      <div className="residents">
        <div>
        <img src={DekilaaImg} />
         <h1>David Popović</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras
          sed felis eget velit aliquet. Aenean et tortor at risus viverra adipiscing at. Mauris phar
          etra et ultrices neque ornare aenean euismod elementum. Risus quis varius quam quisque id.
          Congue quisque egestas diam in arcu cursus euismod quis. Suspendisse potenti nullam a
          c tortor..
         </p>
        </div>
      </div>
      <div className="residents">
        <div>
        <img className ="rightImg" src={DekilaaImg} />
         <h1 className ="h1right">Ćuma</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
        </div>
      </div>
      <div className="residents">
        <div>
        <img src={DekilaaImg} />
         <h1>Gagy</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
         or incididunt ut labore et dolore magna aliqua. In fermentum et sollicitudin ac orc
         i phasellus egestas. Et pharetra pharetra massa massa ultricies mi quis hendrerit.
          Sed libero enim sed faucibus turpis. Nam libero justo laoreet sit. Ac turpis ege
          tas integer eget aliquet nibh praesent tristique. Risus commodo viverra maecenas acc
          umsan lacus vel. Nunc aliquet bibendum enim facilisis gravida. Id neque aliquam vest
          ibulum morbi blandit. Elit duis tristique sollicitudin nibh. 
         Morbi tristique senectus et netus. Gravida in fermentum et sollicitudin ac orci p
         hasellus egestas.
         </p>
        
        </div>
        
      </div>
    </div>
  );
}

export default Resident;
