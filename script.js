const colors = [
  "#ff6b6b","#ff8fab","#c77dff",
  "#4d96ff","#6bcB77","#ffb703"
];

let autoInterval = null;

function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function createFlower(x,y){

  const size = 70 + Math.random()*30;
  const petalColor = random(colors);

  const flower = document.createElement("div");
  flower.className="flower";
  flower.style.left=(x-size/2)+"px";
  flower.style.top=(y-size)+"px";
  flower.style.width=size+"px";
  flower.style.height=size+40+"px";

  const stem=document.createElement("div");
  stem.className="stem";
  flower.appendChild(stem);

  let petals=[];

  // Layered realistic petals
  for(let i=0;i<10;i++){
    let p=document.createElement("div");
    p.className="petal";
    p.style.width=size/2+"px";
    p.style.height=size/1.2+"px";
    p.style.background=petalColor;
    p.style.borderRadius="50% 50% 40% 40%";
    p.style.left=size/4+"px";
    p.style.top="5px";
    p.style.transform=`rotate(${i*36}deg)`;
    flower.appendChild(p);
    petals.push(p);
  }

  const center=document.createElement("div");
  center.className="center";
  center.style.width=size/3+"px";
  center.style.height=size/3+"px";
  center.style.left=size/3+"px";
  center.style.top=size/2.5+"px";
  flower.appendChild(center);

  document.body.appendChild(flower);

  // Falling petals
  setTimeout(()=>{
    petals.forEach(p=>{
      const clone=p.cloneNode(true);
      clone.classList.add("falling");
      clone.style.position="absolute";
      clone.style.left=p.offsetLeft+"px";
      clone.style.top=p.offsetTop+"px";
      clone.style.setProperty("--drift",(Math.random()*120-60)+"px");
      flower.appendChild(clone);
    });
  },3000);
}

document.addEventListener("click",(e)=>{
  createFlower(e.clientX,e.clientY);
});

// Auto Bloom
document.getElementById("autoBtn").onclick=function(){
  if(autoInterval){
    clearInterval(autoInterval);
    autoInterval=null;
    this.textContent="Auto Bloom 🌷";
  }else{
    autoInterval=setInterval(()=>{
      const x=Math.random()*window.innerWidth;
      const y=Math.random()*window.innerHeight;
      createFlower(x,y);
    },600);
    this.textContent="Stop 🌸";
  }
};

// Reset
document.getElementById("resetBtn").onclick=function(){
  document.querySelectorAll(".flower").forEach(f=>f.remove());
};
