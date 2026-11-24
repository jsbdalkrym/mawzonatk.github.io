/* ===== بيانات الجامعات ===== */
const S='الثانوية',Q='القدرات',T='التحصيلي',E='STEP';
const p=(s,q,t,e)=>[[S,s],[Q,q],[T,t],[E,e]].filter(x=>x[1]).map(([label,weight])=>({label,weight}));
const L=(name,parts)=>({name,parts});
const G=(name,...children)=>({name,children});
const std=p(30,30,40);
const unis=[
  L('جامعة الملك سعود',std),
  L('جامعة الملك فهد للبترول والمعادن',p(10,50,40)),
  L('جامعة الإمام محمد بن سعود الإسلامية',std),
  L('جامعة الملك عبدالعزيز',p(30,30,30,10)),
  L('جامعة أم القرى',p(40,30,30)),
  G('الجامعة الإسلامية',L('كليات نظرية',p(50,50)),L('كليات علمية',std)),
  G('جامعة الملك خالد',L('الصحية والهندسة والحاسب',p(30,30,35,5)),L('اللغات والترجمة',p(30,30,25,15)),L('بقية الكليات',std)),
  G('جامعة الأميرة نورة بنت عبدالرحمن',L('الصحية والعلمية والإنسانية',std),L('اللغات',p(50,15,15,20))),
  G('جامعة القصيم',
    {...G('بنات',L('جميع التخصصات',std)),color:'#C45EB5'},
    {...G('أولاد',L('الصحية والهندسة والحاسب والعلوم',std),L('بقية التخصصات',p(50,50))),color:'#005EB5'}),
  L('جامعة طيبة',std),
  G('جامعة الجوف',L('العلمية والهندسية والصحية والأعمال',std),L('النظرية والإنسانية',p(50,50))),
  L('جامعة تبوك',std),
  L('جامعة الإمام عبدالرحمن بن فيصل',std),
  L('جامعة الأمير سطام بن عبدالعزيز',std),
  L('جامعة شقراء',std)
];

/* ===== شروط الكليات العسكرية ===== */
const SA=['🇸🇦','سعودي الأصل والمنشأ، وفق الاستثناءات النظامية.'],
  GRAD=['🎓','خريج الثانوية للعام نفسه، انتظام نهاري.'],
  AGE=['🎂','العمر من 17 إلى 22 سنة.'],
  REP=['🤝','حسن الأخلاق والسمعة.'],
  STEP='أداء اختبار الكفايات STEP.';
const ac=(a,b,c,s)=>[['📚',`الثانوية: ${a}% فأعلى.`],['🧠',`القدرات: ${b}% فأعلى.`],['📝',`التحصيلي: ${c}% فأعلى.`],['🌐',s]];
const mil=[
  ...['الملك عبدالعزيز الحربية','الملك فيصل الجوية','الملك فهد البحرية','الملك عبدالله للدفاع الجوي'].map(n=>({name:'كلية '+n,secs:[
    ['الشروط العامة',[['🇸🇦','سعودي الأصل والمنشأ والولادة، وفق الاستثناءات النظامية.'],['🤝','حسن السيرة والسلوك.'],['💍','غير متزوج.'],GRAD,['🔬','تخصص علوم طبيعية.'],AGE,['🩺','اجتياز الفحص الطبي والمقابلة واللياقة البدنية.']]],
    ['الشروط الأكاديمية',ac(80,60,60,STEP)],
    ['الطول والوزن',[['📏','الطول: 165–188 سم.'],['⚖️','الوزن: 52–95 كجم.']]]]})),
  {name:'كلية الملك خالد العسكرية',secs:[
    ['الشروط العامة',[SA,REP,['💍','غير متزوج بأجنبية.'],GRAD,AGE,['🗣️','اجتياز المقابلة الشخصية والفحص الطبي.'],['🏃','اجتياز اللياقة البدنية والتزكية الأمنية.']]],
    ['الشروط الأكاديمية',ac(80,65,60,STEP)],
    ['الطول والوزن',[['📏','الحد الأدنى للطول: 165 سم.'],['⚖️','الوزن متناسب مع الطول.']]]]},
  {name:'كلية الملك فهد الأمنية',secs:[
    ['الشروط العامة',[SA,REP,['💍','غير متزوج من أجنبية.'],GRAD,AGE,['🩺','اجتياز الفحص الطبي والمقابلة واللياقة البدنية.']]],
    ['الشروط الأكاديمية',ac(80,70,65,'اختبار STEP، ويحدد موعده من الجهة.')],
    ['الطول والوزن',[['📏','تناسب الطول مع الوزن.'],['⚖️','مؤشر كتلة الجسم مناسب للقبول.']]]]}
];

/* ===== النصوص القانونية ===== */
const discBody=[
  'موقع موزونتك منصة مستقلة تهدف إلى مساعدة الطلاب والطالبات على حساب النسبة الموزونة وفقًا للمعادلات المتاحة لكل جامعة.',
  'جميع النتائج المعروضة هي نتائج تقديرية لأغراض إرشادية فقط، ولا تمثل ضمانًا للقبول الجامعي أو تأكيدًا لأهلية المتقدم.',
  'قد تختلف معايير وأوزان القبول من عام إلى آخر، ومن تخصص إلى آخر، وبين الطلاب والطالبات. ويتحمل المستخدم مسؤولية التحقق من شروط ومعايير القبول من خلال المواقع الرسمية للجامعات.',
  'موقع موزونتك غير تابع لأي جامعة أو جهة حكومية، ولا يمثلها أو يتحدث باسمها.',
  'باستخدامك للموقع، فإنك تقر بموافقتك على هذه الشروط.'];
