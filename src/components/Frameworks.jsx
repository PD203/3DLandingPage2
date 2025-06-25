import { IconCloud } from "./IconCloud";


const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--VpV6regq6ZzNgaA9v8fyudhi3OM46Fang&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnu2XeHSDQvlgLec27HgH2es-r8Rc9twfkQ&s",
  "https://c4.wallpaperflare.com/wallpaper/599/333/97/planets-galaxy-cosmos-mars-wallpaper-preview.jpg",
  "https://media.istockphoto.com/id/1266190268/photo/planet-mars-galaxy.jpg?s=612x612&w=0&k=20&c=KHGOcoGrshfwsmfQw7gnSdYSbHz_NpGWEzcvjkOxZVo=",
  "https://live.staticflickr.com/4262/35733486641_5ac0afe4b2_b.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4yAqAgHuQ8Kp3FKsJJ4yilsS9ZiKr1SLQrBc5hLxQofJffhiw1K8GoCzrvyOaZgp6ZI&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7MpxQJkcH5f-khzm5NcpmpRR6zpm1rrn4Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEwy2S-VM7mUHTWDQxSAgH5O7IBkN-NvOdA&s",
  "https://c4.wallpaperflare.com/wallpaper/1003/912/894/render-space-planet-moon-wallpaper-thumb.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnU3D1v5Ob4A5rSkq8-xr1pBJNlgk9DrgBpQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwOkZetFzMyEdm5fngQItU5CKRgsiXsymJg&s",
  "https://hips.hearstapps.com/hmg-prod/images/black-hole-seen-from-a-planet-illustration-royalty-free-illustration-1736172910.pjpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2NddFEgC5W3aBlJSJyQqsf54vOtzJw94c9LsGL7f2J8whC_WgaPu01bThI4bu7ckkQ0&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQry-DKTWnR3HWTl99tg46Y_-3iBmuqHHfDnA&s",
];

export function Frameworks() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
