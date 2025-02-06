let getNum = document.getElementById("scores");
let leaderBoard = document.getElementById("leaderBoard");
let totalMarks=0;

members=[

    {name: "Khushi Kushwah", marks: 0, rank: 0},
    {name:"Naman jain", marks: 0, rank: 0},
    {name: "Anshul Chaturvedi", marks: 0, rank: 0},
    {name:"Chaitanya Datey", marks: 0, rank: 0},
    {name: "Amrita Maravi", marks: 0, rank: 0},
    {name:"Nalin Dalal", marks: 0, rank: 0},
    {name: "Chirag Tripathi", marks: 0, rank: 0},
    {name:"Ayushman Chouksey", marks: 0, rank: 0},
    {name: "Aashish kumar", marks: 0, rank: 0},
    {name:"Ayush Tiwari", marks: 0, rank: 0},
    {name: "Devesh", marks: 0, rank: 0},
    {name:"Anuj Maurya", marks: 0, rank: 0},
    {name: "Aryan Singh", marks: 0, rank: 0},
    {name:"Chandan Agrawal", marks: 0, rank: 0},
    {name: "Chandan Mehra", marks: 0, rank: 0},
    {name:"Divyansh Vashwakarma", marks: 0, rank: 0},
    {name: "Maithili Tiwari", marks: 0, rank: 0},
    {name:"Bhupendra Chouhan", marks: 0, rank: 0},
    {name: "~ JAI SHREE RAM", marks: 0, rank: 0},
 
]
let totalMembers=getNum.length;
function askScores(){
    for (i in members){
        const all = document.createElement("tr");
        const a = document.createElement("td");
        const b = document.createElement("td");
        const lab = document.createElement("label");
        lab.textContent = members[i].name;
        lab.for=members[i].name;
        const node = document.createElement("input");
        node.id=members[i].name;
        node.type='number';
        node.placeholder=members[i].name;
        node.name=members[i].name;
        a.appendChild(lab)
        b.appendChild(node)
        all.appendChild(a);
        all.appendChild(b);
        getNum.appendChild(all)
    }
}
askScores();

function setVal(){
    let rank=1;
   
    for (i in members){
        if(document.getElementById(members[i].name).value===""){
            members[i].marks=0;
        }
        members[i].marks=(document.getElementById(members[i].name).value);
   
    }
    members.sort((a, b) => b.marks - a.marks);
    for( let i=0; i<members.length; i++){
       
       if(i>0 &&  members[i].marks<members[i-1].marks){
        rank++;
       }
        members[i].rank=rank;
    }
    showMarks();
}

function showMarks(){
    let sno=1;
    totalMarks=document.getElementById("totalMarks").value;
    for (i in members){
        const all = document.createElement("tr");
        const a = document.createElement("td");
        const b = document.createElement("td");
        const c = document.createElement("td");
        const d = document.createElement("td");
        const e = document.createElement("td");
        a.textContent= sno++;
        b.textContent= members[i].name;
        c.textContent= members[i].rank;
        d.textContent=members[i].marks;
        e.textContent=totalMarks;
        all.appendChild(a);
        all.appendChild(b);
        all.appendChild(c);
        all.appendChild(d);
        all.appendChild(e);
        leaderBoard.appendChild(all)
        
    }
}
