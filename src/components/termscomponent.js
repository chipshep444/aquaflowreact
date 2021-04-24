import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import ScheduleModal from './modal/schedulecomponent';

function Terms() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Termscontent />
            <Footer />
        </div>
    );
}


function Termscontent() {
    return (
        <div>
  <div id="mainTextblock" className="row">
    <div className="container">
      <div className="row">
        <div id="bodycards" className="container">
          <div className="row">
            <div id="mainTextblock" className="card text-center">
              <div className="card-body">
                <h1>Terms of Use</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="mcontent3" className="row">
    <div className="container">
      <div className="row">
        <div id="bodycards" className="container">
          <div className="row">
            <div className="card-deck">
              <div id="mcontent3b" className="card">
                <div className="card-body">
                <Link to="/"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/plumber640.jpg" width={450} alt="AquaFlow Plumbing" /></Link>
                  <br />
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus nibh vel aliquam. Pellentesque lacinia pharetra enim in fermentum. Nam cursus velit sed venenatis viverra. Fusce lectus risus, fermentum a diam in, facilisis suscipit nulla. Duis nibh tellus, semper vitae finibus at, vestibulum vel magna. Curabitur imperdiet lectus ac leo congue mollis. Proin sit amet imperdiet est, quis fringilla mauris. Maecenas pharetra a neque nec ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum orci orci, suscipit sollicitudin lorem ac, malesuada eleifend justo. Sed mauris est, viverra quis egestas id, scelerisque ac risus. Nunc orci nibh, sagittis sed bibendum at, facilisis eget augue. Suspendisse venenatis, dui vel auctor malesuada, nisl diam tincidunt ipsum, at tristique sapien turpis at metus.</p>
                  <p>Proin dapibus ullamcorper suscipit. Proin iaculis hendrerit est, vitae egestas orci convallis nec. Fusce faucibus auctor mauris, eu rhoncus augue iaculis eu. Donec vitae pellentesque erat, ut mollis lorem. Morbi eros urna, commodo ornare velit in, mattis volutpat odio. Aliquam erat volutpat. Etiam in fermentum ligula, ut molestie nibh.</p>
                  <p>Aenean condimentum, est vitae viverra consequat, dui mi hendrerit felis, nec dignissim nibh mi at velit. Vivamus mattis neque blandit nibh suscipit pellentesque. Nunc at risus metus. Suspendisse nisl leo, bibendum eu augue et, consectetur aliquam massa. Sed pharetra quam at consequat condimentum. Praesent pretium augue urna, a aliquam urna pulvinar ut. Phasellus non sollicitudin erat. Etiam mollis mauris nec tempor lacinia. Sed at ligula vitae justo vehicula malesuada.</p>
                  <p>Vestibulum lacinia volutpat convallis. Praesent sit amet tortor a justo tincidunt tincidunt. Fusce ornare ligula ac eros aliquam venenatis. Fusce ac porta purus, in maximus ligula. Nam iaculis, neque et lobortis tempus, ligula quam euismod ligula, vitae tempus est orci nec erat. Nullam rutrum elit quis ullamcorper eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pellentesque arcu sit amet magna consectetur tempor. Nam eros risus, volutpat eu convallis eget, fermentum a augue. Vivamus ac metus ultrices, tempus nisi a, viverra nisl.</p>
                  <p>Sed eget arcu maximus, commodo mi nec, lacinia leo. Donec sollicitudin feugiat pellentesque. Etiam tristique mattis risus, vitae bibendum urna tincidunt quis. In hac habitasse platea dictumst. Phasellus tincidunt nisl sed nibh suscipit, ut mollis nisi laoreet. Nulla porta ante ac imperdiet condimentum. Donec metus leo, tempus in tempus sit amet, convallis vel velit. Vestibulum id magna rhoncus ex porttitor elementum. Cras vel porttitor ex, nec mollis urna. Pellentesque sed sagittis velit, nec consectetur mauris. Quisque tellus purus, cursus in volutpat non, cursus ac metus. Proin et orci non risus vestibulum maximus. Donec vitae risus eget eros eleifend vestibulum.</p>
                  <p className="font-weight-bold">Have a Plumbing problem that needs to be addressed immediately or need the services of a professional Orlando, FL Contractor you can count on? Contact AquaFlow Plumbing and Drain Cleaning today at 407-444-8888.</p>
                  <div id="freeestimate3">
                      <ScheduleModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default Terms;