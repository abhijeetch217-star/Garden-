const colors = [
  "#ff6b6b",
  "#ff8fab",
  "#c77dff",
  "#4d96ff",
  "#6bcB77",
  "#ffb703",
  "#ff4d6d"
];

function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function createFlower(x,y){

  const size = 60 + Math.random()*40;
  const type = Math.floor(Math.random()*5);
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

  // 🌼 Daisy
  if(type===0){
    for(let i=0;i<8;i++){
      let p=document.createElement("div");
      p.className="petal";
      p.style.width=size/3+"px";
      p.style.height=size/1.4+"px";
      p.style.background=petalColor;
      p.style.borderRadius="50%";
      p.style.left=size/3+"px";
      p.style.top="10px";
      p.style.transform=`rotate(${i*45}deg)`;
      flower.appendChild(p);
      petals.push(p);
    }
  }

  // 🌹 Rose (layered look)
  if(type===1){
    for(let i=0;i<3;i++){
      let p=document.createElement("div");
      p.className="petal";
      p.style.width=size/1.5-i*12+"px";
      p.style.height=size/1.5-i*12+"px";
      p.style.background=petalColor;
      p.style.borderRadius="50%";
      p.style.left=size/4+"px";
      p.style.top=size/4+"px";
      flower.appendChild(p);
      petals.push(p);
    }
  }

  // 🌷 Tulip
  if(type===2){
    for(let i=0;i<3;i++){
      let p=document.createElement("div");
      p.className="petal";
      p.style.width=size/2+"px";
      p.style.height=size/1.3+"px";
      p.style.background=petalColor;
      p.style.borderRadius="50% 50% 0 0";
      p.style.left=size/4+"px";
      p.style.top="5px";
      p.style.transform=`rotate(${(i-1)*20}deg)`;
      flower.appendChild(p);
      petals.push(p);
    }
  }

  // 🌺 Round bloom
  if(type===3){
    for(let i=0;i<6;i++){
      let p=document.createElement("div");
      p.className="petal";
      p.style.width=size/2+"px";
      p.style.height=size/2+"px";
      p.style.background=petalColor;
      p.style.borderRadius="50%";
      p.style.left=size/4+"px";
      p.style.top=size/4+"px";
      p.style.transform=`rotate(${i*60}deg)`;
      flower.appendChild(p);
      petals.push(p);
    }
  }

  // 🌻 Sunflower
  if(type===4){
    for(let i=0;i<10;i++){
      let p=document.createElement("div");
      p.className="petal";
      p.style.width=size/4+"px";
      p.style.height=size/1.5+"px";
      p.style.background="#ffb703";
      p.style.borderRadius="50%";
      p.style.left=size/3+"px";
      p.style.top="10px";
      p.style.transform=`rotate(${i*36}deg)`;
      flower.appendChild(p);
      petals.push(p);
    }
  }

  const center=document.createElement("div");
  center.className="center";
  center.style.width=size/4+"px";
  center.style.height=size/4+"px";
  center.style.background="#5c4033";
  center.style.left=size/2.8+"px";
  center.style.top=size/2.5+"px";
  flower.appendChild(center);

  document.body.appendChild(flower);

  // 🌸 Petal falling
  setTimeout(()=>{
    petals.forEach(p=>{
      const clone=p.cloneNode(true);
      clone.classList.add("falling");
      clone.style.left=p.offsetLeft+"px";
      clone.style.top=p.offsetTop+"px";
      clone.style.setProperty("--drift",(Math.random()*100-50)+"px");
      flower.appendChild(clone);
    });
  },2500);
}

document.addEventListener("click",(e)=>{
  createFlower(e.clientX,e.clientY);
});
