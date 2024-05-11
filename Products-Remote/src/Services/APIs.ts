import axios, { AxiosResponse } from "axios";
export const GetAllProducts = async () => {
  const response: AxiosResponse = await axios.get("https://my.api.mockaroo.com/e_bikes?key=" + import.meta.env.VITE_Mock_URL)
  const responseData: Product[] = response.data;
  return responseData
}
export const GetProductDetail = async (PId:string) => {
debugger
  const response: AxiosResponse = await axios.get(("https://my.api.mockaroo.com/e_bikes/" + PId + ".json?key=" + import.meta.env.VITE_Mock_URL));
//   const responseData: Product = {
//     id: parseInt(PId),
//     BrandName: "HAIBIKE",
//     Name: "S 10 Trapez grau",
//     Price: 4999,
//     discount: 50,
//     image: "1376907.jpg",
//     detail: "Description\r\nHAIBIKE Trekking S 10 trapeze gray (titanium/lava matt)\r\nDue to bottlenecks and delays in global supply chains, it may happen that the manufacturer has occasionally replaced components of the original specifications with components of at least the same or even higher quality. The bike delivered may differ from the illustrations in individual cases.\r\n\r\nSimply get in and go: Haibike's new Trekking 10 impresses with maximum comfort, because the particularly low entry allows you to get on and off quickly and safely. With this well-equipped and StVZO-compliant trekking eBike you can ride relaxed to work, your after-work ride or go on a multi-day trip with panniers. The new and even more efficient Bosch Performance CX Gen 4 motor takes you easily over any incline and thanks to the Modular Rail System you can increase your range with an additional battery or attach additional accessories such as a drinking bottle or a frame bag.\r\n\r\nDetails\r\n\r\nBosch Performance Speed ??Gen.4 motor with 250 watts\r\nBosch Power Tube battery with 625 Wh\r\nSchwalbe Super Moto X tires\r\nTektro HD-E715 hydraulic disc brakes\r\nS-Pedelec 45 km/h"
// };
const responseData: Product = response.data;
  return responseData;
}