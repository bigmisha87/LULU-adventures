const worlds=[{id:'street',name:'הרחובות',title:'רחובות תל אביב',day:'street-sunset.png',night:'street-night.png',desc:'מדרכות, מזגנים מטפטפים ושלטים שאף אחד לא ביקש.',details:['נביחה מפעילה תגובת שרשרת','שלולית, כלב גדול ומדרכה שבורה','חנות הירקות היא נקודת מנוחה']},{id:'shops',name:'החנויות',title:'חנויות עם יותר מדי פיתויים',day:'street-original.png',desc:'ירקן שכבר מכיר את לולו, מכולת וצעצוע זול שהוא פשוט חייב.',details:['חטיפים להחזרת כוח','צעצועים על מדפים גבוהים','קיצורי דרך דרך חנויות']},{id:'vet',name:'הווטרינר',title:'רק בדיקה קטנה',day:'street-original.png',desc:'המסדרון הכי ארוך בעולם, לפחות מנקודת המבט של לולו.',details:['מסלול זהיר בין ציוד וכיסאות','תגמול אחרי ביקור אמיץ','משה מחכה בסוף הבדיקה']},{id:'pet',name:'חנות החיות',title:'כל מה שמצפצף נמצא כאן',day:'street-original.png',desc:'חנות צעצועים וחטיפים שהיא גן עדן לכלב עם אפס שליטה עצמית.',details:['כדור צפצפה מפעיל אובססיה','חטיפים משיבים כוח','משלוח חדש פותח אזור סודי']},{id:'apartment',name:'הדירות',title:'הסלון הוא זירת קרב',day:'street-sunset.png',night:'street-night.png',desc:'ספות הן הרים, שולחנות הם מנהרות ושואב האבק חושב שהוא הבוס.',details:['קפיצה בין כריות ורהיטים','צעצוע אבוד מתחת לספה','שואב אבק רובוטי כבוס']},{id:'agency',name:'משרדי הפרסום',title:'מישהו פה עובד?',day:'street-original.png',desc:'כבלים, כיסאות על גלגלים וחדר ישיבות שלולו כבר סימן כשלו.',details:['נביחה באמצע ישיבה','מסלול מעל שולחנות וכיסאות','כדור מתחת לשולחן הקריאייטיב']},{id:'beach',name:'חוף הים',title:'חול בכל מקום',day:'street-sunset.png',night:'street-night.png',desc:'טיילת, חול וגלים. לולו שוב מצא דרך לחזור הביתה רטוב.',details:['שלוליות בין הסלעים','עורב מנסה לגנוב חטיף','הטיול מסתיים ליד הים']}];
const moves=[{id:'walk',name:'ריצה',title:'ריצה עם אטיטיוד',tag:'תנועה',desc:'ארבע רגליים קצרות, קצב אחד והרבה ביטחון. לולאת הריצה החדשה של לולו.'},{id:'jump',name:'קפיצה',title:'קטנה, אבל עם כוונה',tag:'פלטפורמינג',desc:'לולו קופץ מעט. הדרך למעלה עוברת בארגזים, מדרגות וכל מה שהעיר השאירה בחוץ.'},{id:'bark',name:'נביחה',title:'הרחוב צריך לדעת',tag:'פאזלים ותגובות',desc:'נביחה מכוונת מבהילה ציפורים, מזיזה חתול, מפעילה חיישן ופותחת שרשרת אירועים.'},{id:'pee',name:'סימון',title:'בדיוק איפה שאסור',tag:'חיפוש ובונוסים',desc:'הרמת רגל קצרה וסימון טריטוריה. שלטי איסור מסתירים את הבונוסים הכי טובים בשלב.'},{id:'puddle',name:'שלולית',title:'אין אפשרות לעבור ליד',tag:'האצה זמנית',desc:'לולו נכנס למים בהתלהבות. מהירות, השפרצות ורגע של אושר טהור על חשבון הסביבה.'},{id:'bounce',name:'כלב־טרמפולינה',title:'הבעיה הופכת למקפצה',tag:'תזמון ותנועה',desc:'קפיצה בתזמון נכון על גב של כלב גדול נותנת זינוק גבוה. לפעמים צריך לפתות אותו למקום המתאים.'}];
const cast=[['יונה','מטרד בסיסי','גונבת אוכל ומפריעה בדרך. נביחה אחת שולחת אותה לחפש מדרכה אחרת.'],['עורב','יריב חכם','חוטף צעצוע חשוב ומוביל את לולו למרדף דרך השלב.'],['כלב גדול','יריב וגם מקפצה','חוסם, רודף ונובח. בתזמון הנכון הגב שלו הוא הדרך למרפסת.'],['עכבר','יריב קטן ומהיר','חומק בין ארגזים, מופיע בפתאומיות ומנסה להגיע לחטיף לפני לולו.'],['חולדה','יריב גדול יותר','גדולה בבירור מהעכבר, עקשנית יותר ושומרת על מעברים ליד פחים.'],['מכונת ניקוי','מיני־בוס עירוני','מברשות, מים והעלבון הגדול מכולם: מחיקה של סימוני הטריטוריה.'],['שואב אבק','בוס ביתי','מנקודת המבט של לולו זו מכונת מלחמה. מרחוק? סתם שואב רובוטי.'],['חתול','עוזר בפאזלים','לולו לא מתעניין בו, עד שצריך שיקפוץ על מתג או יפיל משהו.']];
const items=[['כדור צפצפה','כל שיקול דעת נעלם.','מהירות וקפיצה לזמן קצר'],['תרנגולת גומי','רועשת. מיותרת. מושלמת.','פריט לאוסף'],['חזיר פלסטיק','עוד אוצר מהחנות.','פריט לאוסף'],['שקית חטיפים','הדרך הקצרה ללב של לולו.','החזרת כוח'],['חטיף עצם','עצירה קטנה באמצע הכאוס.','החזרת כוח'],['משהו מגומי','יישבר בעוד ארבע דקות.','בונוס חיפוש'],['אסימון כפה','מזכרת מפינה סודית בעיר.','בונוס חיפוש'],['קערת מים','רגע של מנוחה.','התאוששות']];
const $=s=>document.querySelector(s);
const keyframes=[
 ['01-tel-aviv-day-bark','רחוב אחד. הרבה מה להגיד.','נביחה קטנה שולחת את היונים לדרך חדשה.','תל אביב · יום'],
 ['02-tel-aviv-night-rats','כשהעיר נדלקת, הטיול ממשיך.','חולדה גדולה, עכבר קטן ושלולית שאי אפשר לעקוף.','תל אביב · לילה'],
 ['03-pet-shop-treasures','יש דברים שפשוט חייבים לקחת.','צעצוע חדש הוא סיבה מצוינת לסטות מהמסלול.','חנות החיות'],
 ['04-apartment-trampoline','לפעמים הדרך למעלה היא כלב.','קפיצה על הגב הגדול. זינוק אל הספה.','הדירה · לילה'],
 ['05-advertising-office-robot','הוא בא לבקר. השואב בא לעבוד.','כיסאות, כבלים ומפגש קטן עם הבוס של הרצפה.','משרד הפרסום'],
 ['06-beach-sunset-jump','עוד קפיצה. ואז הביתה.','העיר נגמרת בים. הטיול נגמר אצל משה.','החוף · שקיעה']
];
function sceneImage(s){return `<img src="assets/keyframes/${s[0]}-2000.webp" srcset="assets/keyframes/${s[0]}-960.webp 960w, assets/keyframes/${s[0]}-2000.webp 2000w" sizes="(min-width:2000px) 1840px, 94vw" width="2000" height="1125" alt="${s[1]} — ${s[3]}" loading="lazy">`}
$('#keyframe-gallery').innerHTML=keyframes.map((s,i)=>`<article class="keyframe-story"><div class="scene-copy"><span class="eyebrow">${s[3]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div><figure>${sceneImage(s)}<figcaption><span dir="ltr">0${i+1} / LULU ADVENTURES</span><span>פריים מתוך העולם</span></figcaption></figure></article>`).join('');
const worldAssets=[['street-day.webp','street-night-background.webp'],['shops.webp'],['vet.webp'],['pet-shop.webp'],['apartment-day.webp','apartment-night.webp'],['agency.webp'],['beach-day.webp','beach-night.webp']];
$('#world-gallery').innerHTML=worlds.map((w,i)=>`<article class="world-chapter"><div class="world-copy"><span class="eyebrow">טיול ${String(i+1).padStart(2,'0')}</span><h3>${w.title}</h3><p>${w.desc}</p></div><div class="world-pair">${worldAssets[i].map((file,j)=>`<figure><img src="assets/${file}" alt="${w.title}${worldAssets[i].length>1?(j?' בלילה':' ביום'):''}" width="1600" height="900" loading="lazy"><figcaption>${worldAssets[i].length>1?(j?'לילה':'יום'):w.name}</figcaption></figure>`).join('')}</div><ul class="world-details">${w.details.map(d=>'<li>'+d+'</li>').join('')}</ul></article>`).join('');
const atlases={walk:'lulu-run-manual',jump:'lulu-jump',bark:'lulu-bark',pee:'lulu-pee',puddle:'lulu-puddle',bounce:'lulu-jump'};
$('#all-moves').innerHTML=moves.map(m=>`<article class="move-card"${m.id==='walk'?' id="run-preview"':''}><div class="move-visual" data-move="${m.id}"><div class="trampoline-dog" aria-hidden="true"><img src="assets/individual/enemies/big-dog.webp" alt=""></div><div class="puddle-surface" aria-hidden="true"></div><button type="button" class="move-run" aria-label="עצירת אנימציית ${m.name}" aria-pressed="false"><div class="run-strip"><img src="assets/${atlases[m.id]}.webp" alt="לולו — ${m.name} — שמונה פריימים" width="5120" height="512"></div><span class="pee-stream" aria-hidden="true"></span><span class="splash-drops" aria-hidden="true"><i></i><i></i><i></i><i></i></span></button><div class="demo-ground"></div></div><div class="move-copy"><span class="eyebrow">${m.tag}</span><h3>${m.name}</h3><p>${m.desc}</p><span class="note">לחיצה על לולו עוצרת או ממשיכה את האנימציה</span></div></article>`).join('');
document.querySelectorAll('.move-run').forEach(button=>button.addEventListener('click',()=>{const paused=button.classList.toggle('paused');button.setAttribute('aria-pressed',String(paused));button.setAttribute('aria-label',paused?'המשך האנימציה':'עצירת האנימציה')}));
const enemyFiles=['pigeon','crow','big-dog','mouse','rat','street-sweeper','robot-vacuum','cat'];
const itemFiles=['squeaky-ball','rubber-chicken','plastic-pig','treat-bag','bone-treat','rubber-toy','paw-token','water-bowl'];
function tile(group,file,alt){return `<div class="single-art single-${file}"><img src="assets/individual/${group}/${file}.webp" alt="${alt}" loading="lazy"></div>`}
$('#cast-grid').innerHTML=cast.map((c,i)=>`<article class="cast-card">${tile('enemies',enemyFiles[i],c[0])}<div class="card-copy"><span class="role">${c[1]}</span><h3>${c[0]}</h3><p>${c[2]}</p></div></article>`).join('');
$('#items-grid').innerHTML=items.map((it,i)=>`<article class="item-card">${tile('items',itemFiles[i],it[0])}<div class="card-copy"><h3>${it[0]}</h3><p>${it[1]}</p><span class="item-effect">${it[2]}</span></div></article>`).join('');
$('#finale-image').src='assets/finale-hug-v2.webp';
$('#finale-image').alt='משה מחבק את לולו על רקע תל אביב בשקיעה';
$('.finale').insertAdjacentHTML('afterend','<section class="section moshe-section"><figure class="moshe-portrait"><img src="assets/moshe-upright-v2.webp" alt="משה בסגנון המצויר של המשחק" loading="lazy"></figure><div><span class="eyebrow">האדם של לולו</span><h2>משה.<br>הבית בסוף הדרך.</h2><p>בסוף כל שלב משה מגיע, אוסף את לולו, ושניהם ממשיכים יחד. הרגע הרגוע אחרי כל הבלגן.</p></div></section>');
$('#motion-toggle').addEventListener('click',()=>{const on=document.documentElement.classList.toggle('reduced-motion');$('#motion-toggle').setAttribute('aria-pressed',String(on));$('#motion-toggle').textContent=on?'הפעלת הנפשות':'הפחתת הנפשות'});
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.06});
 document.querySelectorAll('.scene-copy,.section-heading,.world-copy').forEach(el=>{el.classList.add('reveal');revealObserver.observe(el)});
 const motionObserver=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('offscreen',!e.isIntersecting)),{rootMargin:'60px'});
 document.querySelectorAll('.move-card').forEach(el=>motionObserver.observe(el));
}

// Begin the concept film only after a user gesture, with its soundtrack enabled.
const heroVideo=document.querySelector('.hero-video');
const heroPlay=document.querySelector('.hero-play');
if(heroVideo&&heroPlay){
 heroVideo.controls=false;
 heroPlay.hidden=false;
 heroPlay.addEventListener('click',async()=>{
  heroVideo.muted=false;
  heroVideo.volume=1;
  heroVideo.controls=true;
  try{await heroVideo.play()}catch{heroPlay.hidden=false}
 });
 heroVideo.addEventListener('playing',()=>{heroPlay.hidden=true});
 heroVideo.addEventListener('ended',()=>{heroPlay.hidden=false;heroVideo.controls=false});
}
