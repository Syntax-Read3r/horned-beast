import { Component } from "react";
import HornedBeast from "../HornedBeast/HornedBeast";

class Main extends Component {
  render() {
    const beasts = [
      {
        _id: 1,
        image_url:
          "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1,
      },
      {
        _id: 2,
        image_url:
          "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        title: "Rhino Family",
        description: "Parent rhino with two babies",
        keyword: "rhino",
        horns: 2,
      },
      {
        _id: 3,
        image_url:
          "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
        title: "Unicorn Head",
        description: "Someone wearing a very silly unicorn head mask",
        keyword: "unicorn",
        horns: 1,
      },
    ];
    return (
      <div className="main">
        {beasts.map((beast) => {
          return (
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;

{
  /* <HornedBeast
          title="Cow"
          imageUrl="https://www.treehugger.com/thmb/Y4DRH31bLTxl1ui3pBTX2r4Ea68=/2225x1347/filters:fill(auto,1)/shaggyhighlandcowlicksnoseoutside-75415e866abf4c0f99ec88c2e5a8cc2d.jpg"
          description="A beautiful creature with many many stomachs."
        />
        <HornedBeast
          title="Dragon"
          imageUrl="https://cdn1.vectorstock.com/i/1000x1000/79/95/happy-dragon-cartoon-waving-hand-vector-21417995.jpg"
          description="A beautiful creature with only one stomach."
        /> */
}
