import React from "react";
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
const Plays = () => {
return (
<>
<div className="container mx-auto px-4 ">
   <div className="w-full md:flex md:flex-row-reverse">
      <div className="md:w-8/12">
      <h2 className="text-xl font-bold mb-4">Plays in Bhubaneswar</h2>
      <div className="flex flex-wrap">
      <div className="w-1/2  my-3 md:w-1/4">
         <Poster
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
            title="Tvk Cultural presents Ponniyin Selvan"
            subtitle="Tamil ₹300"
            />
      </div>
         <div className="w-1/2  my-3 md:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 md:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2  my-3 md:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
            <div className="w-1/2  my-3 md:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                  title="Tvk Cultural presents Ponniyin Selvan"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 md:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                  title="Tvk Cultural presents Ponniyin Selvan"
                  subtitle="Tamil ₹300"
                  />
            </div>


      </div>
      </div>

       <div className="md:w-1/4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="text-sm">
            <PlaysFilter title="Date" tags={["Today","Tomorrow","Weekend"]}/>
          </div>

       </div>
   </div>
</div>
</>
)
};
export default Plays;
