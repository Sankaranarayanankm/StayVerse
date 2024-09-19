import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://scontent.fcok15-1.fna.fbcdn.net/v/t39.30808-6/241997372_4481244691896981_8440088308445881770_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e_yYOod7NokQ7kNvgF5ebfG&_nc_ht=scontent.fcok15-1.fna&_nc_gid=ABm8FG2TQWVudAyLoYnpJy6&oh=00_AYDszIQnIHGUpP0TFiZMqVYSPB-1v448mnK61g9skV32Aw&oe=66F16BD7"
          title="Cozy Cottage"
          description="Enjoy a relaxing weekend in this quiet cottage"
          price="$120/night"
        />
        <Card
          src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-6f3a0f5/www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Sleek-and-transitional-modern-apartment-design-1024x727.jpg"
          title="Modern Apartment"
          description="Stylish city apartment with great amenities"
          price="$200/night"
        />
        <Card
          src="https://hospitable.com/wp-content/uploads/2022/08/best-place-to-buy-a-beach-house-1024x612.jpg"
          title="Beach House"
          description="Wake up to the sound of the waves at this beachfront property"
          price="$350/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://www.mountainzone.com/wp-content/uploads/2016/12/blue-sky-cabins-933x700.jpg"
          title="Mountain Cabin"
          description="Rustic cabin with stunning mountain views"
          price="$150/night"
        />
        <Card
          src="https://www.thepinnaclelist.com/wp-content/uploads/2016/01/01-Roca-Llisa-Luxury-Villa-Ibiza-Balearic-Islands-Spain-1024x683.jpg"
          title="Luxury Villa"
          description="Experience a luxurious stay at this grand villa"
          price="$500/night"
        />
        <Card
          src="https://img.freepik.com/premium-photo/urban-loft-style-apartment-interior-inspiration-interior-design_198067-7847.jpg?w=900"
          title="Urban Loft"
          description="Chic loft in the heart of downtown"
          price="$220/night"
        />
      </div>
    </div>
  );
};

export default Home;