const termsBody=[
  'باستخدامك لموقع موزونتك، فإنك توافق على الشروط التالية:',
  ['الموقع مخصص لحساب النسب الموزونة ومساعدة الطلاب والطالبات في معرفة فرصهم التقديرية للقبول الجامعي.',
   'النتائج المعروضة تقديرية ولا تضمن القبول في أي جامعة أو تخصص.',
   'يجب على المستخدم التأكد من صحة معايير القبول من المصادر الرسمية للجامعة.',
   'لا يتحمل الموقع مسؤولية القرارات التي يتخذها المستخدم بناءً على النتائج المعروضة.',
   'يُمنع استخدام الموقع لأي غرض مخالف للأنظمة والقوانين.',
   'يحق لإدارة الموقع تحديث الخدمات أو تعديل المحتوى والمعادلات عند الحاجة.'],
  'موزونتك منصة مستقلة وغير تابعة لأي جامعة أو جهة حكومية'];

/* ===== التنقل ===== */
const app=document.getElementById('app');
const h=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e};
let stack=[{t:'home'}];
history.replaceState({n:1},'');
function go(v){stack.push(v);history.pushState({n:stack.length},'');render();window.scrollTo(0,0)}
addEventListener('popstate',e=>{stack.length=(e.state&&e.state.n)||1;render()});

function card(i){
  const b=h('button','card'+(i.sm?' sm':'')+(i.color?' colored':''),i.label);
  b.type='button';if(i.color)b.style.setProperty('--c',i.color);
  b.onclick=i.fn;return b;
}
function openNode(n,path,skip){
  path=skip?path:[...path,n.name];
  if(n.parts)return go({t:'calc',title:path.join(' · '),parts:n.parts});
  if(n.children.length===1)return openNode(n.children[0],path,true);
  go({t:'list',title:path.join(' · '),items:n.children.map(c=>({label:c.name,color:c.color,sm:1,fn:()=>openNode(c,path)}))});
}
const ok=i=>{const x=i.value.trim();return x!==''&&x>=0&&x<=100};

function calcView(v){
  const f=h('div','fields'),btn=h('button','calc-btn','احسب'),res=h('div','result hidden');
  btn.type='button';btn.disabled=true;
  const ins=v.parts.map((p,k)=>{
    const w=h('div','field'),lb=h('label'),i=h('input');
    lb.htmlFor=i.id='f'+k;lb.append(p.label+' ',h('span',null,p.weight+'٪'));
    i.type='number';i.inputMode='decimal';i.min=0;i.max=100;i.step='any';i.placeholder='الدرجة من 100';
    i.oninput=()=>{i.classList.toggle('bad',i.value!==''&&!ok(i));res.classList.add('hidden');btn.disabled=!ins.every(ok)};
    w.append(lb,i);f.append(w);return i;
  });
  btn.onclick=()=>{
    if(btn.disabled)return;
    const t=ins.reduce((s,i,k)=>s+i.value*v.parts[k].weight/100,0);
    res.replaceChildren(h('small',null,v.rl||'موزونتك في '+v.title),h('strong',null,t.toFixed(2)+'٪'));
    res.classList.remove('hidden');
  };
  app.append(f,btn,res);
}

function render(){
  const v=stack[stack.length-1];
  app.innerHTML='';
  document.body.classList.toggle('inner',v.t!=='home');
  if(v.t==='home'){
    const g=h('div','grid');
    [{label:'موزونة الجامعات',fn:()=>go({t:'list',title:'موزونة الجامعات',items:unis.map(u=>({label:u.name,sm:1,fn:()=>openNode(u,[])}))})},
     {label:'تراكمي الثانوي',fn:()=>go({t:'calc',title:'تراكمي الثانوي',rl:'تراكمي الثانوي',parts:[{label:'أول ثانوي',weight:20},{label:'ثاني ثانوي',weight:40},{label:'ثالث ثانوي',weight:40}]})},
     {label:'شروط الكليات العسكرية',fn:()=>go({t:'list',title:'شروط الكليات العسكرية',items:mil.map(m=>({label:m.name,sm:1,fn:()=>go({t:'cond',title:m.name,secs:m.secs})}))})}
    ].forEach(i=>g.append(card(i)));
    app.append(g);return;
  }
  const b=h('button','back','← رجوع');b.type='button';b.onclick=()=>history.back();
  app.append(b,h('h2','title',v.title));
  if(v.t==='list'){const g=h('div','grid');v.items.forEach(i=>g.append(card(i)));app.append(g)}
  else if(v.t==='calc')calcView(v);
  else if(v.t==='doc')v.body.forEach(x=>{
    if(Array.isArray(x)){const o=h('ol','doc');x.forEach(s=>o.append(h('li',null,s)));app.append(o)}
    else app.append(h('p','doc',x));
  });
  else if(v.t==='cond')v.secs.forEach(([t,rows])=>{
    app.append(h('h3','sec',t));
    rows.forEach(([ic,tx])=>{const r=h('div','row');r.append(h('span','ic',ic),h('span',null,tx));app.append(r)});
  });
}
document.getElementById('terms').onclick=()=>go({t:'doc',title:'شروط الاستخدام',body:termsBody});
document.getElementById('disc').onclick=()=>go({t:'doc',title:'إخلاء المسؤولية',body:discBody});
render();
