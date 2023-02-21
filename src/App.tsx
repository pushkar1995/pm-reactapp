import React, { useState, useEffect } from 'react';
import MainHeader from './Components/MainHeader'
import SubHeader from './Components/SubHeader';
import { PageEnum } from './Components/pmapp.types'
import Grid from './Pages/Grid'
import Timeline from './Pages/Timeline';

function App() {
  const [shownPage, setShownPage] = useState(PageEnum.grid)

  const showGridPageHnd = () => {
      setShownPage(PageEnum.grid)
  } 

  const showTimelinePageHnd = () => {
      setShownPage(PageEnum.timeline)
  }
 
  return (
    <div className='bg-grey-light'>
      <MainHeader />
      <SubHeader
          onClickShowGridPage = {showGridPageHnd}
          onClickShowTimelinePage = {showTimelinePageHnd}
      />
     <section>
      {shownPage === PageEnum.grid && (
        <div className="">
          <Grid />
        </div>
      )}
      {shownPage === PageEnum.timeline && (
        <div className="mx-10 col-span-2 bg-white rounded overflow-hidden shadow">
          <Timeline />
        </div>
      )}
     </section>
    </div>
  );
}

export default App;
