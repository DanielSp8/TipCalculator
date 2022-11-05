const BackgroundImages = [
  require("./Images/BackgroundImage1.jpg"),
  require("./Images/BackgroundImage2.jpg"),
  require("./Images/BackgroundImage3.jpg"),
  require("./Images/BackgroundImage4.jpg"),
  require("./Images/BackgroundImage5.jpg"),
  require("./Images/BackgroundImage6.jpg"),
  require("./Images/BackgroundImage7.jpg"),
  require("./Images/BackgroundImage8.jpg"),
  require("./Images/BackgroundImage9.jpg"),
  require("./Images/BackgroundImage10.jpg"),
  require("./Images/BackgroundImage11.jpg"),
  require("./Images/BackgroundImage12.jpg"),
  require("./Images/BackgroundImage13.jpg"),
  require("./Images/BackgroundImage14.jpg"),
  require("./Images/BackgroundImage15.jpg"),
  require("./Images/BackgroundImage16.jpg"),
];

const RandomBackImage =
  BackgroundImages[Math.floor(Math.random() * BackgroundImages.length) + 1];

export default RandomBackImage;
